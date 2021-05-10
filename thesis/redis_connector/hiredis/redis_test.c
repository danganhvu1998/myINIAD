#include "hiredis.h"
#include <stdio.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string.h>

int main(){
    redisContext *c = redisConnect("127.0.0.1", 6379);
    if (c != NULL && c->err) {
        printf("Error: %s\n", c->errstr);
        // handle error
    } else {
        printf("Connected to Redis\n");
    }

    redisReply *reply;
    reply = redisCommand(c,"SET %s %s","foo","bar");
    freeReplyObject(reply);

    reply = redisCommand(c,"GET %s","foo");
    printf("%s\n",reply->str);
    freeReplyObject(reply);

    redisFree(c);
}