#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int Random(int minvalue, int maxvalue){
  static int RAND_SEED_FLAG;
  if (RAND_SEED_FLAG == 0){
    srand((unsigned int)time(NULL));
    RAND_SEED_FLAG = 1;
  }
  return minvalue + (int)(rand()*(maxvalue - minvalue + 1.0)/(1.0 + RAND_MAX));
}

int Num[4];
void create_random(){
  Num[0] = Random(0,9);
  int flag;
  for (int i = 1; i < 4; i++){
    while(1){
      int flag = 0;
      int tmp = Random(0,9);
      for (int j = 0; j < i; j++){
        if (tmp == Num[j]){
          flag = 1;
        }
      }
      if (flag == 0){
        Num[i] = tmp;
        break;
      }
    }
  }
}


int main(void){
  create_random();

  int tmp;
  int flag;
  int In[4];
  int hit = 0;
  int blow = 0;
  while (1){
    printf("Please input 4 numbers:\n");
    scanf("%d", &tmp);
    if (tmp/10000 != 0) continue;
    
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

/*** Add a program to count the number of hits and blows here ***/
    for(int i=0;i<4;i++){
        hit += (Num[i]==In[i]);
        //printf("HIT %d %d %d %d %d\n", i,i,Num[i], In[i], hit);
    }
    for(int j=0;j<4;j++){
        for(int k=0;k<4;k++){
            blow += Num[j]==In[k];
            //printf("BLO %d %d %d %d %d\n", j,k,Num[j], In[k], blow);
        }
    }
    blow = blow - hit;

/****************************************************************/

    printf("Hit: %d", hit);
    printf("  Blow: %d\n", blow);

    if (hit == 4) break;

    hit = 0;
    blow = 0;
  }

}
