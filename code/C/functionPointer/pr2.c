#include <stdio.h>

int add(int, int);
int sub(int, int);
int mul(int, int);
int div(int, int);

int main() {
    int a = 10;
    int b = 3;
    int func_num = 0;
    int (*my_func_list[])(int, int) = {add, sub, mul, div};

    for (func_num=0; func_num<4; func_num++) {
        printf("a=%d, b=%d, func_num=%d, result: %d\n", a, b, func_num, my_func_list[func_num](a, b));
    }
}

int add(int val1, int val2){
    return val1 + val2;
}
int sub(int val1, int val2){
    return val1 - val2;
}
int mul(int val1, int val2){
    return val1 * val2;
}
int div(int val1, int val2){
    return (val1 / val2);
}
