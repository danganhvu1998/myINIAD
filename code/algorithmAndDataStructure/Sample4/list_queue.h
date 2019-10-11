/* list_queue.h */

#include "linked_list.h"

typedef int T;
typedef LIST QUEUE;

QUEUE queue_construct();
void queue_free(QUEUE queue);
void queue_print(QUEUE queue);

void queue_enqueue(QUEUE queue, T value);
T queue_dequeue(QUEUE queue);
int queue_empty(QUEUE queue);

T queue_front(QUEUE queue);
