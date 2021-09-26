/* list_stack.c */

#include <stdio.h>
#include "list_stack.h"

STACK stack_construct() {
    return list_construct();
}

void stack_free(STACK stack) {
    list_free(stack);
}

void stack_print(STACK stack) {
    list_print(stack);
}

void stack_push(STACK stack, T value) {
    POSITION pos = list_last(stack);
    list_insert(stack, pos, value);
}

T stack_pop(STACK stack) {
    POSITION pos = list_last(stack);
    pos = list_previous(stack, pos);
    T result = list_retrieve(stack, pos);
    list_delete(stack, pos);
    return result;
}

int stack_empty(STACK stack) {
    return (list_first(stack) == list_last(stack));
}

T stack_top(STACK stack) {
    POSITION pos = list_first(stack);
    return list_retrieve(stack, pos);
}
