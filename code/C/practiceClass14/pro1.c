#include <stdio.h>

void printBit(unsigned int n){
    int save[40], curr=31;
    for(int i=0;i<32;i++){
        save[curr] = n&1;
        n>>=1;
        curr--;
    }
    for(int i=0;i<32;i++){
        printf("%d", save[i]);
    }
}

void checkbit(unsigned int c, unsigned int offset){
    unsigned int check = 1<<(offset-1);
    printf("%d", 0!=(c&check));
}

void setbit(unsigned int c, unsigned int offset){
    unsigned int check = 1<<(offset-1);
    printBit(c|check);
}

void clearbit(unsigned int c, unsigned int offset){
    unsigned int check = 1<<(offset-1);
    check = ~check;
    printBit(c&check);
}

int main(){
    clearbit(21, 5);
}