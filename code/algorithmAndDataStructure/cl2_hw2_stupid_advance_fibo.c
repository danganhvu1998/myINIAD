#include <stdio.h>

typedef struct _matrix {
  long long num_row, num_col;
  long long value[15][15];
} matrix;

matrix multiple(matrix A, matrix B){
  matrix C;
  long long under_calculation_cell_value;
  C.num_row = A.num_row;
  C.num_col = B.num_col;
  for(long long i=0; i<C.num_row; i++){
    for(long long j=0; j<C.num_col; j++){
      under_calculation_cell_value = 0;
      for(long long k=0; k<A.num_col; k++){
        under_calculation_cell_value += A.value[i][k]*B.value[k][j];
      }
      C.value[i][j] = under_calculation_cell_value;
    }
  }
  return C;
}

matrix power_easy(matrix A, long long pow){
  matrix Ans = A;
  for(long long i=1; i<pow; i++){
    Ans = multiple(Ans, A);
  }
  return Ans;
}

matrix power_symmetric_matrix(matrix A, long long pow){
  matrix Matrix_power_2_power[15], Ans = A;
  Matrix_power_2_power[0] = A;
  long long current_2_power_value = 1024;
  pow--;
  for(long long i=1; i<15; i++){
    Matrix_power_2_power[i] = multiple(Matrix_power_2_power[i-1], Matrix_power_2_power[i-1]);
  }
  for(long long i=10; i>=0; i--){
    if(pow>=current_2_power_value){
      Ans = multiple(Ans, Matrix_power_2_power[i]);
      pow-= current_2_power_value;
    }
    current_2_power_value/=2;
  }
  return Ans;
}

void matrix_printer(matrix A){
  printf("---------------------\n");
  for(long long i=0; i<A.num_row; i++){
    for(long long j=0; j<A.num_col; j++){
      printf("%lld ", A.value[i][j]);
    }
    printf("\n");
  }
  printf("---------------------\n");
}

long long fibo(long long n){
  if(n == 1) return 0;
  if(n <= 3) return 1;
  matrix A, B;
  A.num_col = 2;
  A.num_row = 2;
  A.value[0][0] = 1;
  A.value[0][1] = 1;
  A.value[1][0] = 1;
  A.value[1][1] = 0;
  B.num_row = 2;
  B.num_col = 1;
  B.value[0][0] = 1;
  B.value[1][0] = 1;
  return multiple(power_symmetric_matrix(A, n-3), B).value[0][0];
  
}

int main(){
  printf("%lld", fibo(15));
}