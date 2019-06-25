#include <string.h>
#include <stdio.h>


struct bf1{ //0000 0000 cccc cccc 0000 000b bbbb bbbb 0000 000a aaaa aaaa
    short a:9;
    short b:9;
    char c;
} bitField1;

union bf1Reader{
    long int intValue;
    struct bf1 bfValue;
} bfReader1;

#pragma pack(1)
struct bf2{ //cccc cccc 0000 00bb bbbb bbba aaaa aaaa
    short a:9;
    short b:9;
    char c;
} bitField2;
#pragma pack()

union bf2Reader{
    int intValue;
    struct bf2 bfValue;
} bfReader2;

int main(){
    printf("========================== NOT PACKED ==========================\n");
    printf("Size of bf1: %ld\n", sizeof(struct bf1));
    bfReader1.bfValue.a = 0x0ff;//0 1111 1111 
    bfReader1.bfValue.b = 0x0ff;//011 1111 111
    bfReader1.bfValue.c = 0x0f;//0000 1111
    printf("int Value: %ld\n", bfReader1.intValue); 
    //0000 0000 0000 0000 0000 0000 0000 1111 0000 0000 1111 1111 0000 0000 1111 1111
    //____ ____ ____ ____ 0000 0000 cccc cccc 0000 000b bbbb bbbb 0000 000a aaaa aaaa

    printf("========================== PACKED ==========================\n");
    printf("Size of bf2: %ld\n", sizeof(struct bf2));
    bfReader2.bfValue.a = 0x0ff;//0 1111 1111 
    bfReader2.bfValue.b = 0x0ff;//011 1111 111
    bfReader2.bfValue.c = 0x0f;//0000 1111
    printf("int Value: %d\n", bfReader2.intValue); 
    //0000 1111 0000 0001 1111 1110 1111 1111 == 251789055
    //cccc cccc 0000 00bb bbbb bbba aaaa aaaa
}