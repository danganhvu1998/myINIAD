#include <bits/stdc++.h>
using namespace std;

int needTwoMove[10];
int N, lassFace;
int result = 0;

void run(int currFace){
  if(needTwoMove[currFace] == lassFace) result+=2;
  else if(currFace == lassFace) result+=0;
  else result+=1;
  lassFace = currFace;
}

int main(){
  //freopen("test.txt","r",stdin);
  int avgA, avgB;
  for(int i=0;i<3;i++){
    cin>>avgA>>avgB;
    needTwoMove[avgA] = avgB;
    needTwoMove[avgB] = avgA;
  }
  cin>>N;
  cin>>lassFace;
  for(int i=1; i<N; i++){
    cin>>avgA;
    run(avgA);
  }
  cout<<result;
}