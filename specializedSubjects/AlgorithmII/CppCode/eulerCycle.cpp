#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define III pair<II, int>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (int i = 0; i < n; i++)
#define for1(i, n) for (int i = 1; i <= n; i++)

int const oo = 1000000007, e5 = 100007, e6 = 1000007;

vector<int> edges[5005];
int edgeLeft[5005];
bool usedEdge[5005][5005];

int __init__(){
  for0(i, 5005) edgeLeft[i]=0;
  return 0;
}

void DFS(int node){
  edgeLeft[node]-=2;
  cout<<node<<", ";
  for(int i=0; i<=13; i++) cout<<edgeLeft[i]<<' '; cout<<'\n';
  for0(i, edges[node].size()){
    if( usedEdge[ node ][ edges[node][i] ]==0 && edgeLeft[edges[node][i]]>2 ) {
        usedEdge[ node ][ edges[node][i] ] = 1;
        usedEdge[ edges[node][i] ][ node ] = 1;
        DFS(edges[node][i]);
        return;
    }
  }
  for0(i, edges[node].size()){
    if( usedEdge[ node ][ edges[node][i] ]==0 && edgeLeft[edges[node][i]]>=1 ) {
        usedEdge[ node ][ edges[node][i] ] = 1;
        usedEdge[ edges[node][i] ][ node ] = 1;
        DFS(edges[node][i]);
        return;
    }
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a, b;
  int startNode = 0;
  while(1){
    // cout<<a<<' '<<b<<' '<<edgeLeft[10]<<endl;
    cin>>a>>b;
    edges[a].push_back(b);
    edges[b].push_back(a);
    ++edgeLeft[a];
    ++edgeLeft[b];
    cout<<a<<' '<<b<<' '<<edgeLeft[0]<<endl;
    if( cin.eof()) break;
  }
  cout<<edgeLeft[startNode]<<endl;
  ++edgeLeft[startNode];
  cout<<edgeLeft[startNode]<<endl;
  for(int i=0; i<=13; i++) cout<<i<<' '<<edgeLeft[i]<<", "; cout<<'\n';
  DFS(startNode);
  cout<<'\n';
  for(int i=0; i<=13; i++) cout<<i<<' '<<edgeLeft[i]<<", "; cout<<'\n';
}
/*
1 2
1 8
2 3
2 8
3 4
3 6
3 9
4 5
4 6
5 6
6 7
7 8
7 9
8 9
*/