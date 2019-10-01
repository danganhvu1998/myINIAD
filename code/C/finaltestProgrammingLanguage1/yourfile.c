#include <stdio.h>


int main(){
    long * w;
    long * const v;
    w = v;
    *w = 1;
}