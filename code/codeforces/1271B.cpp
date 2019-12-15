#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

int N;
string str;

int check(string STR){
   for(int i=0;i<STR.length(); i++){
     if( STR[i]!=STR[0] ) return 0;
   }
   return 1;
}

int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  int wCount=0, bCount=0, ans=0;
  cin>>N>>str;
  string strCopy = str;
  char ansChar;
  for(int i=0; i<str.length();i++){
    if( str[i]=='B' ) bCount++;
    else wCount++;
  }
  if(bCount%2==1 and wCount%2==1){
    cout<<-1;
    return 0;
  }
  if(bCount%2==0) ansChar = 'W';
  else ansChar = 'B';

  while(ans<=3*N){
    if(check( strCopy )) break;
    for(int i=0;i<strCopy.length()-1; i++){
      if(strCopy[i]!=ansChar){
        ++ans;
        strCopy[i] = ansChar;
        strCopy[i+1] = 'B'+'W'-strCopy[i+1];
      }
    }
    
  }
  cout<<ans<<"\n";
  strCopy = str;
  while(1){
    if(check( strCopy )) break;
    for(int i=0;i<strCopy.length()-1; i++){
      if(strCopy[i]!=ansChar){
        cout<<i+1<<" ";
        ++ans;
        strCopy[i] = ansChar;
        strCopy[i+1] = 'B'+'W'-strCopy[i+1];
      }
    }
    
  }
  
}