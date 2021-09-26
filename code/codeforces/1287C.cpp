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
int arr[109], N;
int oddCnt, evenCnt;
int answer;
int f[105][105][105][3];
vector<int> dist[3];

int __init__(){
  for0(i, 103){
    for0(j, 103){
      for0(k, 103){
        for0(z, 3){
          f[i][j][k][z] = oo;
        }
      }
    }
  }
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  cin>>N;
  oddCnt = N/2+N%2;
  evenCnt = N/2;
  for1(i, N) {
    cin>>arr[i];
    if( arr[i] > 0 ){
      ++answer;
      if( arr[i]%2==0 ) {
        evenCnt--;
        arr[i]=2;
      } else {
        oddCnt--;
        arr[i]=1;
      }
    }
  }
  if( arr[1]==0 ){
    f[1][oddCnt-1][evenCnt][1] = 0;
    f[1][oddCnt][evenCnt-1][2] = 0;
  } else if(arr[1]==1){
    f[1][oddCnt][evenCnt][1] = 0;
  } else {
    f[1][oddCnt][evenCnt][2] = 0;
  }

  for(int i=2; i<=N; i++){ //pos
    for(int j=0;j<=oddCnt;j++){ //oddCnt
      for(int k=0; k<=evenCnt; k++){ //evenCnt
        if( arr[i]==0 ){
          f[i][j][k][1] = min( f[i-1][j+1][k][2]+1, f[i-1][j+1][k][1] );
          f[i][j][k][2] = min( f[i-1][j][k+1][2], f[i-1][j][k+1][1]+1 );
        } else if(arr[i]==1){
          f[i][j][k][1] = min( f[i-1][j][k][2]+1, f[i-1][j][k][1] );
        } else if(arr[i]==2){
          f[i][j][k][2] = min( f[i-1][j][k][2], f[i-1][j][k][1]+1 );
        }
      }
    }
  }
  cout<<min( f[N][0][0][1],  f[N][0][0][2]);
}