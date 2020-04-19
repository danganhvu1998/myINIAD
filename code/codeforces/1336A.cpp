  // https://codeforces.com/contest/1336/problem/A
  #include <bits/stdc++.h>
  using namespace std;

  #define II pair<long long, long long>
  #define III pair<II, long long>
  #define X first.first
  #define Y first.second
  #define Z second
  #define all(a) (a).begin(), (a).end()
  #define for0(i, n) for (long long i = 0; i < n; i++)
  #define for1(i, n) for (long long i = 1; i <= n; i++)

  long long const oo = 1000000007, e5 = 100007, e6 = 1000007;
  long long N, K;
  vector<long long> edges[2*e5];
  long long childCount[2*e5];
  long long hightOf[2*e5];
  vector<long long> happiness;

  long long __init__(){
    for0(i, e5){
      childCount[i] = 0;
      hightOf[i]=0;
    }
    return 0;
  }

  long long DFS(long long node, long long hight){
    hightOf[node] = hight;
    for0(i, edges[node].size()){
      if( hightOf[edges[node][i]]>0 ) continue;
      ++childCount[node];
      childCount[node] += DFS( edges[node][i], hight+1 );
    }
    return childCount[node];
  }

  int main(){
    ios_base::sync_with_stdio(false);cin.tie(0);__init__();
    // freopen("test.txt", "r", stdin);
    long long a, b, ans=0;
    cin>>N>>K;
    for(long long i=1; i<N; i++){
      cin>>a>>b;
      edges[a].push_back(b);
      edges[b].push_back(a);
    }
    DFS(1, 1);
    for1(i, N){
      happiness.push_back( hightOf[i]-childCount[i]-1 );
    }
    sort( all(happiness) );
    for1(i, K) ans+=happiness[ happiness.size()-i ];
    cout<<ans;
  }
