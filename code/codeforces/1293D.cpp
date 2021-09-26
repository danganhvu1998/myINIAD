// https://codeforces.com/contest/1293/problem/D
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

long long const oo = 1000000007, e5 = 100007, e6 = 1000007, maxNum = 20000000000000000;

long long posX[105];
long long posY[105];
long long AX,BX,AY,BY;
long long startX, startY, T;
long long ans=0;

long long __init__(){
  return 0;
}

long long dis( long long aX, long long aY, long long bX, long long bY ){
  return abs( aX-bX )+abs( aY-bY );
}

long long check(long long xIndex, long long yIndex){
  long long time;
  time = dis(posX[xIndex], posY[xIndex], posX[yIndex], posY[yIndex]); //abs( posX[yIndex] - posX[xIndex] ) + abs( posY[yIndex] - posY[xIndex] );
  time += min( dis(posX[xIndex], posY[xIndex], startX, startY), dis(posX[yIndex], posY[yIndex], startX, startY) );
  if( time<=T ){
    // cout<<xIndex<<" "<<yIndex<<endl;
    ans = max(ans, (abs(xIndex-yIndex)+1));
  }

}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  // freopen("test.txt","r",stdin);
  cin>>posX[0]>>posY[0]>>AX>>AY>>BX>>BY;
  cin>>startX>>startY>>T;
  for1(i, 104){
    if( posX[i-1]>=maxNum or posY[i-1]>=maxNum ){
      posX[i] = maxNum;
      posY[i] = maxNum;
      continue;
    }
    posX[i] = posX[i-1]*AX+BX;
    posY[i] = posY[i-1]*AY+BY;
    // cout<<i<<" "<<posX[i]<<" "<<posY[i]<<endl;
  }
  for0(i, 100){
    for0(j, 100){
      check(i, j);
    }
  }
  cout<<ans;
  
}