#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long , long long >
#define III pair<II, long long >
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (long long  i = 0; i < n; i++)
#define for1(i, n) for (long long  i = 1; i <= n; i++)

long long  const oo = 1000000007, e5 = 100007, e6 = 1000007;
long long  N, answer = 0, mol;
long long  fact[3*e5];

long long  __init__(){
  fact[0] = 1;
  for1(i, N){
    fact[i] = fact[i-1]*i%mol;
  }
}

long long  countPairWithDist(long long  dist){
  return N - dist;
}

long long  calculate(long long  dist){
  // answer += (( ( 2 * fact[ dist - 1 ] ) % mol * fact[ N - dist - 1 ] ) % mol ) * countPairWithDist(dist) * (countPairWithDist(dist)+1);
  answer += ( ( ( ( fact[ dist + 1 ] ) % mol * fact[ N - dist ] ) % mol ) * (N - dist) ) % mol ;
  answer %= mol;
}

int  main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  // freopen("test.txt","r",stdin);
  cin>>N>>mol;
  __init__();

  for1(i, N-1){
    calculate(i);
  }
  cout<< ( answer + ( fact[N] * N ) % mol ) % mol;
}