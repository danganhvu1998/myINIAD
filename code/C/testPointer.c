#include <stdio.h>

int main(){
    char iniad[5] = "INIAD";
    char *p1 = iniad;
    char *p2 = &iniad[2];
    printf("%s\n", iniad);
    printf("%s\n", p1);
    printf("%s\n", p2);
}