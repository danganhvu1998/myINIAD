// https://codeforces.com/contest/1285/problem/E -- Debugging
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

void run(){
  int a, b;
  int totalSeg = 0, totalAdd=0;
  vector<III> allInt;
  III avg;
  int N;
  cin>>N;
  II segm[N+5];
  int currentLeapCount[2*N+5];
  int aboutOne[2*N+5];
  int startOf[2*N+5];
  aboutOne[0]=0;
  currentLeapCount[0]=0;
  for1(i, N){
    cin>>a>>b;
    segm[i] = II(a,b);
    avg.X = a; avg.Y = 1; avg.Z = i;
    allInt.push_back(avg);
    avg.X = b+1; avg.Y = -1; avg.Z = i;
    allInt.push_back(avg);
  }
  sort( all(allInt) );
  for0(i, allInt.size()){
    currentLeapCount[ i+1 ] = currentLeapCount[i]+allInt[i].Y;
    if( currentLeapCount[i+1]==0 ) ++totalSeg;
    if( currentLeapCount[i+1]==1 ) {
      aboutOne[i+1] = aboutOne[i]+1;
    } else {
      aboutOne[i+1] = aboutOne[i];
    }
  }
  for0(i, allInt.size()){
    cout<<currentLeapCount[i+1]<<" ";
  } cout<<endl;
  for0(i, allInt.size()){
    cout<<aboutOne[i+1]<<" ";
  } cout<<endl;
  for0(i, allInt.size()){
    if( allInt[i].Y==1 ){
      startOf[ allInt[i].Z ] = i+1;
    }
  }
  for0(i, allInt.size()){
    if( currentLeapCount[i+1]!=0 ) continue;
    totalAdd = max( totalAdd, aboutOne[ i ] - aboutOne[ startOf[ allInt[i].Z ]-1 ] - 1 );
  }
  cout<<endl;
  cout<<totalSeg<<" "<<totalAdd<<endl;
  if(totalAdd>0) cout<<totalAdd+totalSeg-1<<endl;
  else cout<<totalSeg<<endl;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int T;
  cin>>T;
  while(T--){
    run();
  }
}