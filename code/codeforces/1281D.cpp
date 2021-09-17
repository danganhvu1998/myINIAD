// https://codeforces.com/contest/1281/problem/D
#include <bits/stdc++.h>
using namespace std;
 
#define II pair<int, int>
#define child_notes_sum first
#define lazy_update second
#define PB push_back 

long long const oo = 1000000007, e5 = 100007, e6 = 1000007;

int T, N, M;
string worldMap[70];

int check0(){
  for(int i=0;i<N;i++){
    for(int j=0; j<M; j++){
      if(worldMap[i][j] == 'P') return 0;
    }
  }
  return 1;
}

int checkCannot(){
  for(int i=0;i<N;i++){
    for(int j=0; j<M; j++){
      if(worldMap[i][j] == 'A') return 0;
    }
  }
  return 1;
}

int check1(){
  int ck1=1, ck2=1, ck3=1, ck4=1;
  for(int i=0;i<N;i++){
    if(worldMap[i][0] == 'P') ck1=0; 
    if(worldMap[i][M-1] == 'P') ck2=0;
  }
  for(int i=0;i<M;i++){
    if(worldMap[0][i] == 'P') ck3=0; 
    if(worldMap[N-1][i] == 'P') ck4=0;
  }
  return (ck1 | ck2 | ck3 | ck4);
}

int check2(){
  if(worldMap[0][0] == 'A') return 1;
  if(worldMap[0][M-1] == 'A') return 1;
  if(worldMap[N-1][0] == 'A') return 1;
  if(worldMap[N-1][M-1] == 'A') return 1;
  for(int i=0; i<N; i++){
    int ck = 0;
    for(int j=0; j<M; j++){
      if(worldMap[i][j]=='P') ck=1;
    }
    if(ck==0) return 1;
  }

  for(int i=0; i<M; i++){
    int ck = 0;
    for(int j=0; j<N; j++){
      if(worldMap[j][i]=='P') ck=1;
    }
    if(ck==0) return 1;
  }
  return 0;
}

int check3(){
  for(int i=0;i<N;i++){
    if(worldMap[i][0] == 'A') return 1;
    if(worldMap[i][M-1] == 'A') return 1;
  }
  for(int i=0;i<M;i++){
    if(worldMap[0][i] == 'A') return 1;
    if(worldMap[N-1][i] == 'A') return 1;
  }
  return 0;
}

int run(){
  if(checkCannot()) return -1;
  if(check0()) return 0;
  if(check1()) return 1;
  if(check2()) return 2;
  if(check3()) return 3;
  return 4;

}

int main(){
  freopen("test.txt","r",stdin);
  int result;
  string S;
  cin >> T;
  for(int whatever=0; whatever<T; whatever++){
    cin >> N >> M;
    for(int i=0; i<N; i++){
      cin>>worldMap[i];
    }
    result = run();
    if(result >= 0){
      cout<<result<<"\n";
    } else {
      cout<<"MORTAL\n";
    }
    
  }
}