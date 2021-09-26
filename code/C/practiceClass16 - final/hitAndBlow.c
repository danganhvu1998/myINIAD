#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int hitResult[13];
int blowResult[13];
int result[13];
int numIn[15];
int Num[4];
int count = 0;

int check(int num[], int in[]){
  ++count;
  printf("Time: %d Check %d%d%d%d\n", count, in[0], in[1], in[2], in[3]);
  int blow = 0; 
  int hit = 0;
  for(int i=0;i<4;i++){
    hit += (num[i]==in[i]);
  }
  for(int j=0;j<4;j++){
      for(int k=0;k<4;k++){
          blow += (num[j]==in[k]);
      }
  }
  blow = blow - hit;
  //printf("\n**********************\n%d%d%d%d Hit: %d", in[0], in[1], in[2], in[3], hit);
  //printf("  Blow: %d\n**********************\n", blow);
  return hit*10+blow;
}

int main(void){

  int tmp;
  int flag;
  int In[4];
  int hit = 0;
  int blow = 0;
  int tempResult;
  for(int i=0; i<15;i++) numIn[i] = 0;
  while (1){
    printf("Please input 4 numbers:\n");
    scanf("%d", &tmp);
    if (tmp/10000 != 0) continue;
    
    int k = 1000;
    for (int i = 0; i < 4; i++){
      Num[i] = tmp/k;
      tmp %= k;
      k /= 10;
    }

    flag = 0;
    for (int i = 0; i < 3; i++){
      for (int j = i+1; j < 4; j++){
        if (Num[i] == Num[j]){
          flag = 1;
        }
      }
    }
    if (flag == 1) continue;
    else break;
  }

  for(int i=0;i<10;i++){
    for(int j=0;j<4;j++){
      In[j] = (i+j)%10;
    }
    tempResult = check(Num, In);
    result[i] = tempResult;
    hitResult[i] = tempResult/10;
    blowResult[i] = tempResult/10 + tempResult%10;
  }

  for(int I=0; I<100; I++){
    for(int i = 0;i <10;i++){
      int currBlow = blowResult[i];
      int nextBlow = blowResult[(i+1)%10];
      if(currBlow > nextBlow){
        numIn[i] = 1;
      } else if(currBlow < nextBlow){
        numIn[(i+4)%10] = 1;
      } else {
        if(numIn[i]==1 | numIn[(i+4)%10]==1){
          numIn[(i+4)%10] = 1;
          numIn[i]=1;
        }
      }
    }
  }


  for(int I = 0;I <10000;I++){
    tmp = I;
    int k = 1000;
    for (int i = 0; i < 4; i++){
      In[i] = tmp/k;
      tmp %= k;
      k /= 10;
    }

    flag = 0;
    for (int i = 0; i < 3; i++){
      for (int j = i+1; j < 4; j++){
        if (In[i] == In[j]){
          flag = 1;
        }
      }
    }
    if (flag == 1) continue;
    flag = 0;
    for(int i=0;i<4;i++){
      if(numIn[In[i]]==0) flag = 1;
    }
    if (flag == 1) continue;
    if( check(Num, In) == 40 ){
      printf("Number is %d%d%d%d in %d steps", In[0], In[1], In[2], In[3], count);
      break;
    }
  }
}
