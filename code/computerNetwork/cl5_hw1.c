#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>

const int BUF_SIZE = 256;
const char SERVER_IP[] = "127.0.0.1";
const unsigned short SERVER_PORTNUM = 9000;
const char MESSAGE[] = "Hello echo server.";

void error_handler(const char *message){
    fprintf(stderr,"%s",message);
    exit(1);
}

int main(int argc, char *argv[]){
    int sock;
    //create a socket
    if ((sock = socket(PF_INET, SOCK_STREAM,IPPROTO_TCP)) < 0){
        error_handler("socket() failed.\n");
    }

    //initialize
    struct sockaddr_in server_addr;
    memset(&server_addr,0,sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = inet_addr(SERVER_IP);
    server_addr.sin_port = htons(SERVER_PORTNUM);

    //connect to the server
    if(connect(sock,(struct sockaddr *) &server_addr,sizeof(server_addr)) < 0){
        error_handler("connect() failed.\n");
    }

    //send a message to the server
    int message_size = strlen(MESSAGE);
    int total_sent_size;
    for (total_sent_size = 0; total_sent_size < message_size; ){
        int sent_size;
        if ((sent_size = send(sock,&MESSAGE[total_sent_size],message_size-total_sent_size,0)) < 0){
            error_handler("send() failed.\n");
        }
        total_sent_size += sent_size;
    }   
    char buf[BUF_SIZE];
    int received__bytes = 0, total_received_bytes = 0;
    printf("Received messages: ");
    while (1)
    {
        // receive messages from the server
        if((received__bytes = recv(sock,buf,sizeof(buf)-1,0)) < 0){
            error_handler("recv() failed.\n");
        }
        else if (received__bytes == 0) {break; }
        total_received_bytes += received__bytes;
        buf[received__bytes] = '\0';
        printf("%s",buf);
    }
    printf("\n");

    //close the socket
    close(sock);
    exit(0);
    
}