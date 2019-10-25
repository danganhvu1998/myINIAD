/* sort_random.c */

#include <stdio.h>
#include <stdlib.h>
#include "sort.h"

int main(int argc, char* argv[]) {
    int length;
    int* list;
    if(argc < 2) {
        return -1;
    }

    length = atoi(argv[1]);
    list = (int*)malloc(sizeof(int) * length);
    for(int i = 0; i < length; i++) {
        list[i] = rand() % 100000;
    }

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