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