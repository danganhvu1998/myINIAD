#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

int N = 5;

void work1(){
    printf("\nWORK 1 DESU\n");
}

void work2(){
    printf("\nWORK 2 DESU\n");
}

void test(){
    # pragma omp parallel
    {
        #pragma omp master
        printf("print by %d;  BEGIN work1\n", omp_get_thread_num());
        work1();
        #pragma omp master
        printf("print by %d;  DONE work1\n", omp_get_thread_num());
        #pragma omp master
        printf("print by %d;  DONE work1. START WORK 2\n", omp_get_thread_num());
        work2();
    }
}

int main()
{   
    test();
}