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

int vnfRequestCapacity[] = {1, 5, 2, 3, 7, 6};

void check(int val, int showNums = 6){
  char answer[showNums];
  int server[2] = {0,0};
  for0(i, showNums){
    answer[ i ] = val%2+'0';
    server[val%2]+=vnfRequestCapacity[i];
    val/=2;
  }
  cout<<answer<<' '<<server[0]<<' '<<server[1]<<' '<<abs(server[0]-server[1])<<endl;;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  for0(i, 64) check(i);
}
