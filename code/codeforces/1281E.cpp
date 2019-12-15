// https://codeforces.com/contest/1281/problem/E
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 300007, e6 = 1000007;

vector<II> edgeOf[e5];
long long childCountOf[e5];
long long parentOf[e5];

long long T, K;
long long ansMin, ansMax;

long long findMinMax(long long node){
  long long childOfNode, distanceFromNodeToChildOfNode;
  for(long long i=0; i<edgeOf[node].size(); i++){
    if(edgeOf[node][i].first == parentOf[node]) continue;
    childOfNode = edgeOf[node][i].first;
    distanceFromNodeToChildOfNode = edgeOf[node][i].second;
    if( childCountOf[childOfNode]%2==1 ) ansMin+=distanceFromNodeToChildOfNode;
    ansMax+=distanceFromNodeToChildOfNode*min( childCountOf[childOfNode], 2*K-childCountOf[childOfNode] );
    findMinMax( childOfNode );
  }
  return 0;
};

long long DFS(long long node){
  // cout<<node<<endl;
  for(long long i=0; i<edgeOf[node].size(); i++){
    if(edgeOf[node][i].first == parentOf[node]) continue;
    parentOf[ edgeOf[node][i].first ] = node;
    DFS(edgeOf[node][i].first);
    childCountOf[node] += childCountOf[ edgeOf[node][i].first ];
  }
  ++childCountOf[node];
  return 0;
}

long long run(){
  long long a, b, c;
  cin>>K;
  ansMin = 0;
  ansMax = 0;
  for(long long i=0; i<=2*K; i++){
    edgeOf[i].erase(edgeOf[i].begin(), edgeOf[i].end());
    childCountOf[i] = 0;
  }
  for(long long i=1; i<2*K; i++){
    cin>>a>>b>>c;
    //cout<<i<<endl;
    //a=i;
    //b=i+1;
    //c=10;
    edgeOf[a].push_back(II(b, c));
    edgeOf[b].push_back(II(a, c));
  }
  parentOf[1] = 0;
  DFS(1);
  findMinMax(1);
  cout<<ansMin<<" "<<ansMax<<"\n";
}

int main(){
  ios_base::sync_with_stdio(false);
  // freopen("test.txt","r",stdin);
  cin >> T;
  while(T--){
    run();
  }
}