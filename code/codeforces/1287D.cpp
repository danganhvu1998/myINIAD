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

int N;
int value[2005], parent[2005];
int cannot=0;
vector<int> edge[2005];
vector<int> child[2005];

int add(int node){
  child[node].push_back(node);
  int curr = child[node].size()-1;
  if( curr<value[node] ) {
    cannot=1;
    return 0;
  }
  while(curr!=value[node]){
    swap( child[node][curr], child[node][curr-1] );
    --curr;
  }
}

int DFS(int node){
  //cout<<node<<endl;
  int nextChild;
  for0(i, edge[node].size()){
    nextChild = edge[node][i];
    DFS( nextChild );
    for0(j, child[ nextChild ].size()){
      child[ node ].push_back( child[ nextChild ][j] );
    }
  }
  add(node);
}


int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a,b;
  cin>>N;
  for1(i, N){
    cin>>a>>b;
    edge[a].push_back(i);
    parent[i] = a;
    value[i] = b;
  }
  for1(i, N){
    if( parent[i]==0 ) {
      DFS(i);
      if(cannot==1) {
        cout<<"NO";
      } else {
        cout<<"YES\n";
        int answer[2005];
        for0(j, child[i].size()){
          answer[ child[i][j] ] = j+1;
        }
        for1(j, N){
          cout<<answer[j]<<" ";
        }
      }
    }
  }
  
}