// https://codeforces.com/contest/1361/problem/B
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

long long __init__(){
  return 0;
}

long long fastpower(long long a, long long b){ // calculate a^b
  // cout<<a<<' '<<b<<endl;
  if(b==0) return 1;
  if(b==1) return a;
  return (fastpower(a, b%2)*fastpower(a*a%oo, b/2))%oo;
}

void convertCurrFindToCurrNum(long long &currFind, long long &numCurrFindNeeded, long long currNum, long long P){
  numCurrFindNeeded = (numCurrFindNeeded * fastpower(P, currFind-currNum))%oo;
  currFind = currNum;
  return;
}

long long run(){
  long long N, P;
  long long nums[e6];
  long long curr, currFind, numCurrFindNeeded=0;
  long long last;
  scanf("%lld %lld", &N, &P);
  for0(i, N) scanf("%lld", &nums[i]);;
  sort(nums, nums+N);
  // for0(i, N) cout<<nums[i]<<'\n';
  curr = N;
  while(curr){
    --curr;
    if( numCurrFindNeeded==0 ){
      currFind = nums[curr];
      last = currFind;
      numCurrFindNeeded = 1;
    } else {
      convertCurrFindToCurrNum(currFind, numCurrFindNeeded, nums[curr], P);
      numCurrFindNeeded = (numCurrFindNeeded+oo-1)%oo;
    }
    //cout<<currFind<<' '<<numCurrFindNeeded<<' '<<nums[curr]<<' '<<P<<endl;
  }
  // if( numCurrFindNeeded==0 ) return 0; 
  // long long firstGroupSum, secondGroupSum;
  // firstGroupSum = fastpower(P, last);
  // secondGroupSum = (numCurrFindNeeded*fastpower(P, currFind))%oo;
  return (numCurrFindNeeded*fastpower(P, currFind))%oo;
}

int main(){
  // ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  freopen("test1.out","w",stdout);
  long long T;
  cin>>T;
  while(T--){
    printf("%lld\n", run());
  }
}
