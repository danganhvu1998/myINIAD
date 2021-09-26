// http://codeforces.com/contest/1333/problem/F
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

int N;
int gcdOf[5*e5];
bool ck[5*e5];
vector<int> answer;

int __init__(){
  for0(i, 500007){
    ck[i]=0;
    gcdOf[1]=1;
  }
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  //freopen("test.txt","r",stdin);
  cin>>N;
  //N = 500000;
  for(int i=1; i<=N; i++){
    for(int j=i; j<=N; j+=i){
      if( gcdOf[j]==i && ck[j]==0 ){
        answer.push_back(i);
        //cout<<j<<' ';
        ck[j]=1;
        for(int z=j; z<=N; z+=j){
          gcdOf[z] = max( gcdOf[z], j );
        }
      }
    }
  }
  //cout<<endl;
  for(int i=1; i<answer.size(); i++) cout<<answer[i]<<' ';
}