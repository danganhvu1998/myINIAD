#include <stdio.h>
#include <stdlib.h>

typedef struct hoge{
  int fuga;
} HOGE;


typedef struct foo{
  HOGE *ppiyo;
} FOO;

int main(void){
  FOO bar;
   bar.ppiyo = malloc(sizeof(HOGE));
   bar.ppiyo->fuga = 3;
   printf("%d", bar.ppiyo->fuga);
}
