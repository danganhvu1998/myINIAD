/* sort_test.c */

#include <stdio.h>
#include "sort.h"

int list[] = {6,2,8,3,4,1,10,5,7,9};

int main(int argc, char* argv[]) {
    int length = sizeof(list) / sizeof(int);

    printf("Before: ");
    for(int i = 0; i < length; i++) {
        if(i != length - 1) {
            printf("%d ", list[i]);
        } else {
            printf("%d\n", list[i]);
        }
    }

    sort(list, length);

    printf("After: ");
    for(int i = 0; i < length; i++) {
        if(i != length - 1) {
            printf("%d ", list[i]);
        } else {
            printf("%d\n", list[i]);
        }
    }

    return 0;
}