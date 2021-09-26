// https://codeforces.com/contest/1270/problem/E

#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define III pair<II, int>
#define X first.first
#define Y first.second
#define Z second
#define all(a) (a).begin(), (a).end()
#define forn(i, n) for (int i = 0; i < int(n); i++)

int const oo = 1000000007, e5 = 100007, e6 = 1000007;
int N;
int groupCount[5];
vector<int> answer;
II points[1005];

int groupTypeOfPoint(II point){
  return abs(point.first)%2*2+abs(point.second)%2;
}

int groupCheck(){
  forn(i, 5) groupCount[i] = 0;
  int type;
  forn(i, N){
    type = groupTypeOfPoint( points[i] );
    ++groupCount[type];
  }
  forn(i, 4){
    if( groupCount[i]<N & groupCount[i]>0 ) return 1;
  }
  return 0;
}

void addToAnswerGroupNumber(int groupType){
  int type;
  forn(i, N){
    type = groupTypeOfPoint( points[i] );
    if( type == groupType ) answer.push_back(i+1);
  }
}

void pointModification(){
  forn(i, N){
    if( points[i].first%2!=0 ) points[i].first++;
    if( points[i].second%2!=0 ) points[i].second++;
  }
  forn(i, N){
    points[i].first/=2;
    points[i].second/=2;
  }
}



int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);
  freopen("test.txt","r",stdin);
  int a,b, check;
  cin>>N;
  forn(i, N){
    cin>>a>>b;
    //points[i] = II(abs(a), abs(b));
    points[i] = II(a, b);
  }
  while( !groupCheck() ){
    pointModification();
  }
  if( groupCount[0]+groupCount[3]<N & groupCount[0]+groupCount[3]>0){
    addToAnswerGroupNumber(0);
    addToAnswerGroupNumber(3);
  } else if( groupCount[0]<N & groupCount[0]>0 ){
    addToAnswerGroupNumber(0);
  } else {
    addToAnswerGroupNumber(1);
  }
  cout<<answer.size()<<"\n";
  forn( i, answer.size() ) cout<<answer[i]<<" ";
}