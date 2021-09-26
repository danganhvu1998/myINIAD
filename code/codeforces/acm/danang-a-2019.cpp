// https://open.kattis.com/problems/abstractpalong longing
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<long long, long long>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

long long powFunc(long long a, long long b){
  if(b==0) return 1;
  if(b==1) return a;
  long long avg1 = powFunc(a, b/2);
  long long avg2 = powFunc(a, b%2);
  return ((avg1*avg1)%oo)*avg2%oo;
}

long long run(long long R, long long C){
  return ((18*powFunc(6, R+C-2)%oo)*powFunc(2, (R-1)*(C-1)))%oo;
}

int main(){
  ios_base::sync_with_stdio(false);
  freopen("test.txt","r",stdin);
  long long T,a,b;
  cin>>T;
  while(T--){
    cin>>a>>b;
    cout<<run(a,b)<<endl;
  }
}