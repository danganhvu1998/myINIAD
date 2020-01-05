// https://codeforces.com/contest/1270/problem/F
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

string str;
int oneCount[2*e5];
int N;

int __init__(){
  return 0;
}

int countOne(){
  oneCount[0] = 0;
  for1(i, N){
    oneCount[i] = oneCount[i-1];
    if( str[i-1]=='1' ) ++oneCount[i];
  }
}

int countOneWithPosAndDist(int pos, int dist){
  return oneCount[pos]-oneCount[pos-dist];
}

int check(int pos, int dist){
  return ((dist%countOneWithPosAndDist(pos, dist))==0);
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int ans = 0;
  cin>>str;
  N = str.length();
  countOne();
  for1(i, N){
    for1(j, N){
      if(j*j>i) break;
      if( i%j>0 ) continue;
      cout<<i<<" "<<j<<endl;
      ans+=check( i, j );
      if( j*j!=i ) ans+=check( i, i/j );
    }
  }
  cout<<ans;
}