/* quick_sort.c */
#include <stdio.h>
#include "sort.h"

int find_pivot(int *list, int start, int end, int *pivot) {
    int first = list[start];
    for(int i = start + 1; i <= end; i++) {
        if(first < list[i]) {
            *pivot = list[i];
            return 1;
        } else if(first > list[i]) {
            *pivot = first;
            return 1;
        }
    }
    return 0;
}

int partition(int *list, int left, int right, int pivot) {
    for(;;) {
        while(list[left] < pivot) {
            left++;
        }
        while(list[right] >= pivot) {
            right--;
        }
        if(left >= right) {
            break;
        }
        
        int tmp = list[left];
        list[left] = list[right];
        list[right] = tmp;
        left++;
        right--;
    }

    return left;
}

void quick_sort(int *list, int start, int end, int list_length) {
    int pivot;
    if(! find_pivot(list, start, end, &pivot)) {
        return;
    }

    int p = partition(list, start, end, pivot);

    quick_sort(list, start, p - 1, list_length);
    quick_sort(list, p, end, list_length);
    for(int i=0; i<list_length; i++){
        printf("%d, ", list[i]);
    }
    printf("\n");
}

void sort(int *list, int length) {
    quick_sort(list, 0, length - 1, length);
}
