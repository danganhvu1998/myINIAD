#include <stdio.h>

int fiboList[100];

int fibo(int pos){
    if(fiboList[pos]!=0){
        return fiboList[pos];
    } else if(pos < 2){
        return pos;
    } else {
        return fibo(pos-1)+fibo(pos-2);
    }
}

int main(){
    for(int i=0;i<100;i++){
        fiboList[i]=0;
    }
    printf("%d",fibo(5));
}