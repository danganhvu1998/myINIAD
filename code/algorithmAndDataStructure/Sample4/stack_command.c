#include <stdio.h>
#include "list_stack.h"

int main(int argc, char* argv[]) {
    STACK stack = stack_construct();

    for(;;) {
        char buf[256];
        char c;
        int value = 0;
        
        fgets(buf, 256, stdin);
        if(sscanf(buf, "%c %d", &c, &value) == 0) {
            continue;
        }
        switch(c) {
            case 'i':
                stack_push(stack, value);
                printf("push:%d\n", value);
                break;
            case 'd':
                value = stack_pop(stack);
                printf("pop:%d\n", value);
                break;
            case 'r':
                value = stack_top(stack);
                printf("top:%d\n", value);
                break;
        }

        stack_print(stack);
    }
}