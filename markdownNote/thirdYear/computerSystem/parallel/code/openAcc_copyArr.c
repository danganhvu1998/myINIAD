#include <stdio.h>
#include <time.h>


int const arrSize = 1e7;

int main(){
    clock_t startClock, endClock;
    int B[arrSize], A[arrSize];
    startClock = clock();
    for(int i=0; i<arrSize; i++){
        A[i] = i*i;
    }
    endClock = clock();
    printf("Work %ld clock\n\n\n",endClock - startClock);
    for(int i=0; i<arrSize; i++){
        B[i] = A[i];
    }
    startClock = clock();
    #pragma acc kernels
    for(int i=0; i<arrSize; i++){
        B[i] = A[i];
    }
    endClock = clock();
    printf("Work %ld clock\n\n\n",endClock - startClock);
}