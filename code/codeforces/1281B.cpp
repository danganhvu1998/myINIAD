// https://codeforces.com/contest/1281/problem/C
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

int T;

string changeName(string ourName, string enemyName){
  string sortedOurName = ourName;
  sort(sortedOurName.begin(), sortedOurName.end());
  for(int i=0; i<ourName.length(); i++){
    if( ourName[i]!=sortedOurName[i] ){
      for(int j=ourName.length()-1; j>i; j--){
        if(ourName[j] == sortedOurName[i]){
          ourName[j] = ourName[i];
          ourName[i] = sortedOurName[i];
          return ourName;
        }
      }
    }
  }
  return ourName;
}

int main() {
  // freopen("test.txt","r",stdin);
  string ourName, enemyName, sortedOurName;
  cin >> T;
  for(int whatever=0; whatever<T; whatever++){
    cin>>ourName>>enemyName;
    ourName = changeName(ourName, enemyName);
    if(ourName <enemyName){
      cout<<ourName<<"\n";
    } else {
      cout<<"---\n";
    }
  }
}