// http://codeforces.com/contest/1333/problem/E
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
int N;
int answer[505][505];
int currVal = 1;

void fillNum(int startY){
  if( startY<=0 ) return;
  for( int i=1; i<= startY; i++ ){
    answer[ i ][ startY ] = currVal;
    ++currVal;
  }
  for( int i=startY-1; i>=1; i-- ){
    answer[ startY ][i] = currVal;
    ++currVal;
  }
  --startY;
  for( int i=1; i<= startY; i++ ){
    answer[ startY ][ i ] = currVal;
    ++currVal;
  }
  for( int i=startY-1; i>=1; i-- ){
    answer[ i ][ startY ] = currVal;
    ++currVal;
  }
  fillNum( startY-1 );
}

int __init__(){
  int ans3x3[3][3] = {
    {6,3,8},
    {2,4,5},
    {1,9,7}
  };
  fillNum(500);
  for(int i=1; i<=3; i++){
    for(int j=1; j<=3; j++){
      answer[i][j] = ans3x3[i-1][j-1]+249991;
    }
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  // freopen("test.txt","r",stdin);
  int minNum = oo;
  cin>>N;
  if( N<=2 ) {cout<<-1; return 0;}
  for1(i, N){
    for1(j, N){
      minNum = min( minNum, answer[i][j] );
    }
  }
  --minNum;
  for1(i, N){
    for1(j, N){
      cout<<answer[i][j]-minNum<<' ';
    }cout<<'\n';
  }
}
