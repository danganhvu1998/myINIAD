// http://codeforces.com/contest/1338/problem/C
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
long long ANS[4];

long long __init__(){
  return 0;
}

long long findNumSecond(long long numFirst){
    long long res = 0;
    long long currUp = 1;
    while(numFirst!=0){
        if( numFirst%4==0 ) res += 0*currUp;
        else if( numFirst%4==1 ) res += 2*currUp;
        else if( numFirst%4==2 ) res += 3*currUp;
        else res += 1*currUp;
        numFirst/=4;
        currUp*=4;
    }
    return res;
}

long long findNum(long long groupPos){
  long long curr = 1, startVal=1;
  long long res;
  while( curr < groupPos ){
    startVal*=4;
    curr+=startVal;
  }
  curr-=startVal;
  res = startVal + groupPos - curr - 1;
  ANS[1] = res;
  ANS[2] = findNumSecond(ANS[1]);
  ANS[3] = ANS[1]^ANS[2];
  //cout<<ANS[1]<<' '<<ANS[2]<<' '<<ANS[3]<<'\n';
  return 0;
}

long long run(long long pos){
  if(pos==1) return 1;
  if(pos==2) return 2;
  if(pos==3) return 3;
  long long groupPos =(pos-1)/3+1;
  long long ans[4];
  findNum( groupPos );
  if(pos%3==1) return ANS[1];
  if(pos%3==2) return ANS[2];
  if(pos%3==0) return ANS[3];
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  //freopen("test.txt","r",stdin);
  long long T, a;
  cin>>T;
  while (T--)
  { 
      cin>>a;
      cout<<run(a)<<endl;
  }
  
}