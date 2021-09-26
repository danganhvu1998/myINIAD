#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define BUF_SIZE  2000
const char SERVER_IP[] = "127.0.0.1";
const unsigned short SERVER_PORTNUM = 9000;
const char MESSAGE[] = "Hello UDP echo server.";

int main( int argc, char *argv[]) {
    int sock;
    // create a socket.
    if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
        perror("socket() failed.\n");
        goto ERROR;
    }

    // initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = htonl(INADDR_ANY);
    server_addr.sin_port = htons(SERVER_PORTNUM);
    /* Not sure about above
        initialize server_addr 
    */

    printf("Message to be sent: %s\n", MESSAGE);
    // send a message to the server
    int message_size = strlen(MESSAGE);
    if(sendto(sock, &MESSAGE,message_size,0, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        perror("send failed.\n");
        goto ERROR;
    }

    char buf[BUF_SIZE];
    int received_bytes = 0;
    socklen_t addr_size = sizeof(server_addr);
    while(1) {
        // receive messages from the server
        if ((received_bytes = recvfrom(sock, buf, sizeof(buf)-1, 0, (struct sockaddr *)&server_addr, &addr_size)) < 0) {
            perror("receive failed.\n");
            goto ERROR;
        }
        buf[received_bytes] = '\0';
        printf("Received messages: %s\n", buf);
    }
    printf("\n");

    // close the socket.
    close(sock);
    return(0);

ERROR:
    if(sock >= 0) close(sock);
    return(EXIT_FAILURE);
}