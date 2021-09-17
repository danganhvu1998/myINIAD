#include <stdio.h>
#include "cmplx.h"

#define Arow 5
#define Acol 3
#define Brow 3
#define Bcol 5
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

  for (int i = 0; i < Arow; i++ ){
    for (int j = 0; j < Bcol; j++ ){
      for (int k = 0; k < Acol; k++ ){
		//C[i+j*3] = C[i+j*3]+A[i+k*3]*B[k+j*3];
        C[i+Arow*j] = add_cmplx(C[i+Arow*j], mul_cmplx(A[i+Arow*k],B[k+Brow*j]));
      }
    }
  }

  printmat(A, Arow, Acol);
  printmat(B, Brow, Bcol);
  printmat(C, Arow, Bcol);
}
