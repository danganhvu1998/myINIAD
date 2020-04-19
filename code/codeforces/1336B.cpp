// https://codeforces.com/contest/1336/problem/B
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
long long N1, N2, N3;
long long arr1[e5], arr2[e5], arr3[e5];
long long minVal;

long long __init__(){
  return 0;
}

long long calculateDiffWeight(long long a, long long b, long long c){
  // cout<<a<<' '<<b<<' '<<c<<' '<<(a-b)*(a-b)+(a-c)*(a-c)+(c-b)*(c-b)<<endl;
  return (a-b)*(a-b)+(a-c)*(a-c)+(c-b)*(c-b);
}

long long maxPossible(long long* nums1, long long lengNums1, long long* nums2, long long lengNums2, long long* nums3, long long lengNums3){
  long long curr1=0, curr2=0, curr3=0;
  long long maxVal = 0;
  while (curr1<lengNums1){
    while (nums2[curr2]<nums1[curr1]){
      ++curr2;
      if(curr2==lengNums2) return 0;  
    }
    while( curr2<lengNums2 ){
      if( nums2[curr2]>=nums1[curr1+1] ) break;
      while (nums3[curr3]<nums2[curr2]){
        ++curr3;  
        if(curr3==lengNums3) return 0;
      }
      minVal = min( minVal, calculateDiffWeight(nums1[curr1], nums2[curr2], nums3[curr3]));
      ++curr2;
    }
    ++curr1;
  }
  return 0;
}

void run(){
  minVal = numeric_limits< long long >::max();
  cin>>N1>>N2>>N3;
  for0(i, N1) cin>>arr1[i]; sort(arr1, arr1+N1); arr1[N1]=numeric_limits< long long >::max();
  for0(i, N2) cin>>arr2[i]; sort(arr2, arr2+N2); arr2[N2]=numeric_limits< long long >::max();
  for0(i, N3) cin>>arr3[i]; sort(arr3, arr3+N3); arr3[N3]=numeric_limits< long long >::max();
  maxPossible( arr1, N1, arr2, N2, arr3, N3 );
  maxPossible( arr1, N1, arr3, N3, arr2, N2 );
  maxPossible( arr2, N2, arr1, N1, arr3, N3 );
  maxPossible( arr2, N2, arr3, N3, arr1, N1 );
  maxPossible( arr3, N3, arr1, N1, arr2, N2 );
  maxPossible( arr3, N3, arr2, N2, arr1, N1 );
  cout<<minVal<<'\n';
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  // freopen("test.txt","r",stdin);
  long long T;
  cin>>T;
  while(T--){
    run();
  }
}
