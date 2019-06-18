#include <stdio.h>
#include <stdlib.h>

int my_add(int, int);
int my_sub(int, int);
int my_mul(int, int);
int my_div(int, int);

typedef int (*CalcFunc)(int a, int b);

int BUFSIZE = 10;

int main() {
    CalcFunc operations[255];
    operations['+'] = my_add;
    operations['-'] = my_sub;
    operations['*'] = my_mul;
    operations['/'] = my_div;
    char buf[BUFSIZE];

    printf("\nInput operation (+,-,*,/): ");
    fread(buf, sizeof(char), 1, stdin);

    int op  = buf[0]; // implicit conversion, 暗黙的型変換
    //printf("OP = %d", op);
    int val1 = 100;
    int val2 = 200;
    printf("\n%d %c %d = %d \n", val1, op, val2, operations[op](val1,val2));
}

int my_add(int val1, int val2){
    return val1 + val2;
}
int my_sub(int val1, int val2){
    return val1 - val2;
}
int my_mul(int val1, int val2){
    return val1 * val2;
}
int my_div(int val1, int val2){
    return (val1 / val2);
}