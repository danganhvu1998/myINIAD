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

bool possible = true;
vector<int> edges[50];
int val[50];

void dfs(int node, int value){
  // cout<<node<<' '<<val[node]<<' '<<value<<endl;
  if( val[node]!=0 ){
    if( val[node] != value ) possible = false;
    return;
  } else {
    val[node] = value;
    for(int i=0; i<edges[node].size(); i++){
      dfs( edges[node][i], -value );
    }
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int N;
  int curr, res = 1;
  cin>>N;
  string temp;
  getline(cin, temp);
  for(int i=0; i<N; i++){
    getline(cin, temp);
    // cout<<"--"<<temp<<"--"<<endl;
    if( !temp.length() ) continue;
    curr = 0;
    for(int j=0; j<temp.length(); j++){
      if( temp[j]==' ' ) {
        edges[i].push_back(curr);
        edges[curr].push_back(i);
        curr = 0;
      } else {
        curr = 10 * curr + (temp[j]-'0');
      }
    }
    edges[i].push_back(curr);
    edges[curr].push_back(i);
  }
//   for(int i=0; i<N; i++){
//     cout<<"=> "<<i<<' ';
//     for(int j=0; j<edges[i].size(); j++){
//       cout<<edges[i][j]<<' ';
//     }
//     cout<<endl;
//   }
  for(int i=0; i<N; i++){
    if (val[i]==0) {
      res*=2;
      dfs(i, 1);
    }
  }
  if( possible ) cout << res;
  else cout << -1;
}
