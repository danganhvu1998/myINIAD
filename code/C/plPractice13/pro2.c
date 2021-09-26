#include <stdio.h>
#include "cmplx.h"

#define Arow 3
#define Acol 3
#define Brow 3
#define Bcol 3
cmplx A[Arow*Acol]; // 3*3 matrix
cmplx B[Brow*Bcol]; // 3*3 matrix
cmplx C[Arow*Bcol]; // 3*3 matrix

void printmat(cmplx A[], int n, int m){
  for (int i = 0; i < n; i++){
    for (int j = 0; j < m; j++){
      printf("%lf+i*%lf ", A[i + n*j].real, A[i+n*j].imag);
    }
      printf("\n");
  }
}

int main(void){
  for (int i = 0; i < Arow*Acol; i++){
    A[i].real = i;
    B[i].real = i;
    A[i].imag = i;
    B[i].imag = i;
  }

  for (int i = 0; i < 3; i++ ){
    for (int j = 0; j < 3; j++ ){
      for (int k = 0; k < 3; k++ ){
        C[i+Arow*j] = add_cmplx(C[i+Arow*j], mul_cmplx(A[i+Arow*k],B[k+Brow*j]));
      }
    }
  }

  printmat(A, 3, 3);
  printmat(B, 3, 3);
  printmat(C, 3, 3);
}
