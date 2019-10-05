/* purge.c */

#include <stdio.h>
#include <stdlib.h>
#include "array_list.h"

void purge(LIST lst){
    POSITION p = list_first(lst);
    while(p != list_last(lst)) {
        POSITION q = list_next(lst, p);
        while(q != list_last(lst)) {
            if(list_retrieve(lst, p) == list_retrieve(lst, q)) {
                list_delete(lst, q);
            } else {
                q = list_next(lst, q);
            }
        }
        p = list_next(lst, p);
    }
}

int main(int argc, char* argv[]) {
    LIST lst = list_construct();
    POSITION p = list_first(lst);

    for(int i = 0; i < 20; i++) {
        list_insert(lst, p, rand() % 10);
    }
    list_print(lst);
    purge(lst);
    list_print(lst);

    return 0;
}

