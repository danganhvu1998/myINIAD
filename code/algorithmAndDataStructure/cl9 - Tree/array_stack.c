/* array_stack.c */

#include <stdio.h>
#include <stdlib.h>
#include "array_stack.h"

STACK stack_construct() {
    array_stack* a_stack = malloc(sizeof(array_stack));
    a_stack->top = 0;

    return a_stack;
}

void stack_free(STACK stack) {
    if(stack == NULL) {
        return;
    }
    free(stack);
}

void stack_push(STACK stack, T value) {
    if((stack == NULL) || (stack->top == STACK_SIZE)){
        return;
    }
    stack->elements[stack->top] = value;
    stack->top++;
}

T stack_pop(STACK stack) {
    if((stack == NULL) || (stack->top == 0)) {
        return 0;
    }
    stack->top--;
    return stack->elements[stack->top];
}

int stack_empty(STACK stack) {
    return (stack == NULL) || (stack->top == 0);
}
