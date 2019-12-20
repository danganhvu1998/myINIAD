/* priority_queue.c */

#include "priority_queue.h"
#include <stdlib.h>

priority_queue* priority_queue_construct() {
    priority_queue* queue = (priority_queue*)malloc(sizeof(priority_queue));
    queue->size = 0;
    return queue;
}

void priority_queue_free(priority_queue* queue) {
    free(queue);
}

void priority_queue_enqueue(priority_queue* queue, T value) {
    if(queue->size >= QUEUE_SIZE - 2) {
        return;
    }

    queue->size++;
    queue->array[queue->size] = value;

    int index = queue->size;
    while(index > 1) {
        if(queue->array[index] <= queue->array[index / 2]) {
            break;
        }
        T tmp = queue->array[index];
        queue->array[index] = queue->array[index / 2];
        queue->array[index / 2] = tmp;
        index /= 2;
    }
}

T priority_queue_dequeue(priority_queue* queue) {
    if(queue->size == 0) {
        return 0;
    }
    T result = queue->array[1];

    queue->array[1] = queue->array[queue->size];
    queue->size--;
    int index = 1;
    while(index * 2 <= queue->size) {
        if((index * 2 == queue->size) || (queue->array[index * 2] > queue->array[index * 2 + 1])) {
            if(queue->array[index] >= queue->array[index * 2]) {
                break;
            }
            T tmp = queue->array[index];
            queue->array[index] = queue->array[index * 2];
            queue->array[index * 2] = tmp;
            index = index * 2;
        } else {
            if(queue->array[index] >= queue->array[index * 2 + 1]) {
                break;
            }
            T tmp = queue->array[index];
            queue->array[index] = queue->array[index * 2 + 1];
            queue->array[index * 2 + 1] = tmp;
            index = index * 2 + 1;
        }
    }

    return result;
}

T priority_queue_front(priority_queue* queue) {
    if(queue->size == 0) {
        return 0;
    }
    T result = queue->array[1];
    return result;
}