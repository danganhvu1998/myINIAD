#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

/**
 * Sets i-th (0 <= i < 32) bit of data stored at address to 1.
 * addressに格納されているdataのi bit目に1をセットする
 */
void setbit(uint32_t *address, int i) {
    *address = *address|(1<<i);
}

/**
 * Gets i-th (0 <= i < 32) bit of data stored at address.
 * addressに格納されているdataのi bit目を返す
 */
unsigned getbit(uint32_t *address, int i) {
    unsigned res = (*address>>i)&1;
    return res;
}

/**
 * (Optional) Gets j-th~k-th bits.
 * (ja: j番目からk番目のbitを返す)
 * You can assume following restrictions.
 * 1. 0 <= j < 31
 * 2. j <= k < 32
 */
unsigned getbits(uint32_t *address, int j, int k) {
    /* implement here */
}

void printbit(unsigned n) {
    printf("0b");
    for (int i = sizeof(unsigned) * 8 - 1; i >= 0; i--) {
        printf("%d", (n & (1 << i)) != 0);
    }
    printf("\n");
    printf("%x\n", n);
}

int __test_num = 0;

#define test(desc, _c) do { \
    printf("%d - %s: %s\n", ++__test_num, desc, (_c) ? "PASSED" : "FAILED"); \
} while (0)

int main(int argc, char const* argv[])
{
    unsigned data = 0x0a0a0a0a;
    printbit(data);
    setbit(&data, 0);
    test("setbit 0", data == 0x0a0a0a0b /*== 0b00001010000010100000101000001011*/);
    setbit(&data, 0);
    test("do nothing if already set bit",
         data == 0x0a0a0a0b /*== 0b00001010000010100000101000001011*/);
    test("getbit 0",
         getbit(&data, 0) == 1 /*== 0b00000000000000000000000000000001*/);

    test("getbits 3, 10",
         getbits(&data, 3, 10) == 0x00000208 /*== 0b00000000000000000000001000001000 */);
    return 0;
}