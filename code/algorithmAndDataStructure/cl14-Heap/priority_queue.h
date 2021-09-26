/* priority_queue.h */

#define QUEUE_SIZE 128

typedef int T;
typedef struct priority_queue {
    T array[QUEUE_SIZE];
    int size;
} priority_queue;

priority_queue* priority_queue_construct();
void priority_queue_free(priority_queue* queue);

void priority_queue_enqueue(priority_queue* queue, T value);
T priority_queue_dequeue(priority_queue* queue);

T priority_queue_front(priority_queue* queue);
