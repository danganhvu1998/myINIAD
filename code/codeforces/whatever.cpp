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

long long a[5];

  
long long send(long long s) {
  cout << s << endl;
  fflush(stdout);
  return 0;
}

bool test(long long last){
  for1(i, 3){
    for(long long j=i+1; j<=3; j++){
      if( a[i]==a[j] ) return 0;
    }
  }
  if( a[1]==0 || a[2]==0 || a[3]==0 ){
    if( a[last] == (a[1]+a[2]+a[3]-a[last])*2 ) return 0;
    if( a[last] == (a[1]+a[2]+a[3]-a[last])/2*3 ) return 0;
  }
  return 1;
}
  
int main(){
  int last=-1;
  ios_base::sync_with_stdio(false); cin.tie(0);
  cin>>a[1]>>a[2]>>a[3];
  cout << "Second" << endl;
  fflush(stdout);
  while(1){
    long long nextMove;
    long long currMin=a[1];
    long long choose = 0;
    cin>>nextMove;//send(-nextMove);
    // nextMove = 1;
    if(nextMove<=0) exit(0);
    for1(i, 3) currMin = min(currMin, a[i]);
    for1(i, 3) a[i] -= currMin;
    for1(i, 3){
      if( i==last || choose!=0) continue;
      a[i]+=nextMove;
      // cout<<i<<' '<<test(i)<<endl;
      if(test(i)){
        choose=i;
      } 
      a[i]-=nextMove;
    }
    a[choose]+=nextMove;
    // cout<<a[1]<<' '<<a[2]<<' '<<a[3]<<' ';
    send(choose);
    last = choose;
  }
} 