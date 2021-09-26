#include <pthread.h>
#include <unistd.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdint.h>

bool is_prime(int n)
{
    int i;

    if (n < 2) return false;
    
    for (i = 2; i * i <= n; i++) {
        if ((n % i) == 0) return false;
    }

    return true;
}


void* thread_entry(void* arg)
{
    int n = (intptr_t)arg;
    int i;
    
    for (i = 100 * n; i < 100 * (n+1); i++) {
        if (is_prime(i)) {
            printf("prime: %d\n", i);
        }
    }

    return NULL;
}


int main()
{
    int er, i;
    void* retval;
    pthread_t tid[10];

    for (i = 0; i < 10; i++) {
        er = pthread_create(&tid[i], NULL, thread_entry, (void*)i);
        if (er != 0) {
            fprintf(stderr, "ERROR: pthread_create failed\n");
            return -1;
        }
    }

    for (i = 0; i < 10; i++) {
        er = pthread_join(tid[i], &retval);
        if (er != 0) {
            fprintf(stderr, "ERROR: pthread_join failed\n");
            return -1;
        }
    }

    return 0;
}