// https://codeforces.com/problemset/problem/1267/K
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 
long long const oo = 1000000007, e5 = 100007;
long long N;
long long factorial[25];

void __init__(){
  factorial[0] = 1;
  for(long long i=1; i<25; i++){
    factorial[i] = factorial[i-1]*i;
  }
}

long long solve(long long num){
  long long resutl = 1, biggestDividend;
  long long overCounted = 0;
  long long remaindersCountOf[25];
  long long accumulateRemaindersCountTo[25];
  long long cpyOfNum = num;

  for(long long i=0; i<25; i++){
    remaindersCountOf[i] = 0;
  }
  for(long long i=2; i<25; i++){
    ++remaindersCountOf[ num%i ];
    num/=i;
    biggestDividend = i;
    if(num==0) break;
  }
  accumulateRemaindersCountTo[0] = remaindersCountOf[0];
  for(long long i=1; i<25; i++){
    accumulateRemaindersCountTo[i] = accumulateRemaindersCountTo[i-1] + remaindersCountOf[i];
  }

  for(long long i=2; i<biggestDividend; i++){
    //cout<<"Result Multiple By: "<<accumulateRemaindersCountTo[i-1]+2-i<<"\n";
    resutl*= (accumulateRemaindersCountTo[i-1]+2-i);
  }

  for(long long i=0; i<biggestDividend; i++){
    //cout<<"Result Devided By Factorial Of: "<<remaindersCountOf[i]<<"\n";
    resutl /= factorial[ remaindersCountOf[i] ];
  }

  if( remaindersCountOf[0] ){
    overCounted = 1;
    for(long long i=2; i<biggestDividend; i++){
      //cout<<"overCounted Multiple By: "<<(accumulateRemaindersCountTo[i-1]+1-i)<<"\n";
      overCounted *= (accumulateRemaindersCountTo[i-1]+1-i);
    }
    //cout<<resutl <<" "<<overCounted<<" "<<"\n";
    for(long long i=1; i<biggestDividend; i++){
      //cout<<"overCounted Devided By Factorial Of: "<<remaindersCountOf[i]<<"\n";
      overCounted /= factorial[ remaindersCountOf[i] ];
    }
    //cout<<resutl <<" "<<overCounted<<" "<<"\n";
    //cout<<"overCounted Devided By Factorial Of: "<<remaindersCountOf[0]-1<<"\n";
    overCounted /= factorial[ remaindersCountOf[0] -1 ];
    //cout<<resutl <<" "<<overCounted<<" "<<"\n";
  }
  //cout<<resutl <<" "<<overCounted<<" "<<"\n";
  return resutl - overCounted - 1;
}

int main(){
  long long num;
  __init__();
  //freopen("test.txt","r",stdin);
  cin>>N;
  for(long long i=0; i<N; i++){
    cin>>num;
    cout<<solve(num)<<"\n";
  }
}