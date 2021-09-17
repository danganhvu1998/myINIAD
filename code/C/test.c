#include <stdio.h>

int main(){
    int num = 321;
    char snum[5];

    // convert 123 to string [buf]
    itoa(num, snum, 10);

    // print our string
    printf("%s\n", snum);
}