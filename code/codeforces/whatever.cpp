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
int N;
vector<int> edges[2*e5];
int childCount[2*e5];
int hightOf[2*e5];
vector<int> happiness;

int __init__(){
  for0(i, e5){
    childCount[i] = 0;
    hightOf[i]=0;
  }
  return 0;
}

int DFS(int node, int hight){
  if( hightOf[node]>0 ) return 0;
  int childCount = 0;
  hightOf[node] = hight;
  for0(i, edges[node].size()){
    childCount += DFS( edges[node][i], hight+1 );
  }
}

int main(){
  ios_base::sync_with_stdio(false);cin.tie(0);__init__();
  freopen("test.txt", "r", stdin);
  int a, b, ans=0;
  cin>>N>>K;
  for(int i=1; i<N; i++){
    cin>>a>>b;
    edges[a].push_back(b);
    edges[b].push_back(a);
  }
  DFS(1, 0);
  for1(i, N){
    happiness.push_back( hightOf[i]-childCount[i] );
  }
  sort( all(happiness) );
  for0(i, K) ans+=happiness[i];
  cout<<ans;
}