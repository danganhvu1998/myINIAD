#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <omp.h>

#define SIZE 25
#define Block 64
#define N (Block * SIZE)

int Random(int minvalue, int maxvalue)
{
  static int RAND_SEED_FLAG;
  if (RAND_SEED_FLAG == 0)
  {
    srand((unsigned int)time(NULL));
    RAND_SEED_FLAG = 1;
  }
  return minvalue + (int)(rand() * (maxvalue - minvalue + 1.0) / (1.0 + RAND_MAX));
}

double *create_matrix()
{
  double *A = malloc(sizeof(double) * N * N);
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      A[i + N * j] = Random(-20, 20);
    }
  }
  return A;
}

void print(double *A)
{
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      printf("%lf, ", A[i + N * j]);
    }
    printf("\n");
  }
}

double *matmul1(double *A, double *B)
{
  double *C = malloc(sizeof(double) * N * N);
  clock_t start, end;

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      C[i + N * j] = 0.0;
    }
  }

  start = clock();

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      for (int k = 0; k < N; k++)
      {
        C[i + N * k] += A[i + N * j] * B[j + N * k];
      }
    }
  }

  end = clock();
  printf("matmul1: Excution Time: %lf [sec]\n", (double)(end - start) / CLOCKS_PER_SEC);

  return C;
}

double *matmul2(double *A, double *B)
{
  double *C = malloc(sizeof(double) * N * N);
  clock_t start, end;

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      C[i + N * j] = 0.0;
    }
  }

  start = clock();

  for (int k = 0; k < N; k++)
  {
    for (int i = 0; i < N; i++)
    {
      for (int j = 0; j < N; j++)
      {
        C[i + N * k] += A[i + N * j] * B[j + N * k];
      }
    }
  }

  end = clock();
  printf("matmul2: Excution Time: %lf [sec]\n", (double)(end - start) / CLOCKS_PER_SEC);

  return C;
}

double *matmul3(double *A, double *B)
{
  double *C = malloc(sizeof(double) * N * N);
  double start, end;

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < N; j++)
    {
      C[i + N * j] = 0.0;
    }
  }

  start = omp_get_wtime();
  #pragma omp parallel for
  for (int k = 0; k < N; k++)
  {
    for (int i = 0; i < N; i++)
    {
      for (int j = 0; j < N; j++)
      {
        C[i + N * k] += A[i + N * j] * B[j + N * k];
      }
    }
  }

  end = omp_get_wtime();
  printf("matmul3: Excution Time: %lf [sec]\n", end - start );

  return C;
}

double* matmul4(double* A, double *B){
  double* C = malloc(sizeof(double)*N*N);
  double start, end;

  for (int i = 0; i < N; i++){
    for (int j = 0; j < N; j++){
      C[i + N*j] = 0.0;
    }
  }

  start = omp_get_wtime();

  #pragma omp parallel for
  for (int k = 0; k < N; k++){
    for (  int i = 0; i < N; i+=4){	
      for ( int j = 0; j < N; j+=4 ){
        C[i+ N*k] += A[i+N*j]*B[j+N*k];
        C[i+ N*k] += A[i+N*(j+1)]*B[(j+1)+N*k];
        C[i+ N*k] += A[i+N*(j+2)]*B[(j+2)+N*k];
        C[i+ N*k] += A[i+N*(j+3)]*B[(j+3)+N*k];

        C[i+1+ N*k] += A[i+1+N*j]*B[j+N*k];
        C[i+1+ N*k] += A[i+1+N*(j+1)]*B[(j+1)+N*k];
        C[i+1+ N*k] += A[i+1+N*(j+2)]*B[(j+2)+N*k];
        C[i+1+ N*k] += A[i+1+N*(j+3)]*B[(j+3)+N*k];

        C[i+2+ N*k] += A[i+2+N*j]*B[j+N*k];
        C[i+2+ N*k] += A[i+2+N*(j+1)]*B[(j+1)+N*k];
        C[i+2+ N*k] += A[i+2+N*(j+2)]*B[(j+2)+N*k];
        C[i+2+ N*k] += A[i+2+N*(j+3)]*B[(j+3)+N*k];

        C[i+3+ N*k] += A[i+3+N*j]*B[j+N*k];
        C[i+3+ N*k] += A[i+3+N*(j+1)]*B[(j+1)+N*k];
        C[i+3+ N*k] += A[i+3+N*(j+2)]*B[(j+2)+N*k];
        C[i+3+ N*k] += A[i+3+N*(j+3)]*B[(j+3)+N*k];
      }
    }
  }

  end = omp_get_wtime();
  printf("matmul4: Excution Time: %lf [sec]\n", end - start );
  
  return C;
}


int main(void){
  double* A = create_matrix();
  double* B = create_matrix();

//  print(A);
//  print(B);

  double* C1 = matmul1(A, B);
//  print(C1);

  double* C2 = matmul2(A, B);
//  print(C2);

  double* C3 = matmul3(A, B);
//  print(C3);

  double* C4 = matmul4(A, B);
//  print(C4);

  free(A);
  free(B);
  free(C1);
  free(C2);
  free(C3);
  free(C4);	
}
