#include <stdio.h>
#include "lib.h"
#include "lib.c"

int main(){
    result A,B,C;
    changeName(&A, "conamxau");
    changeScore(&A, 100);
    printResult(&A);
}