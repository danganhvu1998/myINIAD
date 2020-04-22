#include <stdio.h>

int main(int argc, char const* argv[]){
  int value = 0xffffffff;
  value = value & ~( (1<<5)|(1<<7) );
  if( (value&5<<5)==0 ){
    printf("PASS\n");
  } else {
    printf("FAIL\n");
  }
}
