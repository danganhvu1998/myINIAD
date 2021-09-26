// http://codeforces.com/contest/1334/problem/D
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
long long T, N, ll, rr;
vector<long long> answer;

void determineNum(long long currFirst, long long currSecond, long long currPos){
  if( currPos>rr ) return;
  if( (N*(N-1))+1 == currPos ) {
    answer.push_back(1);
    return;
  }
  // cout<<currPos<<" "<<currFirst<<' '<<currSecond<<"\n";
  long long nextFirst=currFirst, nextSecond=currSecond;
  if( currPos>=ll && currPos<=rr ) answer.push_back( currFirst );
  if( (currPos+1)>=ll && (currPos+1)<=rr )answer.push_back( currSecond );
  if( currSecond == N ){
    nextFirst = currFirst+1;
    nextSecond = nextFirst+1;
  } else {
    nextSecond = currSecond+1;
  }
  determineNum( nextFirst, nextSecond, currPos+2 );
}

long long __init__(){
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  long long currPos;
  cin>>T;
  while(T--){
    cin>>N>>ll>>rr;
    currPos = 0;
    answer.clear();
    for(long long i=N-1; i>=1; i--){
      if( currPos+i*2<ll-5 ){
        currPos += i*2;
        // cout<<i<<' '<<currPos<<' '<<ll-5<<endl;
      } else {
        determineNum( N-i, N-i+1, currPos+1 );
        break;
      }
    }
    for0(i, answer.size()) cout<<answer[i]<<' ';
    cout<<'\n';
  }
}