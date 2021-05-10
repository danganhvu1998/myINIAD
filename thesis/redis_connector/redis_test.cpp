#include <stdio.h>
#include <hiredis/hiredis.h>

void printRedisReply(redisReply *reply){
    printf("================================================\n");
    printf("TYPE: %d\n", reply->type);
    printf("INTEGER: %lld\n", reply->integer);
    printf("STRING: %s\n", reply->str);
    printf("================================================\n");
}

int main(void) {
    redisContext *context;
    redisReply *reply;

    context = redisConnect("127.0.0.1", 6379);
    if (!context) {
        fprintf(stderr, "Error:  Can't connect to Redis\n");
        return -1;
    }

    reply = (redisReply *)redisCommand(context, "SET %s %d", "foo", 123);
    if (!reply || context->err) {
        fprintf(stderr, "Error:  Can't send command to Redis\n");
        return -1;
    }
    printf("set rec: %s\n", reply->str);
    printRedisReply(reply);

    freeReplyObject(reply);

    reply = (redisReply *)redisCommand(context, "GET foo");
    if (!reply || context->err || reply->type != REDIS_REPLY_STRING) {
        fprintf(stderr, "Error:  Can't send command to Redis\n");
        return -1;
    }

    printf("foo = %s\n", reply->str);
    printRedisReply(reply);
    freeReplyObject(reply);

    return 0;
}