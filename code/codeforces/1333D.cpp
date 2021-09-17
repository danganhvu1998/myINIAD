// http://codeforces.com/contest/1333/problem/D
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

int N, K, totalTurn=0, totalSec=0;
string S;
vector<int> turnPerSec[3500];

int __init__(){
  return 0;
}

bool checkIfFinished(){
  int leng = S.length();
  for0(i, leng-1){
    if( S[i]=='R' && S[i+1]=='L') return 0;
  }
  return 1;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  freopen("test.out","w",stdout);
  int leng;
  cin>>N>>K;
  cin>>S;
  leng = S.length();
  while( !checkIfFinished() ){
    ++totalSec;
    for0(i, leng-1){
      if( S[i]=='R' && S[i+1]=='L') {
        ++totalTurn;
        S[i]='L'; S[i+1]='R';
        i++;
        turnPerSec[totalSec].push_back( i );
      }
    }
  }
  if( totalTurn<K ){
    cout<<-1;
    return 0;
  } else if( totalSec>K ){
    cout<<-1;
    return 0;
  } else {
    int currSec = 1;
    int currTurn = 0;
    while(currSec <= totalSec){
      if( currTurn>=turnPerSec[currSec].size() ){
        ++currSec;
        currTurn = 0;
        continue;
      } 
      if( totalSec-currSec+1<K ) {// Only 1
        cout<<1<<' '<<turnPerSec[currSec][currTurn]<<'\n';
        ++currTurn;
        --K;
      } else {
        cout<<turnPerSec[currSec].size()-currTurn<<' ';
        while( currTurn<turnPerSec[currSec].size() ){
          cout<<turnPerSec[currSec][currTurn]<<' ';
          ++currTurn;
        }
        cout<<'\n';
        --K;
      }
    }
  }
}