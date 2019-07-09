#include <stdio.h>
#include "atnd13.h"


long count_64m(FILE *fp){
    char ch[1000005];
    long result = 0;
    while(1){
        int n = fread(ch, sizeof(char), 1000000, fp );
        if(n==0) break;
        for(int i=0;i<n;i++){
            if(ch[i]%64==0) ++result;
        }
    }
    return result;
}