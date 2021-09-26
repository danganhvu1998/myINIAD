// https://codeforces.com/contest/1329/problem/B
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
long long pow2[100];
long long D, M;

long long __init__(){
  pow2[0] = 1;
  for1(i, 90) pow2[i] = 2 * pow2[i - 1];
  return 0;
}

long long run(){
  long long binaryLengthCount[50];
  long long res = 1;
  for0(i, 50){
    binaryLengthCount[i] = min( pow2[i], D );
    D -= binaryLengthCount[i];
    ++binaryLengthCount[i];
  }
  for0(i, 50){
    res = (res*binaryLengthCount[i])%M;
  }
  res = (res+M-1)%M;
  return res;
}  

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  long long T;
  cin>>T;
  while(T--){
    cin>>D>>M;
    cout<<run()<<'\n';
  }
}