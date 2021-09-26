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
priority_queue<II, vector<II>, greater<>> q;

vector<II> edges[5005];
int dist[5005];
int minNode=5005, maxNode=0;
int currTime = 0;

int __init__(){
  for0(i, 5005) dist[i]=1000000007;
  return 0;
}

void printDist(int node){
    if( dist[node]==1000000007 ) cout<<"∞, ";
    else cout<< dist[node]<<", ";
}

void run(){
    cout<<"[TIME "<<currTime++<<"]: ";
    for(int i=minNode; i<=maxNode; i++){
        printDist(i);
    } cout<<'\n';
    II next = q.top(); q.pop();
    int node = next.second;
    for0( i, edges[node].size() ){
        int nextNode = edges[node][i].first;
        if( dist[nextNode]>dist[node]+ edges[node][i].second){
            dist[nextNode] = dist[node]+ edges[node][i].second;
            q.push( II(dist[nextNode], nextNode) );
        }
    }

}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a, b, c;
  int startNode = 1;
  while(!cin.eof()){
    cin>>a>>b>>c;
    if(a>maxNode) maxNode = a;
    if(b>maxNode) maxNode = b;
    if(a<minNode) minNode = a;
    if(b<minNode) minNode = b;
    edges[a].push_back(II(b,c));
    edges[b].push_back(II(a,c));
  }
  dist[startNode] = 0;
  q.push( II(0, startNode) );
  while( !q.empty() ) run();
  
}
/*
1 2 4
1 8 9
2 3 8
2 8 11
3 4 7
3 6 4
3 9 2
4 5 9
4 6 14
5 6 10
6 7 2
7 8 1
7 9 6
8 9 7
*/