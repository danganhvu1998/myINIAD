#include <pthread.h>
#include <string.h>
#include <stdio.h>
#include <unistd.h>

pthread_mutex_t mtx;
pthread_cond_t cond;
char* msg = NULL;


void send_msg(char* m)
{
    pthread_mutex_lock(&mtx);
    msg = m;
    pthread_cond_broadcast(&cond);
    pthread_mutex_unlock(&mtx);
}

char* recv_msg()
{
    char* ret;
    
    pthread_mutex_lock(&mtx);
    while (msg == NULL) {
        pthread_cond_wait(&cond, &mtx);
    }
    ret = msg;
    msg = NULL;
    pthread_mutex_unlock(&mtx);
    return ret;
}


void* sender_thread(void* arg)
{
    char* msgs[] = {"Hello", "INIAD", "Toyo", "University", "END"};
    int i;
    
    for (i = 0; i < sizeof(msgs)/sizeof(msgs[0]); i++) {
        send_msg(msgs[i]);
        sleep(1);
    }

    return NULL;
}

void* receiver_thread(void* arg)
{
    char* message;

    for (;;) {
        message = recv_msg();
        printf("received: %s\n", message);
        
        if (strcmp(message, "END") == 0) break;
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
    er = pthread_cond_init(&cond, NULL);
    if (er != 0) goto error;

    er = pthread_create(&tid1, NULL, sender_thread, NULL);
    if (er != 0) goto error;
    er = pthread_create(&tid2, NULL, receiver_thread, NULL);
    if (er != 0) goto error;
    
    pthread_join(tid1, &ret);
    pthread_join(tid2, &ret);
    
    return 0;

 error:
    fprintf(stderr, "ERROR\n");
    return -1;
}
