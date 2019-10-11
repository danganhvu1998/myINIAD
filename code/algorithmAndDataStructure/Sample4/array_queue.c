/* array_queue.c */

#include <stdio.h>
#include <stdlib.h>
#include "array_queue.h"

QUEUE queue_construct() {
    array_queue* a_queue = malloc(sizeof(array_queue));
    a_queue->front = 0;
    a_queue->rear = 0;

    return a_queue;
}

void queue_free(QUEUE queue) {
    if(queue == NULL) {
        return;
    }
    free(queue);
}

void queue_print(QUEUE queue) {
    if(queue == NULL) {
        return;
    }
    for(int i = queue->front; i != queue->rear; i = (i + 1) % QUEUE_SIZE) {
        if((i + 1 - queue->rear) % QUEUE_SIZE == 0) {
            printf("%d\n", queue->elements[i]);
        } else {
            printf("%d -> ", queue->elements[i]);
        }
    }    
}

void queue_enqueue(QUEUE queue, T value) {
    if((queue == NULL) || ((queue->front - 1 - queue->rear) % QUEUE_SIZE == 0)) {
        return;
    }
    queue->elements[queue->rear] = value;
    queue->rear = (queue->rear + 1) % QUEUE_SIZE;
}

T queue_dequeue(QUEUE queue) {
    if((queue == NULL) || (queue->front == queue->rear)) {
        return 0;
    }
    T result = queue->elements[queue->front];
    queue->front = (queue->front + 1) % QUEUE_SIZE;
    return result;
}

int queue_empty(QUEUE queue) {
    return (queue == NULL) || (queue->front == queue->rear);
}

// For Assignment 4-2
T queue_front(QUEUE queue) {
    // Implememnt here.
    return 0;
}
