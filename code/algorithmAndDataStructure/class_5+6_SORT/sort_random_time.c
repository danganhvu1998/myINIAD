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
    for(int i = 0; i < 100; i++) {
        list = (int*)malloc(sizeof(int) * length);
        for(int i = 0; i < length; i++) {
            list[i] = rand() % 100000;
        }
        
        sort(list, length);
    }
    
    return 0;
}