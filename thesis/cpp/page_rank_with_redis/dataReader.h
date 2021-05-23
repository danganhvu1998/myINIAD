#include <bits/stdc++.h>
#include <hiredis/hiredis.h>
#include "redis.h"

#define II pair<int, int>

long long currentRoundId = 0;
long long const maxNodes = 100000000007; // 1e11
// TODO: Get ram size and use only 20-30% of it
long long const maxCaches = 10000007; // 1e7
std::map<long long, double> nodesCache; // Will incorrect if nodesCount * nodesRound > long long max
std::map<long long, double>::iterator it;


double getValueFromCache(long long nodeId, long long roundId){
    long long key = roundId * maxNodes + nodeId;
    it = nodesCache.find( key );
    if( it!=nodesCache.end() ){ // FOUND
        return it->second;
    } else { // NOT FOUND
        return -1;
    }
}

void addCache(long long nodeId, long long roundId, double value){
    long long key = roundId * maxNodes + nodeId;
    nodesCache[key] = value;
    // TODO: Reduce number of time check this by using random
    long long removeCaches = nodesCache.size()-maxCaches;
    if( removeCaches > 100000 )  clearCache(removeCaches);
}

void clearCache(long long removeCaches = 0){
    // TODO: Implement clear cache: https://stackoverflow.com/questions/41284763/erase-first-n-items-from-a-stdmap
    if(removeCaches){
        it = nodesCache.begin();
        std::advance(it, removeCaches);
        nodesCache.erase(nodesCache.begin(), it);
    }
}

// TODO: Not only get its value, but its number of children is also important
double* getNodesValFromCache(long long* nodesId, long long nodesCount, long long roundId){ 
    double* res = new double[nodesCount];
    long long notCachedNodesCount = 0;
    // Check Cache
    for(int i=0; i<nodesCount; i++){
        res[i] = getValueFromCache(nodesId[i], roundId);
        if( res[i] < 0 ){  // Not found
            ++notCachedNodesCount;
        }
    }
    // Check Redis
    long long currPos = 0;
    long long* notCachedNodesId = new long long[notCachedNodesCount];
    for(int i=0; i<nodesCount; i++){
        if( res[i] < 0 ){  // Not found
            notCachedNodesId[ currPos ] = nodesId[ i ];
            ++currPos;
        }
    }
    double* resultFromRedis = getNodesVal( notCachedNodesId, notCachedNodesCount, roundId);
    currPos = 0;
    for(int i=0; i<nodesCount; i++){
        if( res[i] < 0 ){  // Not found
            res[i] = resultFromRedis[currPos];
            addCache(nodesId[i], roundId, res[i]);
            ++currPos;
        }
    }
    free(resultFromRedis);
    return res;
    // Check Other Workers: Not yet implemented
}