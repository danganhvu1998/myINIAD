// http://codeforces.com/contest/806/problem/C
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 
long long const oo = 1000000007, e5 = 100007;

long long N;
long long intList[e5];
long long powerOfTwoCount[60];
long long notPowerOfTwoCount[60];
long long powerOfTwoIntList[60];
long long maxAns, minAns;

void __init__(){
  powerOfTwoIntList[0] = 1;
  for(long long i=1; i<60; i++){
    powerOfTwoIntList[i] = 2*powerOfTwoIntList[i-1];
  }
}

void isPowerOfTwo(long long num){
  long long powerOfTwo = 0;
  for(long long i=0; i<60; i++){
    if(num==powerOfTwoIntList[i]){
      ++powerOfTwoCount[i];
      break;
    } else if(num<powerOfTwoIntList[i]) {
      ++notPowerOfTwoCount[i];
      break;
    } else {
      continue;
    }
  }
}

long long checkAnsIs(long long testAns){
  if(testAns>powerOfTwoCount[0]) return 0;
  long long used[60], leftToUse[60];
  long long totalUnused = 0;
  used[0] = testAns;
  for(long long i=1; i<60; i++){
    used[i] = min(used[i-1], powerOfTwoCount[i]);
  }
  for(long long i=59; i>=0; i--){
    totalUnused += powerOfTwoCount[i]+notPowerOfTwoCount[i]-used[i];
    if(i>0){
      if(totalUnused > used[i-1]) return 0;
    } else {
      if(totalUnused > used[0]) return 0;
    }
  }
  return 1;
}

int main(){
  // freopen("test.txt","r",stdin);
  __init__();
  cin>>N; 
  for(long long i=0; i<N;i++){
    cin>>intList[i];
    // intList[i] = 1;
    isPowerOfTwo(intList[i]);
  }
  // for(long long i=0; i<15;i++){
  //   cout<<powerOfTwoCount[i]<<" ";
  // }
  // cout<<"\n";
  // for(long long i=0; i<15;i++){
  //   cout<<notPowerOfTwoCount[i]<<" ";
  // }
  // cout<<"\n";
  if( !checkAnsIs(powerOfTwoCount[0]) ) {
    cout << -1;
    return 0;
  }
  maxAns = powerOfTwoCount[0];
  minAns = maxAns;
  // cout<<"TEST "<<checkAnsIs(9)<<"\n";
  long long ll=0, rr=minAns, mm;
  while(ll<rr){
    mm=(ll+rr)/2;
    // cout<<mm<<' '<<checkAnsIs(mm)<<'\n';
    if( checkAnsIs(mm) ){
      minAns = mm;
      rr = mm;
    } else {
      ll = mm+1;
    }
  }
  for(long long i=minAns; i<=maxAns; i++){
    cout<<i<<' ';
  }
  // cout<< minAns <<" " <<maxAns;
}