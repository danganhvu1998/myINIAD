// http://codeforces.com/contest/1288/problem/D
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

int __init__(){
  return 0;
}

int N, M;
int num[3*e5][10];
int expectedOr=1;
II answer;

int check(int value){
  bool existed[300];
  for0(i, 300) existed[i] = 0;
  int valWhere[300];
  for0(i, N){
    int val = 0;
    for0(j, M){
      if( num[i][j]>=value ) val = val*2+1;
      else val = val*2;
    }
    valWhere[val]=i+1;
    existed[val]=1;
  }
  for1(i, 256){
    if( !existed[i] ) continue;
    for1(j, i){
      if( !existed[j] ) continue;
      if( (i|j) == expectedOr ) {
        answer.first = valWhere[j];
        answer.second = valWhere[i];
        return 1;
      }
    }
  }
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  cin>>N>>M;
  for0(i, M) expectedOr *= 2;
  --expectedOr;
  // cout<<expectedOr<<endl;
  for0(i, N){
    for0(j, M){
      cin>>num[i][j];
    }
  }
  int ll=0, rr=oo, mm;
  while( rr>ll ){
    mm = (ll+rr)/2+1;
    // cout<<rr<<' '<<ll<<' '<<mm<<' '<<check(mm)<<endl;
    // cout<<ll<<" "<<rr<<" "<<endl;
    if( check(mm) ){
      ll=mm;
    } else {
      rr=mm-1;
    }
  }
  if(answer.first==0 or answer.second==0) cout<<"1 1";
  else cout<<answer.first<<" "<<answer.second;
}