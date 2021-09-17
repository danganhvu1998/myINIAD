/* array_stack.h */
#pragma once

#include "expression.h"

#define STACK_SIZE 100

typedef Node* T;

typedef struct array_stack {
    T elements[STACK_SIZE];
    int top;
} array_stack;
typedef array_stack* STACK;

STACK stack_construct();
void stack_free(STACK stack);
void stack_print(STACK stack);

void stack_push(STACK stack, T value);
T stack_pop(STACK stack);
int stack_empty(STACK stack);