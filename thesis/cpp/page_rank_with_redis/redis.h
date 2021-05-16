#include <stdio.h>
#include <hiredis/hiredis.h>

redisContext *context;
redisReply *reply;

void printRedisReply(redisReply *reply){
    printf("================================================\n");
    printf("TYPE: %d\n", reply->type);
    printf("INTEGER: %lld\n", reply->integer);
    printf("STRING: %s\n", reply->str);
    printf("================================================\n");
}

char* getValName(long long nodeId, long long roundId){
    char *res = new char[255];
    sprintf(res, "node_%lld_%lld", nodeId, roundId);
    return res;
}

double getVal(char* valName){
    char* res = "0";
    printf("-> GET %s\n", valName);
    reply = (redisReply *)redisCommand(context, "GET %s", valName);
    if(reply->str) res = reply->str;
    double resDouble = atof(res);
    freeReplyObject(reply);
    return resDouble;
}

void setNodeVal(long long nodeId, long long roundId, double value){
    char* valName = getValName(nodeId, roundId);
    char *cmd = new char[255];
    sprintf(cmd, "SET %s %lf", valName, value);
    printf("-> %s\n", cmd);
    reply = (redisReply *)redisCommand(context, cmd);
    if (!reply || context->err) {
        fprintf(stderr, "Error:  Can't send command to Redis %d\n", context->err);
        return;
    }
    freeReplyObject(reply);
    free(cmd);
    free(valName);
}

double getNodeVal(long long nodeId, long long roundId){
    char* valName = getValName(nodeId, roundId);
    double res = getVal(valName);
    free(valName);
    return res;
}
