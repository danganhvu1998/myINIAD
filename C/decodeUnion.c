#include <stdio.h>
#include <stdlib.h>

int binary[32];
int result=0;

void intToBinary(int intNum){
    int remember = 1;
    if(intNum < 0) {
        binary[0]=1;
        intNum = -intNum;
    } else binary[0]=0;
    for(int i=31;i>0;i--){
        binary[i]=intNum%2;
        intNum/=2;
    }
    if(binary[0]){
        for(int i=31;i>0;i--){
            binary[i] = remember+1-binary[i];
            if(binary[i]==2){
                binary[i]=0;
                remember = 1;
            } else {
                remember = 0;
            }
        }
    }
}

void swap(){
    int tmp;
    for(int i=0;i<16;i++){
        int j = i+16;
        tmp = binary[i];
        binary[i] = binary[j];
        binary[j] = tmp;
    }
    for(int i=8;i<16;i++){
        int j = i+8;
        tmp = binary[i];
        binary[i] = binary[j];
        binary[j] = tmp;
    }
}

void binaryToint(){
    int remember = 1;
    if(binary[0]){
        for(int i=31;i>0;i--){
            binary[i] = remember+1-binary[i];
            if(binary[i]==2){
                binary[i]=0;
                remember = 1;
            } else {
                remember = 0;
            }
        }
    }
    for(int i=1;i<32;i++){
        result = result*2+binary[i];
    }
    if(binary[0]) result = -result;
}

int main(){
    intToBinary(1528104909);
    for(int i=0;i<32;i++){
        if(i%4==0) printf(" ");
        printf("%d", binary[i]);
    } printf("\n\n");
    swap();
    for(int i=0;i<32;i++){
        if(i%4==0) printf(" ");
        printf("%d", binary[i]);
    } printf("\n\n");
    binaryToint();
    printf("\n%d", result);
}
//0101 1011 0001 0101 0000 0111 1100 1101