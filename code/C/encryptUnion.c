#include<stdio.h>

union tmp{
        short s;
        char c[2];
};
union crypt{
        int i;
        union tmp t[2];
};

int binary[32];

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

int main(void){
        union crypt A;
        union tmp t;

        A.i = 1527190989;
        intToBinary(A.i);
        for(int i=0;i<32;i++){
            if(i%4==0) printf(" ");
            printf("%d", binary[i]);
        } printf("\n\n");
        t.s = A.t[0].s;
        A.t[0].s = A.t[1].s;
        A.t[1].s = t.s;
        t.c[0] = A.t[0].c[0];
        A.t[0].c[0] = A.t[1].c[1];
        A.t[1].c[1] = t.c[0];
        intToBinary(A.i);
        for(int i=0;i<32;i++){
            if(i%4==0) printf(" ");
            printf("%d", binary[i]);
        } printf("\n\n");
        printf("%d\n",A.i);
}
