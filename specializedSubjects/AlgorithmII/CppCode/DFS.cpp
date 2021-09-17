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
bool visited[5005];

int __init__(){
  return 0;
}

void DFS(int node){
  if( visited[node]==1 ) return;
  visited[node] = 1;
  cout<<node<<' ';
  for0(i, edges[node].size()){
    DFS(edges[node][i]);
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a, b;
  int startNode = 0;
  while(!cin.eof()){
    cin>>a>>b;
    edges[a].push_back(b);
    edges[b].push_back(a);
  }
  DFS(startNode);
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