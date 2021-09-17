#include <stdio.h>
#include <pthread.h>

typedef struct {
    const char* name;
    int balance;
} account;

account a = {
    .name = "alice",
    .balance = 10000,
};
account b = {
    .name = "bob",
    .balance = 5000,
};

pthread_mutex_t mtx;

void transfer(account* sender, account* receiver, int amount)
{
    pthread_mutex_lock(&mtx);
    if (sender->balance < amount) {
        goto fin;
    }
    sender->balance -= amount;
    receiver->balance += amount;
 fin:
    pthread_mutex_unlock(&mtx);
}


void* thread_entry(void* arg)
{
    int i;

    for (i = 0; i < 1000000; i++) {
        transfer(&a, &b, 1000);
        transfer(&b, &a, 1000);
    }

    return NULL;
}



int main()
{
    pthread_t tid1, tid2;
    void* ret;
    int er;

    er = pthread_mutex_init(&mtx, NULL);
    if (er != 0) goto error;

    er = pthread_create(&tid1, NULL, thread_entry, NULL);
    if (er != 0) goto error;
    er = pthread_create(&tid2, NULL, thread_entry, NULL);
    if (er != 0) goto error;
    
    pthread_join(tid1, &ret);
    pthread_join(tid2, &ret);
    
    printf("%s has %d yen\n", a.name, a.balance);
    printf("%s has %d yen\n", b.name, b.balance);
        
    return 0;

 error:
    fprintf(stderr, "ERROR\n");
    return -1;
}