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

int __init__(){
  return 0;
}

int N, K;

vector<string> strs;

int hasString( string finding ){
  int ll = 0, rr = strs.size()-1, mm;
  while( rr>ll ){
    mm = (rr+ll)/2;
    if( strs[mm]>finding ){
      rr=mm-1;
    } else if( strs[mm]<finding ){
      ll=mm+1;
    } else return 1;
  }
  if( strs[ll]==finding ) return 1;
  return 0;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  freopen("test.txt","r",stdin);
  int answer=0;
  string avg;
  string str1,str2, strFind;
  cin>>N>>K;
  for0(i, N){
    cin>>avg;
    strs.push_back(avg);
  }
  sort( all(strs) );
  for0(i, N){
    for0(j, i){
      str1 = strs[i];
      str2 = strs[j];
      strFind = strs[j];
      for0(k, K){
        if( str1[k] == str2[k] ) continue;
        strFind[k] = char( int('T')+int('S')+int('E')-int(str1[k])-int(str2[k]) );
      }
      //cout<<str1<<" "<<str2<<" "<<strFind<<" "<<hasString( strFind )<<endl;
      answer+=hasString( strFind );
    }
  }
  cout<<answer/3;
}