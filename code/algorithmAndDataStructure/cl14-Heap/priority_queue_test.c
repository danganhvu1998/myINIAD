/* priority_queue_test.c */

#include <stdio.h>
#include "priority_queue.h"

int main(int argc, char* argv[]) {
    priority_queue* queue = priority_queue_construct();

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
                priority_queue_enqueue(queue, value);
                printf("enqueue:%d\n", value);
                break;
            case 'd':
                value = priority_queue_dequeue(queue);
                printf("dequeue:%d\n", value);
                break;
            case 'f':
                value = priority_queue_front(queue);
                printf("front:%d\n", value);
                break;
        }
    }
    priority_queue_free(queue);
    return 0;
}