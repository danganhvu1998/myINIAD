#include <stdio.h>
#include <pthread.h>
#include <stdint.h>
#include <unistd.h>
#include <stdlib.h>

#define PHILOSOPHERS 5
#define DAYS 10000

static const char* names[] = {
    "Enryo", "Socrates", "Platon", "Aristoteles", "Kant"
};

int fork_status[PHILOSOPHERS]= {0, 0, 0, 0, 0}; // 0: available, 1: taken
pthread_t philosophers[PHILOSOPHERS];
pthread_mutex_t fork_mutex;
pthread_cond_t cond; // Condition that at least 2 forks are available (which means the statement "at least 4 forks are taken" is wrong)

static void eat(int phil, int fork1, int fork2)
{
    printf("%s: \"Yummy!\"\n", names[phil]);
}

int number_of_taken_forks(int *fork_status){
    int taken= 0;
    for (int i= 0; i < 5; i++){
        if (fork_status[i])
            taken++;
    }
    return taken;
}

void* philosopher_thread(void* arg)
{
    int phil = (int)(intptr_t)arg;
    unsigned int r = (phil << 16) + time(NULL);
    int left = phil;
    int right = (phil+1) % PHILOSOPHERS;
    int i;

    usleep(rand_r(&r) % 1000);

    for (i = 0; i < DAYS; i++) {
        /* Think for a while */
        printf("Day: %d\n", i);
        usleep(rand_r(&r) % 100);

        // Condition handling
        while(number_of_taken_forks(fork_status) >= 4){
            pthread_cond_wait(&cond, &fork_mutex);
        }
        
        /* Staring to eat */
        pthread_mutex_lock(&fork_mutex);
        if (fork_status[left] == 0){
            fork_status[left]= 1;
            printf("%s picked up fork on the left\n", names[phil]);
            if (fork_status[right] == 0){
                fork_status[left]= 1;
                printf("%s picked up fork on the right\n", names[phil]);

                eat(phil, left, right);

                fork_status[right]= 0;
                printf("%s returned fork on the right\n", names[phil]);
            }
            fork_status[left]= 0;
            printf("%s returned fork on the left\n", names[phil]);
            pthread_cond_broadcast(&cond);
        }        
        pthread_mutex_unlock(&fork_mutex);
    }
    return NULL;
}


int main()
{
    int er, i;
    void* ret;

    for (i = 0; i < PHILOSOPHERS; i++) {
        er = pthread_mutex_init(&fork_mutex, NULL);
        if (er != 0) goto error;
    }

    er = pthread_cond_init(&cond, NULL);
    if (er != 0) goto error;

    for (i = 0; i < PHILOSOPHERS; i++) {
        er = pthread_create(&philosophers[i], NULL, philosopher_thread, (void*)(intptr_t)i);
        if (er != 0) goto error;
    }

    for (i = 0; i < PHILOSOPHERS; i++) {
        pthread_join(philosophers[i], &ret);
    }
    printf("finished\n");
    return 0;

 error:
    fprintf(stderr, "ERROR\n");
    return -1;
}