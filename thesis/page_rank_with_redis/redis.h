#include <stdio.h>
#include <hiredis/hiredis.h>

redisContext *context;
redisReply *reply;


char* getValName(long long nodeId, long long roundId){
    char *res = new char[255];
    sprintf(res, "node_%lld_%lld", nodeId, roundId);
    return res;
}

char* getVal(char* valName){
    char* res = "0";
    reply = (redisReply *)redisCommand(context, "GET %s", valName);
    if (!reply || context->err || reply->type != REDIS_REPLY_STRING) {
        fprintf(stderr, "Error:  Can't send command to Redis\n");
        return res;
    }
    res = reply->str;
    freeReplyObject(reply);
    return res;
}

void setNodeVal(long long nodeId, long long roundId, double value){
    char* valName = getValName(nodeId, roundId);
    printf("-> SET %s %lf\n", valName, value);
    reply = (redisReply *)redisCommand(context, "SET %s %lf", valName, value);
    if (!reply || context->err) {
        fprintf(stderr, "Error:  Can't send command to Redis\n");
        return;
    }
    printf("set rec: %s\n", reply->str);
    freeReplyObject(reply);
}

double getValDouble(char* valName){
    double res = atof(getVal(valName));
    return res;
}

double getNodeVal(long long nodeId, long long roundId){
    char* valName = getValName(nodeId, roundId);
    return getValDouble(valName);
}
