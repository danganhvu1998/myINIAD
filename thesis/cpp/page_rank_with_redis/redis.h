#include <stdio.h>
#include <hiredis/hiredis.h>

redisContext *context;
redisReply *reply;

void printRedisReply(redisReply *reply){
    // printf("================================================\n");
    // printf("TYPE: %d\n", reply->type);
    // printf("INTEGER: %lld\n", reply->integer);
    // printf("STRING: %s\n", reply->str);
    // printf("================================================\n");
}

char* getValName(long long nodeId, long long roundId){
    char *res = new char[255];
    sprintf(res, "node_%lld_%lld", nodeId, roundId);
    return res;
}

double getVal(char* valName){
    char* res = "0";
    // printf("-> GET %s\n", valName);
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
    // printf("-> %s\n", cmd);
    reply = (redisReply *)redisCommand(context, cmd);
    freeReplyObject(reply);
    if(roundId>=2){
        char* valNodeNodeOldRound = getValName(nodeId, roundId-2);
        reply = (redisReply *)redisCommand(context, "DEL %s", valNodeNodeOldRound);
        free(valNodeNodeOldRound);
        freeReplyObject(reply);
    }
    free(cmd);
    free(valName);
}

double getNodeVal(long long nodeId, long long roundId){
    char* valName = getValName(nodeId, roundId);
    double res = getVal(valName);
    free(valName);
    return res;
}
