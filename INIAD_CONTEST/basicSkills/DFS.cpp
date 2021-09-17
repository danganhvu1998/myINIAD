#include <bits/stdc++.h>
using namespace std;
 
int N;
vector<int> edges[1000007]; //  edges[A] contain all node connected with A
bool ck[1000007];

void DFS(int node, int depth){
    if( ck[node] == 1 ) return;
    ck[node] = 1;
    printf("node %d with depth is %d\n", node, depth);
    for(int i=0; i<edges[node].size(); i++) DFS( edges[node][i], depth+1);
}

int main(){
    N = 10;
    edges[1].push_back(2); edges[2].push_back(1);
    edges[1].push_back(3); edges[3].push_back(1);
    edges[2].push_back(4); edges[4].push_back(2);
    edges[4].push_back(5); edges[5].push_back(4);
    edges[3].push_back(6); edges[6].push_back(3);
    edges[3].push_back(7); edges[7].push_back(3);
    edges[7].push_back(8); edges[8].push_back(7);
    edges[7].push_back(9); edges[9].push_back(7);
    edges[8].push_back(10); edges[10].push_back(8);
    DFS(1, 0);
}