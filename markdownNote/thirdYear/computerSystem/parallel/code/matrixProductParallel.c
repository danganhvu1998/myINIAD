#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <omp.h>
#include <time.h>


int MATRIX_SIZE = 64;

int matrixPosVal(int *matrix, int x, int y){
    return matrix[MATRIX_SIZE*x+y];
}

void matrixSetVal(int *matrix, int x, int y, int val){
    matrix[MATRIX_SIZE*x+y] = val;
}

void matrixPrint(int *matrix){
    printf("START PRINTING ____\n");
    for(int i=0; i<MATRIX_SIZE; i++){
        for(int j=0; j<MATRIX_SIZE; j++){
            printf("%10d | ", matrixPosVal(matrix, i, j));
        }
        printf("\n");
    }
    printf("DONE PRINTING ____\n");
}

void randMatrix(int *matrix){
    for(int i=0; i<MATRIX_SIZE; i++){
        for(int j=0; j<MATRIX_SIZE; j++){
            matrixSetVal(matrix, i, j, rand() % 100);
        }
    }
}

void mulMatrix(int *A, int *B, int *C){
    # pragma omp parallel for
    for(int i=0; i<MATRIX_SIZE; i++){
        # pragma omp parallel for
        for(int j=0; j<MATRIX_SIZE; j++){
            int posVal = 0;
            # pragma omp parallel for
            for(int k=0; k<MATRIX_SIZE; k++){
                posVal += matrixPosVal(A, i, k) * matrixPosVal(B, k, j);
            }
            matrixSetVal(C, i, j, posVal);
        }
    }
}


int main(int argc, char *argv[]) {
    if( argc>1 ) MATRIX_SIZE = atoi(argv[1]);
    printf("MATRIX SIZE: %d\n", MATRIX_SIZE);
	int *A, *B, *C;
    A = (int*) malloc( MATRIX_SIZE*MATRIX_SIZE*sizeof(int));
    B = (int*) malloc( MATRIX_SIZE*MATRIX_SIZE*sizeof(int));
    C = (int*) malloc( MATRIX_SIZE*MATRIX_SIZE*sizeof(int));
    randMatrix(A); randMatrix(B);
    double start = omp_get_wtime(); 
    clock_t startClock = clock();
    mulMatrix(A, B, C);
    double end = omp_get_wtime();
    clock_t endClock = clock();
    printf("Work took %f seconds, in %ld clock\n", end - start, endClock - startClock);
}