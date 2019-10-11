/* array_queue.h */

#define QUEUE_SIZE 10

typedef int T;

typedef struct array_queue {
    T elements[QUEUE_SIZE];
    int front;
    int rear;
} array_queue;
typedef array_queue* QUEUE;

QUEUE queue_construct();
void queue_free(QUEUE queue);
void queue_print(QUEUE queue);

void queue_enqueue(QUEUE queue, T value);
T queue_dequeue(QUEUE queue);
int queue_empty(QUEUE queue);

// For Assignment 4-2
T queue_front(QUEUE queue);
