#include <stdio.h>
#include "ex3_3.h"

long my_find(FILE *fp, char v){
    long countResult = -1;
    unsigned char ch[1000005];
    while(1){
        int n = fread(ch, sizeof(char), 1, fp );
        if(n==0) break;
        for(int i=0;i<n;i++){
            ++countResult;
            if(ch[i]==v) {
                printf("%ld\n", countResult);
                return countResult;
            }
        }
    }
    return -1;
}