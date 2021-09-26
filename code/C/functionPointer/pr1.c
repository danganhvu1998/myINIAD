#include <stdio.h>

int is_smaller(int a, int b){
  return a < b;
}

int is_greater(int a, int b){
  return a > b;
}

int search(int A[], int size, int (*callback)(int, int)){
  int value = A[0];
  for (int i = 1; i < size; i++){
    if ((*callback)(A[i], A[i-1])) {
      value = A[i];
    }
  }
  return value;
}

int main(void){
  int A[5] = {3,-1,2,4,-6};
  int size = sizeof(A)/sizeof(A[0]);

  printf("%d\n", search(A, size, is_smaller));
  printf("%d\n", search(A, size, is_greater));
}

