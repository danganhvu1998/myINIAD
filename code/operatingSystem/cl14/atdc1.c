#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <pthread.h>

void *thread_func(void *val) {
    int *v = (int *)val;
    ++*v;
    return NULL;
}

int main()
{
    volatile int v = 1;

    pthread_t thread;
    pthread_create(&thread, NULL, thread_func, (void*)&v);

    pthread_join(thread, NULL);
    printf("v = %d\n", v);
    return 0;
}

