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

int N;
string str1, str2;
vector<bool> diff;

int __init__(){
  return 0;
}

void print01(int val, int showNums = 20){
  char answer[showNums];
  for0(i, showNums){
    answer[ showNums-1-i ] = val%2+'0';
    val/=2;
  }
  cout<<answer;
}

int main(){
  ios_base::sync_with_stdio(false); cin.tie(0);__init__();
  // freopen("test.txt","r",stdin);
  cin>>N;
  cin>>str1>>str2;
  N = str1.length();
  int total1 = 0;
  int longestSame = 0;
  int curr=0;
  for0(i, N){
    if( str1[i]!=str2[i] ) {
      int pushVal = str1[i]-'0';
      diff.push_back( pushVal );
      if( pushVal==1 ) ++total1;
      // cout<<pushVal;
    }
  }
  if( diff.size()==0 ) {
    cout<<0;
    return 0;
  }

    if( diff.size()==0 ) {
    cout<<0;
    return 0;
  }
  // cout<<endl;
  if( diff.size()%2==1 || total1!= diff.size()/2 ){
    cout<<-1;
    return 0;
  }
  int total0 =0, total11=0;
  for(int i=0; i<diff.size(); i++){
     if( diff[i] ) ++total11;
     else ++total0;
     longestSame = max( longestSame, abs(total0-total11) );
  }
  cout<<longestSame;
  
}
