#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <omp.h>

int main() {
	int *arr;
    arr = (int*) malloc(10000 * sizeof(int));
    for(int i=0; i<10000; i++) printf("%d\n", arr[i]);
}
// https://www.geeksforgeeks.org/dynamically-allocate-2d-array-c/