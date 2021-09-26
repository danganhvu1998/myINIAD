#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <time.h>

int test0() {
    printf("TEST 0\n");
	#pragma omp for
    for(int n=0; n<5; ++n){
        printf(" %d", n*3);
        printf(" %d", n*3+1);
        printf(" %d", n*3+2);
    }
    printf("\nTEST 0 DONE\n\n");
}

int test1() {
    printf("TEST 1\n");
	#pragma omp parallel for
    for(int n=0; n<5; ++n){
        printf(" %d", n*3);
        printf(" %d", n*3+1);
        printf(" %d", n*3+2);
    }
    printf("\nTEST 1 DONE\n\n");
}

int main(){
    test0();
    test1();
}