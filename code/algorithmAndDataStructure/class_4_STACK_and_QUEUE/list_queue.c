/* list_queue.c */

#include <stdio.h>
#include "list_queue.h"

QUEUE queue_construct() {
    return list_construct();
}

void queue_free(QUEUE queue) {
    list_free(queue);
}

void queue_print(QUEUE queue) {
    list_print(queue);
}

void queue_enqueue(QUEUE queue, T value) {
    POSITION pos = list_last(queue);
    list_insert(queue, pos, value);
}

T queue_dequeue(QUEUE queue) {
    POSITION pos = list_first(queue);
    T result = list_retrieve(queue, pos);
    list_delete(queue, pos);
    return result;
}

int queue_empty(QUEUE queue) {
    return (list_first(queue) == list_last(queue));
}

T queue_front(QUEUE queue) {
    POSITION pos = list_first(queue);
    return list_retrieve(queue, pos);
}