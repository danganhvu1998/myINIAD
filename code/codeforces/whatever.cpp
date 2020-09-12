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
int N, k;
string str;

int __init__(){
  return 0;
}

void fillPos(int pos){
  int initPos = pos;
  while(str[pos]=='?'){
    pos+=k;
    if(pos>=N) return;
  }
  for(int i=initPos; i<N; i+=k){
    if( str[i]!='?' ) continue;
    str[i] = str[pos];
  }
}

void run(){
  int cnt1=0, cnt0=0;
  int lastCnt1, lastCnt0;
  int res = 1;
  for0(i, k) fillPos(i);
  // cout<<str<<endl;
  for0(i, k){
    if( str[i]=='1' ) ++cnt1;
    else if( str[i]=='0' ) ++cnt0;
  }
  lastCnt1 = cnt1; lastCnt0 = cnt0;
  if( cnt1>k/2 || cnt0>k/2 ) res = 0;
  for(int i=1; i<=N-k; i++){
    if( str[i-1]=='1' ) --lastCnt1;
    else if( str[i-1]=='0' ) --lastCnt0;
    if( str[i+k-1]=='1' ) ++lastCnt1;
    else if( str[i+k-1]=='0' ) ++lastCnt0;
    if( lastCnt0 != cnt0 || lastCnt1 != cnt1 ) res =0;
  }
  if(res) {
    cout<<"YES\n";
  } else {
    cout<<"NO\n";
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int T;
  cin>>T;
  while(T--){
    cin>>N>>k>>str;
    run();
  }
}
