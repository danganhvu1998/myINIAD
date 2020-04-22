#include <stdio.h>

int main(int argc, char const* argv[]){
  int a=1, b=2;
  int *p_a, *p_b;
  p_a = &a;
  p_b = &b;
  printf("a=%d, b=%d\n", *p_a, *p_b);
}
