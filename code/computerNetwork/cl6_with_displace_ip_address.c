#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <inttypes.h>

#define BUF_SIZE 800
#define SERVER_PORTNUM 9000
#define QUEUE_SIZE 1

uint32_t reverse_bytes_32(uint32_t bytes);
int uint32_t_to_ip(char *buf, uint32_t bytes);
uint16_t reverse_bytes_16(uint16_t bytes);
int uint16_t_to_port(char *buf, uint16_t bytes);

int main(int argc, char *argv[]){
    int serv_sock;
    // Create a socket
    if ((serv_sock= socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0)
        goto ERROR;
    
    // Initialize
    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family= AF_INET;
    server_addr.sin_addr.s_addr= htonl(INADDR_ANY);
    server_addr.sin_port= htons(SERVER_PORTNUM);

    // Bind
    if (bind(serv_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0)
        goto ERROR;

    // Listen
    if (listen(serv_sock, QUEUE_SIZE) < 0)
        goto ERROR;
    
    struct sockaddr_in client_addr;
    int client_sock;
    socklen_t addr_len= sizeof(client_addr);
    if ((client_sock= accept(serv_sock, (struct sockaddr *)&client_addr, &addr_len)) /* */ < 0)
        goto ERROR;
    // Receive message from the client
    char buf[BUF_SIZE];
    int received_bytes= 0;
    printf("Received messages: ");
    while(1){
        // Receive messages from the server
        if ((received_bytes= recv(client_sock, buf, sizeof(buf) - 1, 0)) < 0)
            goto ERROR2;
        else if (received_bytes == 0)
            break; // Connection closed by client
        buf[received_bytes]= '\0';
        printf("%s", buf);

        // Send messages to the client

        char to_browser[BUF_SIZE];
        // Add HTTP, IP and PORT to message 
        uint32_t n_ip= reverse_bytes_32(client_addr.sin_addr.s_addr);
        uint16_t n_port= reverse_bytes_16(client_addr.sin_port);
        char str_ip[BUF_SIZE], str_port[BUF_SIZE];
        uint32_t_to_ip(str_ip, n_ip);
        uint16_t_to_port(str_port, n_port);

        sprintf(to_browser, "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nHello world<br>Client IP: %s<br>Client port: %s\r\n", str_ip, str_port);
        
        int to_browser_buf= strlen(to_browser)*sizeof(char);
        int total_sent_size;
        for (total_sent_size= 0; total_sent_size < to_browser_buf; ){
            int sent_size;
            if ((sent_size= send(client_sock, &to_browser[total_sent_size], to_browser_buf - total_sent_size, 0)) < 0)
                goto ERROR2;
            total_sent_size+= sent_size;
        }
    }
    // Close client socket
    close(client_sock);

    // Close server socket
    close(serv_sock);
    return 0;
ERROR2:
    if (client_sock >= 0)
        close(client_sock);

ERROR:
    fprintf(stderr, "ERROR: %s\n", strerror(errno));
    if (serv_sock >= 0)
        close(serv_sock);
    return 1;
}

uint32_t reverse_bytes_32(uint32_t bytes){
    uint32_t aux = 0;
    uint8_t byte;
    int i;
    for(i = 0; i < 32; i+=8)    {
        byte = (bytes >> i) & 0xff;
        aux |= byte << (32 - 8 - i);
    }
    return aux;
}

int uint32_t_to_ip(char *buf, uint32_t bytes){  // Assume that the bytes are reversed already, in case of network byte order
    uint32_t part4, part3, part2, part1;
    part4 = bytes & 0x000000ff;
    part3 = (bytes & 0x0000ff00) >> 8;
    part2 = (bytes & 0x00ff0000) >> 16;
    part1 = (bytes & 0xff000000) >> 24;
    sprintf(buf, "%" PRIu32 ".%" PRIu32 ".%" PRIu32 ".%" PRIu32 "", part1, part2, part3, part4);
    return 0;
}

uint16_t reverse_bytes_16(uint16_t bytes){
    uint16_t aux = 0;
    uint8_t byte;
    int i;
    for(i = 0; i < 16; i+=8)    {
        byte = (bytes >> i) & 0xff;
        aux |= byte << (16 - 8 - i);
    }
    return aux;
}

int uint16_t_to_port(char *buf, uint16_t bytes){  // Assume that the bytes are reversed already, in case of network byte order
    sprintf(buf, "%" PRIu16 "", bytes);
    return 0;
}