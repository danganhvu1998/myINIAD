#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

const int MAX = 10;
int Sum;

int main(int argc, char const *argv[]){
#pragma omp parallel num_threads(5)
{	
  //(b) ____________
  printf("Hello\n");
  //(c) ____________
}
}