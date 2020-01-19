// https://codeforces.com/contest/1278/problem/E
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
vector<int> edge[5*e5];
stack<int> dissolve;
int answer[e6];
int currWrite=1;
bool ck[5*e5];
int startOf[5*e5], endOf[5*e5];

int __init__(){
  for0(i, 500005){
    ck[i]=0;
    startOf[i]=0;
    endOf[i]=0;
  }
  return 0;
}

void dissolveNode(int node){
  // cout<<node<<endl;
  int child;
  ck[ node ] = 1;
  for0(i, edge[node].size()){
    child = edge[node][i];
    if( ck[child]==1 ) continue;
    answer[currWrite] = child;
    ++currWrite;
    dissolve.push( child );
  }
  answer[currWrite] = node;
  ++currWrite;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a, b;
  cin>>N;
  for0(i, N-1){
    cin>>a>>b;
    edge[a].push_back(b);
    edge[b].push_back(a);
  }
  answer[1]=1;
  currWrite=2;
  dissolve.push(1);
  while( !dissolve.empty() ){
    int next = dissolve.top();
    dissolve.pop();
    dissolveNode(next);
  }
  for1(i, 2*N ){
    // cout<<answer[i]<<" ";
    if( startOf[ answer[i] ]==0 ){
      startOf[ answer[i] ]=i;
    } else {
      endOf[ answer[i] ]=i;
    }
  }
  for1(i, N){
    cout<<startOf[i]<<" "<<endOf[i]<<"\n";
  }
}