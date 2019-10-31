#include <stdio.h>

unsigned checkbit(unsigned value, int offset) {
    return value&(1<<(offset));
}

/**
 * Sets the bit at offset in the value.
 */
unsigned setbit(unsigned value, int offset) {
    return value|1<<(offset);
}

/**
 * Clears the bit at offset in the value.
 */
unsigned clearbit(unsigned value, int offset) {
    return value&~(1<<(offset));
}

void printbit(unsigned n) {
    printf("0b");
    for (int i = sizeof(unsigned) * 8 - 1; i >= 0; i--) {
        printf("%d", checkbit(n, i));
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
    unsigned bits = 0xa0a0a0a;

    bits = setbit(bits, 0);
    test("setbit 0", bits == 0x0a0a0a0b /*== 0b00001010000010100000101000001011*/);

    bits = setbit(bits, 1);
    test("do nothing if already set bit",
         bits == 0x0a0a0a0b /*== 0b00001010000010100000101000001011*/);

    bits = setbit(bits, sizeof(unsigned) * 8 - 1);
    test("setbit 31",
         bits == 0x8a0a0a0b /*== 0b10001010000010100000101000001011*/);

    bits = clearbit(bits, 3);
    test("clearbit 3",
         bits == 0x8a0a0a03 /*== 0b10001010000010100000101000000011*/);

    bits = clearbit(bits, 31);
    test("clearbit 31",
         bits == 0x0a0a0a03 /*== 0b00001010000010100000101000000011*/);

    bits = clearbit(bits, 31);
    test("do nothing if already clear bit",
         bits == 0x0a0a0a03 /*== 0b00001010000010100000101000000011*/);
    return 0;
}