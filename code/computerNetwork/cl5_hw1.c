#include <stdio.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <stdlib.h>
#include <string.h>

const int BUF_SIZE = 256;
char SERVER_IP[100];
unsigned short SERVER_PORTNUM = 9000;
char MESSAGE[1000] = "What the fuck is that\n";
const char END_MESSAGE[] = "\n\n";

void error_handler(const char *message){
    fprintf(stderr,"%s",message);
    exit(1);
}

int main(int argc, char *argv[]){
    int sock;
    while(1){
      printf("SERVER IP: ");
      fgets(SERVER_IP, sizeof(SERVER_IP), stdin);
      printf("SERVER IP: ");
      scanf("%hd", &SERVER_PORTNUM);
      strcpy(MESSAGE, strcat(MESSAGE, END_MESSAGE));
      if ((sock = socket(PF_INET, SOCK_STREAM,IPPROTO_TCP)) < 0){
          error_handler("socket() failed.\n");
      }

      struct sockaddr_in server_addr;
      memset(&server_addr,0,sizeof(server_addr));
      server_addr.sin_family = AF_INET;
      server_addr.sin_addr.s_addr = inet_addr(SERVER_IP);
      server_addr.sin_port = htons(SERVER_PORTNUM);
      if(connect(sock,(struct sockaddr *) &server_addr,sizeof(server_addr)) < 0){
          error_handler("connect() failed.\n");
      }
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
          printf("%s", buf);
      }
      printf("\n");
      close(sock);
      //close the socket
    }
    exit(0); 
}
