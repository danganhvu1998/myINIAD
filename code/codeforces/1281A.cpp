#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

int T;

string run(string S){
  char chr = S[ S.length() - 1];
  if(chr == 'o') return "FILIPINO";
  if(chr == 'u') return "JAPANESE";
  return "KOREAN";
}

int main(){
  // freopen("test.txt","r",stdin);
  string S;
  cin >> T;
  for(int whatever=0; whatever<T; whatever++){
    cin>>S;
    cout<<run(S)<<"\n";
  }
}