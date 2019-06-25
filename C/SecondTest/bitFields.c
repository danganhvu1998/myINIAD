#include <string.h>
#include <stdio.h>

struct bf1{ //cbbb bbbb bbbb bbbb bbbb bbbb bbaa aaaa
    short a:6;
    int b:25;
    int c:1;
} bitField1;

union bf1Reader{
    int intValue;
    struct bf1 bfValue;
} bfReader1;

struct bf2{ //0000 00cc 0bbb bbbb bbbb bbbb bbaa aaaa
    short a:6;
    int b:17;
    char c:2;
} bitField2;

union bf2Reader{
    int intValue;
    struct bf2 bfValue;
} bfReader2;

int main(){
    printf("========================== NO PADDING ==========================\n");
    printf("Size of bf1: %ld\n", sizeof(struct bf1));
    bfReader1.bfValue.a = 0x0f;//00 1111
    bfReader1.bfValue.b = 0x1fffffc;//111 1111 1111 1111 1111 1111 00
    bfReader1.bfValue.c = 0x0;//0
    printf("int Value: %d\n", bfReader1.intValue); 
    //0111 1111 1111 1111 1111 1111 0000 1111 == 2147483407
    //cbbb bbbb bbbb bbbb bbbb bbbb bbaa aaaa
    
    printf("========================== HAS PADDING ==========================\n");
    printf("Size of bf2: %ld\n", sizeof(struct bf2));
    bfReader2.bfValue.a = 0x0f;//00 1111
    bfReader2.bfValue.b = 0x1fffc;//111 1111 1111 1111 1111 1111 00
    bfReader2.bfValue.c = 0x3;//11
    printf("int Value: %d\n", bfReader2.intValue); 
    //0000 0011 0111 1111 1111 1111 0000 1111 == 58720015
    //0000 00cc 0bbb bbbb bbbb bbbb bbaa aaaa
}