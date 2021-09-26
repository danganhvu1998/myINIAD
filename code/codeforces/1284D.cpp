// https://codeforces.com/contest/1284/problem/D
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
II timeA[e5], timeB[e5];

int __init__(){
  return 0;
}

int check( II* time1, II* time2 ){
  multiset<int> startTimePoint, endTimePoint;
  vector<III> query;
  int maxStart, minEnd, start, end;
  for0(i, N){
    III avg;
    avg.X = time1[i].first;
    avg.Y = time2[i].first;
    avg.Z = time2[i].second;
    query.push_back( avg );
    avg.X = time1[i].second+1;
    avg.Y = -time2[i].first;
    avg.Z = -time2[i].second;
    query.push_back( avg );
  }
  sort( all(query) );
  // for0(i, query.size()){
  //   cout<<query[i].X<<" "<<query[i].Y<<" "<<query[i].Z<<"\n";
  // }cout<<"\n\n";
  for0(i, query.size()){
    // cout<<query[i].Y<<" "<<query[i].Z<<endl;
    if( query[i].Y > 0 ){
      // Insert
      start = query[i].Y;
      end = query[i].Z;
      // ------
      // Check
      if( !startTimePoint.empty() ){
        maxStart = *startTimePoint.rbegin();
        minEnd = *endTimePoint.begin();
        // cout<<"--> "<<maxStart<<" "<<minEnd<<endl;
        if( end < maxStart ) return 0;
        if( start > minEnd ) return 0;
      }
      // Insert
      startTimePoint.insert( start );
      endTimePoint.insert( end );
    } else {  
      // Remove
      start = -query[i].Y;
      end = -query[i].Z;
      startTimePoint.erase( startTimePoint.find( start ) );
      endTimePoint.erase( endTimePoint.find( end ) );
    }
  }
  return 1;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int a,b,c,d;
  II *time1, *time2;
  cin>>N;
  for0(i, N){
    cin>>timeA[i].first>>timeA[i].second>>timeB[i].first>>timeB[i].second;
  }
  time1 = timeA;
  time2 = timeB;
  if( check(time1, time2) & check(time2, time1) ) {
    cout<<"YES";
  } else {
    cout<<"NO";
  }
}