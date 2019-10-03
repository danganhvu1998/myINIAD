#include <stdio.h>

int main(){
    int a = 1;
    int v = -1;
    switch(a) {
    case 0:
        v = 0;
        break;
    case 1:
    case 2:
        v = 2;
    default:
        v = 3;
    }
    printf("%d", v);
}