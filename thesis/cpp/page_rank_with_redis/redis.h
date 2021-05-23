#include <stdio.h>
#include <hiredis/hiredis.h>

redisContext *context = redisConnect("127.0.0.1", 6379);;
redisReply *reply;
long long redisGetCount = 0, redisSetCount = 0, redisCommandCount = 0;
long long currentRoundId = 0;
double cachedNodeValue[2][10000007]; // 2 * 10^7 * 8 byte = 0.15Gb
bool debug = 1;

bool isEqual(double a, double b, double acceptError = 0.00001){
    return abs(a-b) < acceptError;
}

char* getValName(long long nodeId, long long roundId){
    char *res = new char[255];
    sprintf(res, "node_%lld_%lld ", nodeId, roundId); // Never hurt to add an space at the end
    if(debug) printf("getValName->[nodeId, roundId, res]: %lld, %lld, '%s'\n", nodeId, roundId, res);
    return res;
}

char* getSetPath(long long nodeId, double value, long long roundId){
    char *res = new char[255];
    char* valName = getValName(nodeId, roundId);
    sprintf(res, "%s%lf ", valName, value); // Never hurt to add an space at the end
    if(debug) printf("getSetPath->[nodeId, value, roundId, res]: %lld, %lf, %lld, '%s'\n", nodeId, value, roundId, res);
    free(valName);
    return res;
}

char* getValsCommand(long long* nodesId, long long nodesCount, long long roundId){
    char *res = new char[ 28 * nodesCount ]; // 28 stand for length of node_%s_%lf
    strcpy(res, "MGET ");
    for(int i = 0; i<nodesCount; i++){
        char* valName = getValName(nodesId[i], roundId);
        strcat(res, valName);
        free(valName);
    }
    return res;
}

char* setValsCommand(long long* nodesId, double* values, long long nodesCount, long long roundId){
    char *res = new char[ 28 * nodesCount ];
    strcpy(res, "MSET ");
    for(int i = 0; i<nodesCount; i++){
        char* setPath = getSetPath(nodesId[i], values[i], roundId);
        strcat(res, setPath);
        free(setPath);
    }
    return res;
}

double* executeGetValsCommand(char* command){
    if(debug){
        printf("executeGetValsCommand->command: %s\n", command);
    }
    reply = (redisReply *)redisCommand(context, command);
    double* res = new double[reply->elements];
    for(int i=0; i<reply->elements; i++){
        res[i] = atof(reply->element[i]->str);
    }
    freeReplyObject(reply);
    return res;
}

void executeSetValsCommand(char* command){
    if(debug){
        printf("executeSetValsCommand->command: %s\n", command);
    }
    reply = (redisReply *)redisCommand(context, command);
    freeReplyObject(reply);
    return;
}

void setNodesVal(long long* nodesId, double* values, long long nodesCount, long long roundId){
    char* command = setValsCommand(nodesId, values, nodesCount, roundId);
    executeSetValsCommand(command);
    free(command);
}

double* getNodesVal(long long* nodesId, long long nodesCount, long long roundId){
    char* command = getValsCommand(nodesId, nodesCount, roundId);
    double* res = executeGetValsCommand(command);
    free(command);
    return res;
}

bool __testRedis(){
    bool testResult = true;
    long long nodesCount = 7;
    long long roundId = 9;
    long long nodesId[] = {1, 4, 6, 7 ,8, 20, 15};
    double values[] = {1.13412341432, 4.1132413241234, 6.412341321324, 7.541323234 ,8.713241234567, 20.7456, 15.456098765437};
    setNodesVal(nodesId, values, nodesCount, roundId);
    double *getVals = getNodesVal(nodesId, nodesCount, roundId);
    for(int i=0; i<nodesCount; i++){
        if(! isEqual(values[i], getVals[i]) ) testResult = false;
    }
    if(debug){
        printf("Test result: %s\n", testResult ? "OK" : "FAIL");
        for(int i=0; i<nodesCount; i++){
            printf("Set value: %lf; Get value: %lf; Is correct: %d\n", values[i], getVals[i], isEqual(values[i], getVals[i]));
        }
        printf("\n");
    }
    return testResult;
}
