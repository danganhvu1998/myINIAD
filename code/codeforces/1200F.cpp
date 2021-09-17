// https://codeforces.com/contest/1200/problem/F
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
int ans[1005][2550];
int K[1005], M[1005], ck[1005];
vector<int> edge[1005];

int __init__(){
  for0(i, 1005){
    for0(j, 2550){
      ans[i][j] = 0;
    }
    ck[i]=0;
  }
  return 0;
}

int nodeCount(int vertex, int currPoint, int left, int currCount){
  currPoint = ( (currPoint+K[vertex]) % 2520 + 2520 ) % 2520;
  if( left==0 ) return currCount;
  int res;
  if( ck[vertex]==0 ) ++currCount;
  ck[ vertex ]=1;
  res = nodeCount( edge[vertex][currPoint%M[vertex]], currPoint, left-1, currCount );
  ck[ vertex ]=0;
  return res;
}

int run(int vertex, int currPoint, int deepCount){
  currPoint = ( (currPoint+K[vertex]) % 2520 + 2520 ) % 2520;
  //cout<<vertex<<" "<<currPoint<<" "<<K[vertex]<<" "<<ans[vertex][currPoint]<<endl;
  if( ans[vertex][currPoint]>0 ) return ans[vertex][currPoint];
  if( ans[vertex][currPoint]==0 ) {
    ans[vertex][currPoint]=deepCount;
    ans[vertex][currPoint] = run( edge[vertex][currPoint%M[vertex]], currPoint, deepCount-1 );
    return ans[vertex][currPoint];
  } else {
    // Count Node in loop here
    return nodeCount(vertex, currPoint - K[vertex], ans[vertex][currPoint]-deepCount, 0);
    //return ans[vertex][currPoint]-deepCount;
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int T, a, b;
  cin>>N;
  for1(i, N){
    cin>>K[i];
  }
  for1(i, N){
    cin>>M[i];
    for0(j, M[i]){
      cin>>a;
      edge[i].push_back(a);
    }
  }
  cin>>T;
  while(T--){
    cin>>a>>b;
    cout<<run(a,b,-1)<<endl;
  }
}