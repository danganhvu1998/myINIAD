  // https://codeforces.com/contest/1278/problem/D
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
  int N, edgeCount=0, vertexCount=0;
  int startOf[e6];
  int endOf[e6];
  bool ck[e6];
  set<int> segment;
  set<int>::iterator it;
  vector<int> edge[e6];

  int __init__(){
    for0(i, e6) {
      startOf[i]=0;
      endOf[i]=0;
    }
    return 0;
  }

  void DFS(int vertex){
    if( ck[vertex]==1 ) return;
    ck[ vertex ] = 1;
    ++vertexCount;
    for0(i, edge[vertex].size()){
      DFS( edge[vertex][i] );
    }
  }

  int main(){
    ios_base::sync_with_stdio(false); cin.tie(0);__init__();
    freopen("test.txt","r",stdin);
    int a, b, addVertex;
    cin>>N;
    for0(i, N){
      cin>>a>>b;
      endOf[a]=b;
      startOf[b]=a;
    }
    for0(i, e6){
      if( endOf[i]==0 ) continue;
      addVertex = endOf[i];
      segment.insert( addVertex );
      while( *segment.begin()<i ) segment.erase( segment.begin() );
      for (it=segment.begin(); it!=segment.end(); ++it){
        if(*it==addVertex) break;
        ++edgeCount;
        if( edgeCount>=N ){
          cout<<"NO";
          return 0;
        }
        edge[*it].push_back( addVertex );
        edge[ addVertex ].push_back( *it );
      }
    }
    for0(i, e6){
      if( startOf[i]>0 ){
        DFS(i);
        break;
      }
    }
    if( vertexCount==N ){
      cout<<"YES";
    } else {
      cout<<"NO";
    }
    return 0;
  }