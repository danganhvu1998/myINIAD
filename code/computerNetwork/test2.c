#include<stdio.h>
#include<sys/socket.h>
#include<arpa/inet.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<errno.h>

#define BUF_SIZE 8000
#define SERVER_PORTNUM 9000
#define QUEUE_SIZE 1

void error_handler(const char *message){
    fprintf(stderr,"%s",message);
    exit(1);
}

int main(int argc, char *argv[]){
    // create a socket;
    int serv_sock;
    if((serv_sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP))<0){
        goto ERROR;
    }
    // initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    server_addr.sin_port = htons(SERVER_PORTNUM);
    // bind
    if(bind(serv_sock, (struct sockaddr *) &server_addr, sizeof(server_addr))<0) goto ERROR;
    // listen
    if(listen(serv_sock, QUEUE_SIZE)<0) goto ERROR;
    struct sockaddr_in client_addr;
    int client_sock;
    socklen_t addr_len = sizeof(client_addr);
    if((client_sock = accept(serv_sock, (struct sockaddr*)&client_addr,
    &addr_len))<0) goto ERROR;
    // receive message from the client
    char buf[BUF_SIZE];
    int received_bytes = 0;
    int cnt = 0;
    printf("Received message: ");
    while(1){
        printf("COUNT: %d\n", ++cnt);
        // receive messages from the server
        if((received_bytes = recv(client_sock, buf, sizeof(buf)-1, 0))<0){
            printf("received_bytes: %d\n", received_bytes);
            goto ERROR2;
        } else if (received_bytes==0) break;
        buf[received_bytes] = '\0';
        printf("%s",buf);
        printf("Go to 1\n");

        //send messages to the client
        int total_sent_size;
        for (total_sent_size = 0; total_sent_size<received_bytes;){
            int sent_size;
            if((sent_size = send(client_sock, &buf[total_sent_size],received_bytes - total_sent_size,0))<0){
                goto ERROR2;
            }
            total_sent_size+=sent_size;
            printf("%d %d\n", total_sent_size, received_bytes);
        }
        printf("Go to 2\n");
    }
    // close the client socket
    printf("\n=======\nClose Connection\n=======\n");
    close(client_sock);
    // close the server socket
    close(serv_sock);
ERROR2:
    if (client_sock >=0 ) close(client_sock);
ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if(serv_sock >= 0 ) close(serv_sock);
    return 1;
}