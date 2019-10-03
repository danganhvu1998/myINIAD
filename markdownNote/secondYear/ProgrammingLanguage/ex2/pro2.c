#include <stdio.h>
#include "ex2_2.h"

int count_m10(gem_t *first, gem_t *end_mark){
    gem_t *run = first;
    int count = 0;
    while (run!=end_mark) {
        if(run->value % 10 == 0) ++count;
        run = run->_next_gem;
    } 
    return count;
}