// http://codeforces.com/contest/1277/problem/E
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long, long long>
#define III pair<II, long long>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long i = 0; i < n; i++)
#define for1(i, n) for (long long i = 1; i <= n; i++)

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

long long N,M;
long long A, B, withOutNode;
long long check[2*e5];
vector<long long> edge[2*e5];

long long __init__(){
  for0(i, N+2) {
    edge[i].erase( all(edge[i]) );
    check[i] = 0;
  }
  return 0;
}

long long notVisitedCount(){
  long long res = 0;
  for1(i, N){
    res+=(1-check[i]);
    check[i]=0;
  }
  return res;
}

void DFS(long long node){
  if( check[ node ] == 1) return;
  if( node==withOutNode ) return;
  check[ node ] = 1;
  for0(i, edge[node].size()){
    DFS( edge[node][i] );
  }
}

long long execute(){
  long long a,b;
  long long notVisitWhenCutA, notVisitWhenCutB;
  cin>>N>>M>>A>>B;
  __init__();
  for0(i, M){
    cin>>a>>b;
    edge[a].push_back(b);
    edge[b].push_back(a);
  }
  withOutNode = A;
  DFS(B);
  notVisitWhenCutA = notVisitedCount()-1;
  withOutNode = B;
  DFS(A);
  notVisitWhenCutB = notVisitedCount()-1;
  return notVisitWhenCutA*notVisitWhenCutB;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  //freopen("test.txt","r",stdin);
  long long T;
  cin>>T;
  while(T--) {
    cout<<execute()<<"\n";
  }
}