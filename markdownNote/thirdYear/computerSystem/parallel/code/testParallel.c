#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

int N = 5;

void test(){
    # pragma omp parallel
    {
        for(int i = 1; i <=N; i++){
            printf("Hello\n");
        }
    }
}

void test1(){
    int i;
    # pragma omp parallel for
    for(i = 1; i <=N; i++){
        printf("Hello\n");       
    }
}

int main()
{   
    test();
    printf("\n\n\n");
    test1();
}