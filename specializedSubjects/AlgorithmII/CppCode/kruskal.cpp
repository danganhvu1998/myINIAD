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

int parent[5005];
vector<III> edges;

int __init__(){
  for0(i, 5005) parent[i]=-1;
  return 0;
}

int deepestAssessor(int node){
  if( parent[node]==-1 ) return node;
  return deepestAssessor( parent[node] );
}

void connectNode(int a, int b){
  int deepestAssessorOfA = deepestAssessor(a);
  int deepestAssessorOfB = deepestAssessor(b);
  // cout<<'\n'<<a<<' '<<deepestAssessorOfA<<' '<<b<<' '<<deepestAssessorOfB<<'\n';
  if( deepestAssessorOfA == deepestAssessorOfB ) return;
  parent[ deepestAssessorOfB ] = deepestAssessorOfA;
  printf("(%d,%d), ", a, b);
  return;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a, b, c;
  int startNode = 0;
  while(!cin.eof()){
    cin>>a>>b>>c;
    III avg;
    avg.X = c;
    avg.Y = a;
    avg.Z = b;
    edges.push_back(avg);
  }
  sort(all(edges));
  for0(i, edges.size()){
    connectNode( edges[i].Y, edges[i].Z);
  }
}
/*
1 2 4
1 8 9
2 3 8
2 8 11
3 4 7
3 6 4
3 9 2
4 5 9
4 6 14
5 6 10
6 7 2
7 8 1
7 9 6
8 9 7
*/