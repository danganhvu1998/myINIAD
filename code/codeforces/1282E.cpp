// https://codeforces.com/contest/1282/problem/E
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define III pair <II, int>
#define X first.first
#define Y first.second
#define Z second

int const oo = 1000000007, e5 = 100007, e6 = 1000007;

map< II, int > edgeCnt;
map<III, int> cakeIndex;
vector<int> edge[e5], cutEdge[e5];
bool check[e5];
int N;
int appearCnt[e5];
III piecesOfCake[e5];

void __init__(){
  for(int i=0; i<=N; i++){
    check[i] = 0;
    appearCnt[i] = 0;
    edge[i].erase(edge[i].begin(), edge[i].end());
    cutEdge[i].erase(cutEdge[i].begin(), cutEdge[i].end());
  }
  edgeCnt.erase( edgeCnt.begin(), edgeCnt.end() );
  cakeIndex.erase( cakeIndex.begin(), cakeIndex.end() );
}

void DFS(int node){
  if( check[node]==1 ) return;
  check[node] = 1;
  cout<<node<<" ";
  for(int i=0; i<edge[node].size(); i++){
    DFS( edge[node][i] );
  }
}

void testEdge(int a, int b){
  if(a>b) swap(a,b);
  if(edgeCnt[II(a,b)]==1){
    edge[a].push_back(b);
    edge[b].push_back(a);
  }
}

int cutAtNote(int node){
  int a=node, b=0, c=0;
  III avg;
  for(int i=0; i<cutEdge[node].size(); i++){
    if( appearCnt[ cutEdge[node][i] ]>0 ){
      if(!b) b = cutEdge[node][i];
      else c = cutEdge[node][i];
    }
  }
  if(a>b) swap(a, b);
  if(b>c) swap(b, c);
  if(a>b) swap(a, b);
  avg.X = a; avg.Y = b; avg.Z = c;
  // cout<<"FUCK-> "<<node<<" "<<a<<" "<<b<<" "<<c<<endl;
  return cakeIndex[avg];
}

void cut(int node){
  if( appearCnt[node]!=1 ) return;
  cout<<cutAtNote(node)<<" ";
  appearCnt[node]=0;
  for(int i=0; i<cutEdge[node].size(); i++){
    appearCnt[ cutEdge[node][i] ]--;
  }
  for(int i=0; i<cutEdge[node].size(); i++){
    cut( cutEdge[node][i] );
  }
}

void run(){
  int a,b,c;
  III avg;
  for(int i=0; i<N-2; i++){
    cin>>a>>b>>c;
    if(a>b) swap(a, b);
    if(b>c) swap(b, c);
    if(a>b) swap(a, b);
    ++appearCnt[a];
    ++appearCnt[b];
    ++appearCnt[c];
    avg.X = a; avg.Y = b; avg.Z = c;
    cakeIndex[avg] = i+1;
    piecesOfCake[i] = avg;
    edgeCnt[II(a, b)] = edgeCnt[II(a, b)]+1;
    edgeCnt[II(b, c)] = edgeCnt[II(b, c)]+1;
    edgeCnt[II(a, c)] = edgeCnt[II(a, c)]+1;
    if( edgeCnt[II(a, b)]==1 ){
      cutEdge[a].push_back(b);
      cutEdge[b].push_back(a);
    }
    if( edgeCnt[II(a, c)]==1 ){
      cutEdge[a].push_back(c);
      cutEdge[c].push_back(a);
    }
    if( edgeCnt[II(b, c)]==1 ){
      cutEdge[b].push_back(c);
      cutEdge[c].push_back(b);
    }
  }
  // Finding Edge
  for(int i=0; i<N-2; i++){
    a = piecesOfCake[i].X;
    b = piecesOfCake[i].Y;
    c = piecesOfCake[i].Z;
    testEdge(a, b);
    testEdge(b, c);
    testEdge(c, a);
  }
  // Print Cake
  DFS(1);
  cout<<"\n";

  // Find Cutting Edge
  for(int i=1; i<=N; i++){
    if( appearCnt[i]==1 ) cut(i);
  }
  cout<<"\n";
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int T;
  cin>>T;
  while (T--){
    cin>>N;
    __init__();
    run();
  }
  

}