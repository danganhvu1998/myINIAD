#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netdb.h>
#include <unistd.h>
#include <pthread.h>

void* client_thread(void* arg)
{
    int clientfd = (int)(intptr_t)arg;
    // printf("arg: %d\n", clientfd);

    struct sockaddr_storage addr;
    socklen_t addrlen= sizeof(addr);
    if(getpeername(clientfd, (struct sockaddr*)&addr, &addrlen) != 0){
        goto error;
    }
    char host[128], serv[128], out[1024];
    int len, i, wlen;

    if(getnameinfo((struct sockaddr*)&addr, addrlen, host, sizeof(host), serv, sizeof(serv), 0) != 0){
        goto error;
    }
    printf("Address: %s\nPort: %s\n", host, serv);

    len = sprintf(out, "Your address is %s at port %s\n", host, serv);
    for (i = 0; i < 1024; ) {
        wlen = write(clientfd, out + i, len - i);
        if (wlen < 0) goto error;

        i += wlen;
    }   

    close(clientfd);
    return NULL;
    
error:
    fprintf(stderr, "ERROR\n");
    close(clientfd);
    return NULL;
}

int main(int argc, char* argv[])
{
    struct addrinfo hints, *res = NULL, *r;
    const char* portname = "10001";
    int sockfd, er;

    /* Resolve addresses */./asw
    memset(&hints, 0, sizeof(hints));
    hints.ai_family = AF_INET6; /* AF_INET6(IPv6) or AF_INET(IPv4) */
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE; /* address for bind(2) */
    er = getaddrinfo(NULL, portname, &hints, &res);
    if (er != 0) goto error;

    /* Try to connect to any one of the addresses got */
    for (r = res; r != NULL; r = r->ai_next) {
        sockfd = socket(r->ai_family, r->ai_socktype, r->ai_protocol);
        if (sockfd < 0) continue;

        er = bind(sockfd, r->ai_addr, r->ai_addrlen);
        if (er < 0) {
            close(sockfd);
            sockfd = -1;
            continue;
        }

        /* Successfully connected */
        break;
    }
    if (sockfd < 0) goto error;

    freeaddrinfo(res);
    res = NULL;

    er = listen(sockfd, 5);
    if (er < 0) goto error;

    for (;;) {
        pthread_t thread;
        struct sockaddr_storage addr;
        socklen_t addrlen;
        int clientfd;
    
        addrlen = sizeof(addr);
        er = accept(sockfd, (struct sockaddr*)&addr, &addrlen);
        if (er < 0) goto error;

        clientfd = er;

        // getpeername(clientfd, (struct sockaddr*)&addr, &addrlen);
        // char host[1024], serv[1024];
        // socklen_t hostlen= 1024, servlen= 1024;

        // getnameinfo((struct sockaddr*)&addr, addrlen, host, sizeof(host), NULL, 0, 0);
        // printf("%s\n", host);

        pthread_create(&thread, NULL, client_thread, (void*)(intptr_t)clientfd);
        pthread_detach(thread);
    }

    /* Never reached */
    close(sockfd);
    return 0;

 error:
    if (res) freeaddrinfo(res);
    if (sockfd >= 0) close(sockfd);
    return -1;
}