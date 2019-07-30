#include <stdio.h>
#include "ex3_1.h"

void my_setarr(long *array, int n, int m){
    for(int i=0;i<n;i++){
        array[i] = (i+1)*m;
    }
}
