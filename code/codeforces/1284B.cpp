#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long , long long >
#define III pair<II, long long >
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long  i = 0; i < (n); i++)
#define for1(i, n) for (long long  i = 1; i <= (n); i++)

long long  const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long  minIs[e6], maxIs[e6];
long long  N, ans=0, already = 0;

long long  __init__(){
  for0(i, e6){
    minIs[i] = 0;
    maxIs[i] = 0;
  }
  return 0;
}

long long  input(){
  long long  length, arrMin = e6, arrMax = -1;
  long long  avg;
  bool ck = 1;
  cin>> length;
  for0(i, length){
    cin>>avg;
    if( avg > arrMin ){
      ck = 0;
      ++already;
    }
    arrMax = max(arrMax, avg);
    arrMin = min(arrMin, avg);
  }
  if( ck==0 ) return 0; 
  else {
    ++ minIs[ arrMin ];
    ++ maxIs[ arrMax ];
  }
}

int  main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  // freopen("test.txt","r",stdin);
  __init__();
  cin >> N;
  for0(i, N) input();
  for(long long  i=1000003; i>=0; i--) minIs[i] += minIs[i+1];
  for(long long  i=0; i<=1000003; i++){
    ans += minIs[i]*maxIs[i];
  }
  cout<<N * N - ans;
}