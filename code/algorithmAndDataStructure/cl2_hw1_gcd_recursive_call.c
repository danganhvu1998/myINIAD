#include<stdio.h>

unsigned int gcd(unsigned int a, unsigned int b){
    unsigned int temporary_value;
    if( a%b==0 ) return b;
    return gcd(b, a%b);
}

int main(){
    printf("%d\n", gcd(15,10));
}
