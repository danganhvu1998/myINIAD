// https://codeforces.com/contest/1265/problem/E
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
long long MOD = 998244353;
long long K = MOD - 2;
long long N;

long long pow(long long a, long long k) { // a^k mod MOD
  long long r = 1, t = a;
  while (k) {
    if (k & 1) r = (long long) r * t % MOD;
    t = (long long) t * t % MOD;
    k >>= 1;
  }
  return r;
}


long long __init__(){
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  long long a, res=1;
  cin>>N;
  for1(i, N){
    long long up, down;
    cin>>a;
    up = (res*100) % MOD;
    down = pow( a, K );
    res = (up*down) % MOD;
    ++res;
  }
  cout<<res-1;
}