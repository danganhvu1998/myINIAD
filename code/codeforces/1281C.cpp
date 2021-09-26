// https://codeforces.com/contest/1281/problem/C
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 


long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

long long T, N, X;
long long currString[e6];
long long currStringLeng=0;
string S;

int main(){
  freopen("test.txt","r",stdin);
  long long currMulNum, nextStringLeng, lastStringLeng;
  long long passed;
  cin>>T;
  for(long long whatever=0; whatever<T; whatever++){

    cin>>X;
    getline (cin,S);
    getline (cin,S);
    currStringLeng = S.length();
    passed = 0;
    for(long long i=0; i<currStringLeng; i++){
      currString[i] = S[i]-'0';
    }
    for(long long i=0; i<X;i++){
      currMulNum = currString[i];
      nextStringLeng = currStringLeng + (currMulNum-1) * (currStringLeng+oo-i-1);
      nextStringLeng %= oo;
      if(!passed){
        // cout<<passed<<" "<<currStringLeng<<" "<<currMulNum<<" "<<i<<"\n";
        lastStringLeng = currStringLeng;
        for(long long j=1; j<currMulNum; j++){
          for(long long k=i+1; k<lastStringLeng; k++){
            currString[currStringLeng] = currString[k];
            ++currStringLeng;
            if(currStringLeng > X) break;
          }
          if(currStringLeng > X) break;
        }
        if(currStringLeng > X) passed = 1;
      }
      currStringLeng = nextStringLeng;
    }
    printf("%lld\n", currStringLeng);
  }

}