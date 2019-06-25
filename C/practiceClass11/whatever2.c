#include <stdio.h>

int min(int A[], int size){
  int value = A[0];
  for (int i = 1; i < size; i++){
    if ( value>A[i] ) {
      value = A[i];
    }
  }
  return value;
}

int max(int A[], int size){
  int value = A[0];
  for (int i = 1; i < size; i++){
    if ( value<A[i] ) {
      value = A[i];
    }
  }
  return value;
}

int main(void){
  int A[5] = {3,-1,2,4,-6};
  int size = sizeof(A)/sizeof(A[0]);

  printf("%d\n", min(A, size));
  printf("%d\n", max(A, size));
}
