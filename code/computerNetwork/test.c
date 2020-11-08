#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

const int MAX = 10;
int Sum;

int main(int argc, char const *argv[]){
int n = atoi(argv[1]);
  int A[MAX], B[MAX], C[MAX];

  for (int i = 0; i < n; i++){
    B[i] = (i+1)%MAX;
    C[i] = (i+1)%MAX;
  }
	
// Begin Section B
#pragma omp parallel
{
 #pragma omp sections
 {
  #pragma omp section
  for (int i = 0; i < n; i++){
    A[i] = B[i] * C[i];
    printf("A[%d]:%d\n", i, A[i]);
  }
  
  #pragma omp section
  for (int i = 0; i < n; i++){
    A[i] = B[i] + C[i];
    printf("A[%d]:%d\n", i, A[i]);
  }
	
 }// End of sections structure 
}//End of parallel strucutre
// End Section B
	
  return 0;
}