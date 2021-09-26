// https://codeforces.com/contest/1335/problem/E2
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
int N, ANS;
int nums[2*e5];
vector<int> pos[205];

int __init__(){
  ANS = 0;
  for1(i, 201) pos[i].clear();
  return 0;
}

int smallerThan(int num, int val){
  //cout<<"\n\n\n"<<num<<' '<<val<<endl;
  if( pos[num][0]>=val ) return 0;
  if( pos[num][ pos[num].size()-1 ]<val ) return pos[num].size();
  int ll = 0, rr = pos[num].size()-1;
  int mm;
  while( ll<rr ){
    mm = (ll+rr+1)/2;
    //cout<<pos[num][mm]<<' '<<val<<' '<<ll <<' '<<mm<<' '<<rr<<endl;
    if( pos[num][mm]<val ) ll=mm;
    else rr=mm-1;
    //cout<<pos[num][mm]<<' '<<val<<' '<<ll <<' '<<mm<<' '<<rr<<"\n\n";
  }
  return ll+1;
}

int findXYX(int num, int L, int R){  // >=L; <R; Like Python
  if( pos[num].size()==0 ) return 0;
  return smallerThan(num, R) - smallerThan(num, L);
}

void check(int a, int b){
  int ll, rr;
  int maxX = pos[a].size()/2;
  for(int i=0; i<=maxX; i++){
    if(i==0){
      ll = 1;
      rr = N+1;
    } else {
      ll = pos[a][i-1]+1;
      rr = pos[a][pos[a].size()-i];
    }
    if( ll<rr ) ANS = max(ANS, findXYX(b, ll, rr)+i*2);
  }
}

int run(){
  __init__();
  int a;
  cin>>N;
  for1(i, N){
    cin>>a;
    pos[a].push_back(i);
  }
  for1(i, 200){
    for1(j, 200){
      check(i, j);
    }
  }
  cout<<ANS<<'\n';
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int T;
  cin>>T;
  while(T--){
    run();
  }
}
