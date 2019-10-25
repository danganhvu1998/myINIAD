/* selection_sort.c */
#include <stdio.h>
#include "sort.h"

void sort(int *list, int length) {
    for(int i = 0; i < length; i++) {
        int min_index = i;
        for(int j = i + 1; j < length; j++) {
            if(list[j] < list[min_index]) {
                min_index = j;
            }
        }
        int tmp = list[i];
        list[i] = list[min_index];
        list[min_index] = tmp;
        for(int k=0; k<length; k++){
            printf("%d, ", list[k]);
        }
        printf("\n");
    }
}
