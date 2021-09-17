// https://codeforces.com/contest/1270/problem/G
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
int N;
int edge[e6];
bool check[e6];
vector<int> loops;

void __init__(){
  for1(i, N){
    check[i] = 0;
  }
  loops.erase( all(loops) );
}

int findLoop(int node){
  int next;
  check[node] = 1;
  next = edge[node];
  if( check[next]==1 ) return next;
  return findLoop( next );
}

void printLoop(int loopElement){
  int firstElement = loopElement;
  loops.push_back( loopElement );
  loopElement = edge[loopElement];
  while (loopElement!=firstElement){
    loops.push_back( loopElement );
    loopElement = edge[loopElement];
  }
  cout<<loops.size()<<"\n";
  for0(i, loops.size()){
    cout<<loops[i]<<" ";
  }
  cout<<"\n";
}

void runTest(){
  int a;
  int loopElement;
  cin>>N;
  __init__();
  for1(i, N){
    cin>>a;
    edge[i] = i-a;
  }
  for1(i, N){
    loopElement = findLoop(i);
    if( loopElement!=0 ) break;
  }
  printLoop(loopElement);
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int T;
  cin>>T;
  while(T--){
    runTest();
  }
}