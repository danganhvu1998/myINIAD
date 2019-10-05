/* array_list.c */

#include <stdlib.h>
#include <stdio.h>
#include "array_list.h"

LIST list_construct() {
    array_list* lst = malloc(sizeof(array_list));
    lst->elements = (int*)malloc(sizeof(int) * INITIAL_SIZE);
    lst->length = 0;
    lst->max_length = INITIAL_SIZE;

    return lst;
}

void list_free(LIST lst) {
    if(lst == NULL) {
        return;
    }
    if(lst->elements != NULL) {
        free(lst->elements);
    }
    free(lst);
}

void list_print(LIST lst) {
    for(long i = 0; i < lst->length; i++) {
        if(i != lst->length - 1) {
            printf("%d -> ", lst->elements[i]);
        } else {
            printf("%d\n", lst->elements[i]);
        }
    }
}

void list_insert(LIST lst, POSITION pos, int value) {
    if(lst == NULL) {
        return;
    }
    if((pos < 0) || (pos > lst->length)) {
        return;
    }
    if(lst->length == lst->max_length) {
        int* new_elements = (int*)malloc(sizeof(int) * lst->max_length * 2);
        for(int i = 0; i < lst->length; i++) {
            new_elements[i] = lst->elements[i];
        }
        free(lst->elements);
        lst->elements = new_elements;
        lst->max_length = lst->max_length * 2;
    }
    for(int i = lst->length; i > pos; i--) {
        lst->elements[i] = lst->elements[i - 1];
    }
    lst->elements[pos] = value;
    lst->length++;
}

void list_delete(LIST lst, POSITION pos) {
    if(lst == NULL) {
        return;
    }
    if((pos < 0) || (pos >= lst->length)) {
        return;
    }
    for(int i = pos; i < lst->length - 1; i++) {
        lst->elements[i] = lst->elements[i + 1];
    }
    lst->length--;
}

int list_retrieve(LIST lst, POSITION pos) {
    if(lst == NULL) {
        return 0;
    }
    if((pos < 0) || (pos >= lst->length)) {
        return 0;
    }
    return lst->elements[pos];
}

POSITION list_first(LIST lst) {
    return 0;
}

POSITION list_last(LIST lst) {
    if(lst->length == 0) {
        return 0;
    }
    return lst->length;
}

POSITION list_next(LIST lst, POSITION pos) {
    pos++;
    return pos;
}

POSITION list_previous(LIST lst, POSITION pos) {
    pos--;
    return pos;
}

POSITION list_get(LIST lst, int n) {
    return n;
}

POSITION list_index(LIST lst, int value){
    POSITION current_pos = list_first(lst);
    for(;;){
        if( list_retrieve(lst, current_pos) == value ) return current_pos;
        else {
            if(current_pos == list_previous(lst, list_last(lst)) ) return current_pos;
            else current_pos = list_next(lst, current_pos);
        }
    }
    return 0;
}