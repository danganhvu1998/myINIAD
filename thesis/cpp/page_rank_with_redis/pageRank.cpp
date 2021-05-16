#include <bits/stdc++.h>
#include <hiredis/hiredis.h>
#include "redis.h"

using namespace std;
 
#define II pair<long long, long long>
#define III pair<II, long long>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long i = 0; i < n; i++)
#define for1(i, n) for (long long i = 1; i <= n; i++)

long long const MAX_ROUND = 100;
double const ACCEPT_ERROR = 0.00000;
long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long const MAXIMUM_NODE_SUPPORT = e6; // Accept maximum e6 nodes

vector<long long> edgesTo[MAXIMUM_NODE_SUPPORT]; // edgesTo[i] contain list of nodes that can go to i
double nodeWeight[2][MAXIMUM_NODE_SUPPORT];
long long toNodesCount[MAXIMUM_NODE_SUPPORT];
long long N, M;
long long lastRound = 0;

void calculation(long long round){
    int lastRound = round -1;
    for0(i, N){
        double weight = 0;
        for0(j, edgesTo[i].size()){
            const int fromNode = edgesTo[i][j];
            // weight += nodeWeight[lastRound][fromNode] / toNodesCount[fromNode];
            weight += getNodeVal(fromNode, lastRound) / toNodesCount[fromNode];
        }
        // nodeWeight[currRound][i] =  weight;
        setNodeVal(i, round, weight);
    }
}

bool isAcceptErrorSastified(){
    for0(i, N) {
        double error = abs(getNodeVal(i, lastRound)-getNodeVal(i, lastRound-1));
        if( error > ACCEPT_ERROR ) {
            return false;
        }
    }
    return true;
}

int main(){
    ios_base::sync_with_stdio(false); cin.tie(0);
    freopen("graph.out","r",stdin);
    freopen("result.out","w",stdout);
    // INIT CONNECTION
    context = redisConnect("127.0.0.1", 6379);
    if (!context) {
        fprintf(stderr, "Error:  Can't connect to Redis\n");
        return -1;
    }
    // INPUT GRAPH
    cin>>N>>M;
    for0(i, N) toNodesCount[i] = 0;
    for0(i, M){
        long long a, b;
        cin>>a>>b; // From a we can go to b
        ++toNodesCount[a];
        edgesTo[b].push_back(a);
    }

    // INIT WEIGHT
    // for0(i, N) nodeWeight[0][i] = 1;
    for0(i, N) setNodeVal(i, 0, 1.0);
    for1(i, MAX_ROUND){
        calculation(i);
        lastRound = i;
        if( isAcceptErrorSastified() ) break;
    }
    for0(i, N) cout<<getNodeVal(i, lastRound)<<' ';
    cout<<'\n'<<lastRound;
}
