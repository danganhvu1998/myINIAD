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

long long const oo = 100000000007, e5 = 100007, e6 = 1000007;
long long N, K;
II startPoint, endPoint, PointPos[e5];
long long distanceOf[e5];
vector<II> xArr, yArr, edges[e5];

long long __init__(){
  for0(i, e5) distanceOf[i]=oo;
  return 0;
}

void dijkstra(){
  priority_queue<II, vector<II>, greater<II> >q;
  q.push(II(0, 1));
  distanceOf[1] = 0;
  while(!q.empty()){
    II nextPoint = q.top(); q.pop();
    for0(i, edges[nextPoint.second].size()){
      II addPoint = edges[nextPoint.second][i];
      if( distanceOf[ addPoint.first ] > distanceOf[ nextPoint.second ] + addPoint.second ){
        distanceOf[ addPoint.first ] = distanceOf[ nextPoint.second ] + addPoint.second;
        q.push( II(distanceOf[ addPoint.first ], addPoint.first) );
      }
    }
  }
}

void connect(II a, II b){
  edges[a.second].push_back(II(b.second, abs(a.first-b.first)));
  edges[b.second].push_back(II(a.second, abs(a.first-b.first)));
  // cout<<"CONNECT "<<a.second<<' '<<b.second<<endl;
}

long long distanceP2P(II a, II b){
  return (abs(a.first-b.first)+abs(a.second-b.second));
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  long long a, b;
  cin>>N>>K;
  cin>>startPoint.first>>startPoint.second>>endPoint.first>>endPoint.second;
  xArr.push_back( II(startPoint.first, 1) );
  yArr.push_back( II(startPoint.second, 1) );
  PointPos[1] = startPoint;
  for1(i, K){
    cin>>a>>b;
    PointPos[i+1]=II(a,b);
    xArr.push_back( II(a, i+1) );
    yArr.push_back( II(b, i+1) );
  }
  sort(all(xArr));
  sort(all(yArr));

  // BUILD GRAPH
  for0(i, xArr.size()-1){
    connect(xArr[i], xArr[i+1]);
    connect(yArr[i], yArr[i+1]);
  }

  // DFS
  dijkstra();

  // TEST AND ANSWER
  long long ans = oo;
  for1(i, K+1){
    ans = min( ans, distanceP2P(endPoint, PointPos[i]) + distanceOf[i]);
    // cout<<i<<' '<<PointPos[i].first<<' '<<PointPos[i].second<<' '<<distanceOf[i]<<endl;
  }
  cout<<ans;
}
