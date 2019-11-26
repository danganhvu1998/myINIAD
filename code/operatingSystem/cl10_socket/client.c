#include <stdio.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netdb.h>
#include <unistd.h>

int main(int argc, char* argv[])
{
    char buf[1024];
    char *hostname, *portname;
    struct addrinfo *res = NULL, *r;
    int sockfd = -1;
    int er, i, len, wlen, rlen;
    
    if (argc < 2 || argc > 3) {
        fprintf(stderr, "Usage: client <hostname> (<portname>)\n");
        return -1;
    }
    hostname = argv[1]; /* e.g., www.google.com */
    portname = (argc > 2) ? argv[2] : "http"; /* e.g., http, 80, ... */

    /* Resolve addresses */
    er = getaddrinfo(hostname, portname, NULL, &res);
    if (er != 0) goto error;

    /* Try to connect to any one of the addresses got */
    for (r = res; r != NULL; r = r->ai_next) {
        sockfd = socket(r->ai_family, r->ai_socktype, r->ai_protocol);
        if (sockfd < 0) continue;

        er = connect(sockfd, r->ai_addr, r->ai_addrlen);
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
    
    len = sprintf(buf, "GET / HTTP/1.1\r\n"
                  "Host: %s\r\n"
                  "Connection: close\r\n"
                  "\r\n", hostname);

    /* Write whole len bytes of HTTP request */
    for (i = 0; i < len; ) {
        wlen = write(sockfd, buf + i, len - i);
        if (wlen < 0) goto error;

        i += wlen;
    }
    
    /* Read until the last byte */
    for (;;) {
        rlen = read(sockfd, buf, sizeof(buf));
        if (rlen < 0) goto error;
        if (rlen == 0) break;

        /* output to stdout */
        fwrite(buf, 1, rlen, stdout);
        fflush(stdout);
    }
            
    close(sockfd);
    return 0;

 error:
    if (sockfd > 0) close(sockfd);
    if (res) freeaddrinfo(res);
    fprintf(stderr, "ERROR\n");
    return -1;
}