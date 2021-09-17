#include <stdio.h>
#include "ex1_2.h"

int count_m10(int *arr, int n){
    int result = 0;
    for(int i=0; i<n;i++){
        if(arr[i]%10==0) ++result;
    }
    return result;
}