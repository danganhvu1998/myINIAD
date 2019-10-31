/* bubble_sort.c */
#include <stdio.h>
#include "sort.h"

void sort(T *list, int length, Comparefn compare) {
    for(int i = 0; i < length - 1; i++) {
        for(int j = 0; j < length - i - 1; j++) {
            if(compare(list[j], list[j+1])>0) {
                T tmp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tmp;
            }
        }
    }
}

