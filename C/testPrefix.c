#include <stdio.h>

int main() {
    long i1 = -111;
    long i2 = -333;
    long *p_i1 = &i1;
    long *p_i2 = &i2;
    printf("p_i1 %p\n", p_i1);
    printf("p_i2 %p\n", p_i2);
}
