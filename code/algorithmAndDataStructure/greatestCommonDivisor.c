#include<stdio.h>

unsigned int gcd(unsigned int a, unsigned int b){
    unsigned int temporary_value;
    while(1){
        if(a<b){
            temporary_value = a;
            a = b;
            b = temporary_value;
        }
        if( a%b==0 ) return b;
        a = a%b;
    }
    return 1;
}

int main(){
    printf("%d\n", gcd(15,10));
}