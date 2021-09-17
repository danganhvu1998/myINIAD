// https://codeforces.com/contest/1260/problem/D
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
int N, M, K, T;
int soldiersStrength[2*e5];
III trap[2*e5];

int __init__(){
  return 0;
}

int numSoldierStrongerThan(int danger){
  int ans=0;
  for0(i, M){
    ans += soldiersStrength[i]>=danger;
  }
  return ans;
}

int ableToFinishWithSolder(int strength){
  int furthestSelfPos=0;
  int step = N+1;
  for0(i, K){
    if( trap[i].Z <= strength ) continue;
    if( trap[i].Y <= furthestSelfPos ) continue;
    step += min( (trap[i].Y-furthestSelfPos)*2, 2*(trap[i].Y-trap[i].X+1) );
    furthestSelfPos = trap[i].Y;
    // cout<<i<<" "<<step<<" "<<furthestSelfPos<<endl;
    if( step > T ) return 0;
  }
  return 1;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int ableToDisarmToPos;
  int worstTrapDanger=0;
  int ans=0;
  cin>>M>>N>>K>>T;
  ableToDisarmToPos = (T-N-1); ableToDisarmToPos -= ableToDisarmToPos%2; ableToDisarmToPos /= 2;
  for0(i, M){
    cin>>soldiersStrength[i];
  }
  for0(i, K){
    int pos, disarmPos, danger;
    III avg;
    cin>>pos>>disarmPos>>danger;
    avg.X = pos; avg.Y = disarmPos; avg.Z = danger;
    trap[i] = avg;
  }
  sort( trap, trap+K );
  int ll=1, rr=2*e5, mm;
  while( rr>ll ){
    mm=(rr+ll)/2;
    // cout<<rr<<" "<<ll<<" "<<mm<<" "<<ableToFinishWithSolder(mm)<<endl;
    if( ableToFinishWithSolder(mm) ) rr=mm;
    else ll=mm+1;
  }
  cout<<numSoldierStrongerThan(rr);
}