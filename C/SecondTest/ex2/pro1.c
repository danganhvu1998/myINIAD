#include <stdio.h>
#include "ex2_1.h"

long my_sum(int n, long *array){
    long sum = 0;
    for(int i=0;i<n;i++){
        sum += array[i];
    }
    return sum;
}
