#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <errno.h>

#define BUF_SIZE 3000
#define SERVER_PORTNUM 9000

int main( int argc, char *argv[]) {
    int serv_sock;
    // create a socket.
    if ((serv_sock = socket(PF_INET, /* UDP(Datagram) */)) < 0) goto ERROR;

    // initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    /* 
        initialize server_addr (s_addr: 0.0.0.0)
    */

    // bind
    if (/* bind */) goto ERROR;

    struct sockaddr_in client_addr;
    socklen_t addr_len = sizeof(client_addr);

    // receive message from the client
    char buf[BUF_SIZE];
    int received_bytes = 0;
    while(1) {
        // receive messages from the server
        if (/* receive */){
            perror("\nreceive failed\n");
            continue;
        } else if (received_bytes == 0) {
            printf("\nconnection closed\n");
            continue;
        }

        buf[received_bytes] = '\0';
        printf("Received from: %s.\n", inet_ntoa(((struct sockaddr_in *)&client_addr)->sin_addr));
        printf("%s", buf);

        // send messages to the client
        int sent_size;
        if ((/* send */) != received_bytes ) {
            perror("\nsend failed.\n");
            continue;
        }
        printf("\n");
    }

    // close the server socket.
    close(serv_sock);
    return EXIT_SUCCESS;

ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if (serv_sock >= 0) close(serv_sock);
    return EXIT_FAILURE;
}