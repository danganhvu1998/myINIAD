#include <stdio.h>
#include <stdlib.h>

int main(void){
    int n=20;
    int *fibo;
    fibo = malloc(sizeof(int)*(n+1));
    fibo[0]=0;
    fibo[1]=1;
    for(int i = 2; i <= n; i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
        printf("%d %d\n", i, fibo[i]);
    }
    free(fibo);
}
