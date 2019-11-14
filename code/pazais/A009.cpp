#include <bits/stdc++.h>
using namespace std;

string mirrorMap[105];
int result = 0;
int N, M;

void run(int direct, int currX, int currY){
  //cout<<currX<<" "<<currY<<" "<<direct<<" -"<<mirrorMap[currX][currY]<<"-\n";
  if(currX<0) return;
  if(currY<0) return;
  if(currX>=N) return;
  if(currY>=M) return;
  ++result;
  if(mirrorMap[currX][currY] == '/'){
    if(direct == 1) direct = 0;
    else if(direct == 0) direct = 1;
    else if(direct == 3) direct = 2;
    else if(direct == 2) direct = 3;
  } else if(mirrorMap[currX][currY] == '\\'){
    if(direct == 1) direct = 2;
    else if(direct == 0) direct = 3;
    else if(direct == 3) direct = 0;
    else if(direct == 2) direct = 1;
  } else {
    direct = direct;
  }
  int nextX=currX, nextY=currY;
  if(direct == 0){
    nextX--;
  } else if(direct==1){
    nextY++;
  } else if(direct==2){
    nextX++;
  } else {
    nextY--;
  }
  run(direct, nextX, nextY);
}

int main(){
  //freopen("test.txt","r",stdin);
  cin>>N>>M;
  for(int i=0; i<N; i++){
    cin>>mirrorMap[i];
  }
  run(1, 0, 0);
  cout<<result;
}