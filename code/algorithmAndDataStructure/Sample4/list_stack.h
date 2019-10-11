/* stack.h */

#include "linked_list.h"

typedef int T;
typedef LIST STACK;

STACK stack_construct();
void stack_free(STACK stack);
void stack_print(STACK stack);

void stack_push(STACK stack, T value);
T stack_pop(STACK stack);
int stack_empty(STACK stack);

T stack_top(STACK stack);