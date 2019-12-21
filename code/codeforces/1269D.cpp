// https://codeforces.com/contest/1269/problem/D
#include <bits/stdc++.h>
using namespace std;
  
#define II pair<long long, long long>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 
  
long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
  
long long num[3*e5];
long long status[3*e5]; // Status[I] = A mean that collum I, cell 
long long N, ans = 0;
  
int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  long long a;
  long long lastOne = -1;
  long long cellCount, nextStatus, sum=0;
  cin>>N;
  status[0] = 0;
  for(long long i=0; i<N; i++){
    cin>>a;
    num[i] = a;
    //num[i] = ((i*i)%e5*i)%e5;
    // sum+=num[i];
  }
  for(long long i=0; i<N; i++){
    cellCount = num[i]-status[i];
    //cout<<i<<' '<<status[i]<<' '<<cellCount<<"\n";
    ans += cellCount / 2;
    if(i>0){
      ans += (status[i]/2+status[i]%2);
    }
    if(cellCount%2==1){
      nextStatus = status[i]+1;
    } else {
      nextStatus = status[i]-1;
      if( nextStatus<0 ) nextStatus = 0;
    }
    if(nextStatus>num[i+1]){
      nextStatus -= ( (nextStatus - num[i+1]) + (nextStatus - num[i+1])%2 );
    }
    status[i+1]=nextStatus;
  }
  //cout<<ans<<" "<<sum<<" "<<sum/2-ans;
  cout<<ans;
}