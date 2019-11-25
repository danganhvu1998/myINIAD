#include <stdio.h>
#include <sys/socket.h> // socket etc.
#include <arpa/inet.h>  // htons, inet_addr, IPPROTO_TCP, sockaddr_in
#include <stdlib.h> // exit
#include <string.h> // strlen, memset
#include <unistd.h>  // close
#include <errno.h>
#include <pthread.h>

#define BUF_SIZE 800
#define SERVER_PORTNUM 9000
#define QUEUE_SIZE  1

typedef struct thread_arg {
    int sockfd;
} thread_arg;

char MESSAGE[1000] = "Hello World\n";

void* client_thread(void* arg) {
    thread_arg *sock_data = arg;
    int client_sock = sock_data->sockfd;
    free(arg);

    // receive message from the client
    char buf[BUF_SIZE];
    int received_bytes = 0;
    printf("Received messages: ");
    while(1) {
        // receive messages from the server
        if ((received_bytes = recv(client_sock, buf, sizeof(buf)-1, 0))<0) {
            perror("receive error");
            exit(EXIT_FAILURE);
        }
        else if (received_bytes == 0) break; // connection closed by client
        buf[received_bytes] = '\0';
        printf("%s", buf);

        // send messages to the client
        int total_sent_size;
        int send_length = strlen(MESSAGE);
        for (total_sent_size = 0; total_sent_size<send_length;){
            int sent_size;
            if((sent_size = send(client_sock, &MESSAGE[total_sent_size],received_bytes - total_sent_size,0))<0){
                printf("Loi VKL a :((\n");
            }
            total_sent_size+=sent_size;
        }

    }

    // close the client socket.
    close(client_sock);
    return NULL;
}

int main( int argc, char *argv[]) {
    int serv_sock;
    // create a socket.
    if ((serv_sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0) goto ERROR;

    // initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    server_addr.sin_port = htons(SERVER_PORTNUM);

    // bind
    if (bind(serv_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) goto ERROR;

    // listen
    printf("listening on port %d\n", SERVER_PORTNUM);
    if (listen(serv_sock, QUEUE_SIZE) < 0) goto ERROR;

    struct sockaddr_in client_addr;
    thread_arg *client;
    socklen_t addr_len = sizeof(client_addr);
    while(1) {
        client = (void*)malloc(sizeof(thread_arg));
        if ((client->sockfd = accept(serv_sock, (struct sockaddr *)&client_addr, &addr_len )) < 0 ) goto ERROR;

        pthread_t tid;
        if(pthread_create(&tid, NULL, client_thread, (void*)client)) {
            perror("pthread create");
            goto ERROR2;
        }
        // detach thread
        pthread_detach(tid);
    }
    
    // close the server socket.
    close(serv_sock);
    return 0;

ERROR2:
    if (client!=NULL && client->sockfd >= 0) close(client->sockfd);
    if (client!=NULL) free(client);

ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if (serv_sock >= 0) close(serv_sock);
    return(EXIT_FAILURE);
}

