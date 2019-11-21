#include <stdio.h>
#include "os.h"

void task1()
{
    for (;;) {
        printf("INIAD\n");
        sleep_task(500);
        printf("TOYO\n");
        sleep_task(200);
    }
}

void task2()
{
    for (;;) {
        printf("Operating System\n");
        sleep_task(3000);
    }
}


int main(int argc, char* argv[])
{
    static char stack1[16384], stack2[16384];
    
    add_task(task1, stack1 + sizeof(stack1));
    add_task(task2, stack2 + sizeof(stack2));

    schedule_and_dispatch();
    
    return 0;
}
