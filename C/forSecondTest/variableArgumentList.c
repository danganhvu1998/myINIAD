#include <stdio.h>
#include <stdarg.h>

int sumAll(int varCount, ...){
    int result = 0;
    va_list va;
    va_start(va, varCount);
    for(int i=0; i<varCount;i++){
        result = result+va_arg(va, int);
    }
    return result;
}

int main(){
    int sum = sumAll(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    printf("%d", sum);
}