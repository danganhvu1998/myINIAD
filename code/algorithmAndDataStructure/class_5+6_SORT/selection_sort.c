/* selection_sort.c */
#include <stdio.h>
#include "sort.h"

void sort(T *list, int length, Comparefn compare) {
    for(int i = 0; i < length; i++) {
        int min_index = i;
        for(int j = i + 1; j < length; j++) {
            if(compare(list[j], list[min_index])<0) {
                min_index = j;
            }
        }
        T tmp = list[i];
        list[i] = list[min_index];
        list[min_index] = tmp;
    }
}
