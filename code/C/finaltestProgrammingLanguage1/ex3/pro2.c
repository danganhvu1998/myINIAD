#include <stdio.h>
#include "ex3_2.h"

node_t *my_at(node_t *top, node_t *end, int i){
    int curr = 0;
    node_t *currNote = top;
    while (1)
    {
        if(curr == i){
            return currNote;
        }
        if(currNote == end){
            return currNote;
        }
        curr ++;
        currNote = currNote->next;
    }
    return currNote;
}
