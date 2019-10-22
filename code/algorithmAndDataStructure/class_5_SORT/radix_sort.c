/* radix_sort.c */

#include <stdlib.h>
#include "sort.h"

void sort(int *list, int length) {
    int* work = (int *)malloc(sizeof(int) * length);
    int place = 1;

    int max = 0;
    for(int i = 0; i < length; i++) {
        if(list[i] > max) {
            max = list[i];
        }
    }

    while(place < max) {
        int n = 0;
        for(int i = 0; i < 10; i++) {
            for(int j = 0; j < length; j++) {
                int digit = (list[j] / place) % 10;
                if(digit == i) {
                    work[n] = list[j];
                    n++;
                }
            }
        }

        for(int i = 0; i < length; i++) {
            list[i] = work[i];
        }

        place *= 10;
    }

    free(work);
}
