#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define III pair<II, int>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define for0(i, n) for (int i = 0; i < int(n); i++)
#define for1(i, n) for (int i = 1; i <= int(n); i++)

int const oo = 1000000007, e5 = 100007, e6 = 1000007;

int __init__(){
  return 0;
}

int M, N;
string s[30], t[30];

string ans(int numb){
  --numb;
  return s[ numb%N ] + t[ numb%M ];
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int T, avg;
  cin>>N>>M;
  for0(i, N) cin>>s[i];
  for0(i, M) cin>>t[i];
  cin>>T;
  while(T--){
    cin>>avg;
    cout<<ans(avg)<<"\n";
  }
}