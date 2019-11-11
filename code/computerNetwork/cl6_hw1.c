#include<stdio.h>
#include<sys/socket.h>
#include<arpa/inet.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<errno.h>

#define BUF_SIZE 800
#define SERVER_PORTNUM 9000
#define QUEUE_SIZE 1

char mess[BUF_SIZE] = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nHello World\r\n";
char strClientIP[50], strClientPort[50];

void error_handler(const char *message){
    fprintf(stderr,"%s",message);
    exit(1);
}

char* clientAddress(uint32_t clientIPAddress){
    int curr, multy, pos = 0, numberLength;
    for(int i=0; i<4; i++){
        curr = 0;
        multy = 1;
        for(int j=0; j<8; j++){
            curr += clientIPAddress%2*multy;
            clientIPAddress/=2;
            multy*=2;
        }
        if(curr>=100) {
            numberLength = 3;
            multy = 100;
        } else if(curr>=10) {
            numberLength = 2;
            multy = 10;
        } else {
            numberLength = 1;
            multy = 1;
        }
        for(int j=0; j<numberLength;j++){
            strClientIP[pos] = curr/multy+'0';
            curr %= multy;
            multy/=10;
            pos++;
        }
        strClientIP[pos] = '.';
        pos++;
    }
    strClientIP[pos]='\0';
    printf("IP: %s\n", strClientIP);
    return strClientIP;
}

char* clientPortNumber(uint32_t clientPortReversed){
    int curr, multy, pos = 0, numberLength;
    int resInt = 0;
    for(int i=0; i<2; i++){
        curr = 0;
        multy = 1;
        for(int j=0; j<8; j++){
            curr += clientPortReversed%2*multy;
            clientPortReversed/=2;
            multy*=2;
        }
        resInt = resInt*256+curr;
    }
    pos = 0;
    while(resInt > 0){
        strClientPort[pos] = resInt%10+'0';
        ++pos;
        resInt /= 10;
    }
    strClientPort[pos] = '\0';
    pos --;
    for(int i=0; i<pos/2; i++){
        char temp;
        temp = strClientPort[i];
        strClientPort[i] = strClientPort[pos-i];
        strClientPort[pos-i] = temp;
    }
    printf("PORT: %s\n", strClientPort);
    return strClientPort;
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
    printf("Received message: ");
    while(1){
        // receive messages from the server
        if((received_bytes = recv(client_sock, buf, sizeof(buf)-1, 0))<0){
            goto ERROR2;
        }
        else if (received_bytes==0) break;
        buf[received_bytes] = '\0';
        printf("%s",buf);

        // Add HTTP, IP and PORT to message 
        //printf("%s\n", clientPortNumber(client_addr.sin_port));
        clientPortNumber(client_addr.sin_port);
        clientAddress(client_addr.sin_addr.s_addr);
        sprintf(mess, "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nHello world<br>Client IP: %s<br>Client port: %s\r\n", strClientIP, strClientPort);
        //send messages to the client
        int send_length = strlen(mess);
        int total_sent_size;
        for (total_sent_size = 0; total_sent_size<send_length;){
            int sent_size;
            if((sent_size = send(client_sock, &mess[total_sent_size],send_length - total_sent_size,0))<0){
                goto ERROR2;
            }
            total_sent_size+=sent_size;
        }
    }
    close(client_sock);
    close(serv_sock);
    // close the client socket
    
    // close the server socket
    
ERROR2:
    if (client_sock >=0 ) close(client_sock);
ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if(serv_sock >= 0 ) close(serv_sock);
    return 1;
}