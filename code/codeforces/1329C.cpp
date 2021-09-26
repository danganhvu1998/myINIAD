// http://codeforces.com/contest/1329/problem/C
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
long long nums[2000000];
long long N, G, H;
long long pow2[100];
vector<long long> answer;

long long __init__(){
  answer.clear();
  return 0;
}

long long valPos(long long pos){
  if( pos<=N ) return nums[pos];
  return 0;
}

long long hightOf(long long pos){
  if( valPos(pos)==0 ) return 0;
  return hightOf( valPos(pos*2) > valPos(pos*2+1) ? (pos*2):(pos*2+1) )+1;
}

void removeANumAt(long long pos){
  if(valPos(pos)==0) return;
  // cout<<pos<<' '<<valPos(pos)<<endl;
  nums[ pos ] = max( valPos(pos*2), valPos(pos*2+1) );
  removeANumAt( valPos(pos*2) > valPos(pos*2+1) ? (pos*2):(pos*2+1) );
}

void removeNum(long long pos, long long minAcceptableHight){
  if( valPos(pos)==0 ) return;
  //cout<<"REMOVE NUM: "<<pos<<' '<<valPos(pos)<<' '<<minAcceptableHight<<endl;
  while( hightOf(pos)>minAcceptableHight ) {
    answer.push_back(pos);
    removeANumAt(pos);
  }
  removeNum( pos*2, minAcceptableHight-1 );
  removeNum( pos*2+1, minAcceptableHight-1 );
}

void run(){
  __init__();
  long long needRemoveNumCount;
  long long finalSum=0;
  cin>>H>>G;
  needRemoveNumCount = pow2[H]-pow2[G];
  N = pow2[H]-1;
  for1(i, N){cin>> nums[i];}
  removeNum(1, G);
  for1(i, pow2[G]-1) finalSum+=valPos(i);
  cout<<finalSum<<'\n';
  for0(i, answer.size()) cout<<answer[i]<<' ';
  cout<<'\n';
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  pow2[0]=1; for1(i, 90) pow2[i] = 2*pow2[i-1];
  long long T;
  cin>>T;
  while(T--){
    run();
  }
}

