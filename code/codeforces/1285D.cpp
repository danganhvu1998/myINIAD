// https://codeforces.com/contest/1285/problem/D
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

long long const oo = 2000000007, e5 = 100007, e6 = 1000007;
long long N;
long long num[e5][36], realNum[e5];
bool check[e5];
long long ansX = 0;

long long __init__(){
  for0(i, e5) check[i]=0;
  return 0;
}

void addNum(long long pos, long long val){
  for(long long i=35;i>=0; i--){
    num[pos][i]=val%2;
    val/=2;
  }
}

long long cal(long long pos){
  long long res, has[2];
  has[1]=0; has[0]=0;
  for1(i, N){
    if( check[i]==1 ) continue;
    has[ num[i][pos] ] = 1;
  }
  if( has[1]==1 & has[0]==1 ){
    res=1;
    for1(i, N){
      if( check[i]==1 ) continue;
      if( num[i][pos]==res ){
        check[i]=1;
      }
    } 
    return res;
  } else if(has[1]==1 & has[0]==0){
    res=1;
    return res;
  } else {
    res=0;
    return res;
  }
}

int findAns(int currAns, int currBitPos, vector<int> currList){
  if( currBitPos>=36 ) return currAns;
  long long res, has[2];
  has[1]=0; has[0]=0;
  for0(i, currList.size()){
    int pos = currList[i];
    has[ num[pos][currBitPos] ] = 1;
  }
  if( has[1]==1 & has[0]==1 ){
    vector<int> list[2];
    for0(i, currList.size()){
      int pos = currList[i];
      list[ num[pos][currBitPos] ].push_back( pos );
    }
    currList.erase( all(currList) );
    return min( findAns( currAns*2+1, currBitPos+1, list[1] ),  findAns( currAns*2+1, currBitPos+1, list[0] ));
  } else if(has[1]==1 & has[0]==0){
    return findAns( currAns*2, currBitPos+1, currList );
  } else {
    return findAns( currAns*2, currBitPos+1, currList );
  }
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  //freopen("test.txt","r",stdin);
  long long a, nextBit;
  vector<int> currList;
  cin>>N;
  for1(i, N){
    cin>>a;
    realNum[i] = a;
    addNum(i, a);
    currList.push_back(i);
  }
  cout<<findAns(0, 0, currList);
}