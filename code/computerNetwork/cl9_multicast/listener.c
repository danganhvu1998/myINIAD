#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <errno.h>

#define BUF_SIZE 4096
const int SERVER_PORTNUM = 9000;
const int QUEUE_SIZE     = 1;
const char GROUP_ADDR[]  = "239.255.*****"; // group address

int main( int argc, char *argv[]) {
    int recv_sock;
    // create a socket.
    if ((recv_sock = socket(PF_INET, /* , */)) < 0) goto ERROR;

    // allow multiple sockets to use the same port number.
    /* */ yes = 1;
    if (setsockopt(recv_sock, /*  */) < 0){
       perror("REUSEADDR failed");
       goto ERROR;
    }

    // initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = /* */; // ANY
    server_addr.sin_port = htons(SERVER_PORTNUM);

    // bind
    if (bind(recv_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) goto ERROR;

    struct ip_mreq mreq;
    memset(&mreq, 0, sizeof(mreq));
    mreq.imr_interface.s_addr = /* */; // ANY
    mreq.imr_multiaddr.s_addr = /* */; // Group address

    // join multicast group
    if (setsockopt(recv_sock, /* */) < 0) {
        goto ERROR;
    }

    struct sockaddr_in client_addr;
    socklen_t addr_len = sizeof(client_addr);

    char buf[BUF_SIZE];
    int received_bytes = 0;
    while(1) {
        // receive messages from a sender
        if ((received_bytes = recvfrom(recv_sock, buf, sizeof(buf)-1, 0, (struct sockaddr *)&client_addr, &addr_len)) == -1){
            printf("\nreceive failure\n");
            continue;
        }

        buf[received_bytes] = '\0';
        printf("Received from: %s.\n", inet_ntoa(((struct sockaddr_in *)&client_addr)->sin_addr));
        printf("%s\n", buf);
    }

    // close the server socket.
    close(recv_sock);
    return EXIT_SUCCESS;

ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if (recv_sock >= 0) close(recv_sock);
    return EXIT_FAILURE;
}