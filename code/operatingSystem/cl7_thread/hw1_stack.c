#include <pthread.h>
#include <string.h>
#include <stdio.h>
#include <unistd.h>
struct bbuf {
    int buf[101];
    int count;
};

pthread_mutex_t mtx;
pthread_cond_t cond, cond2;

void bbuf_init(struct bbuf* stk)
{
    stk->count = 0;
}

void bbuf_put(struct bbuf* stk, int val)
{   
    pthread_mutex_lock(&mtx);
    while (stk->count == 100) {
        pthread_cond_wait(&cond2, &mtx);
    }
    stk->buf[stk->count++] = val;
    pthread_cond_broadcast(&cond);
    pthread_mutex_unlock(&mtx);
}

int bbuf_get(struct bbuf* stk)
{
    pthread_mutex_lock(&mtx);
    while (stk->count == 0) {
        pthread_cond_wait(&cond, &mtx);
    }
    int res = stk->buf[--stk->count];
    pthread_cond_broadcast(&cond2);
    pthread_mutex_unlock(&mtx);
    return res;
}

void* pushThread(void* arg){
    struct bbuf* stk = arg;
    for(int i=0; i<1000000; i++){
        bbuf_put(stk, i);
    }
    return NULL;
}

void* popThread(void* arg){
    struct bbuf* stk = arg;
    for(int i=0; i<999990; i++){
        bbuf_get(stk);
    }
    return NULL;
}

int main(int argc, char* argv[])
{   
    int er;
	void* retval;
    struct bbuf stk;
    bbuf_init(&stk);
    //return 0;
    pthread_t tid1, tid2;
    er = pthread_create(&tid1, NULL, pushThread, (void*)&stk);
    if (er != 0) {
        fprintf(stderr, "ERROR: pthread_create failed\n");
        return -1;
    }

    er = pthread_create(&tid2, NULL, popThread, (void*)&stk);
    if (er != 0) {
        fprintf(stderr, "ERROR: pthread_create failed\n");
        return -1;
    }


    er = pthread_join(tid1, &retval);
    if (er != 0) {
		fprintf(stderr, "ERROR: pthread_join failed\n");
		return -1;
    }
    er = pthread_join(tid2, &retval);
    if (er != 0) {
		fprintf(stderr, "ERROR: pthread_join failed\n");
		return -1;
    }
    printf("bbuf size should be 10 and it is %d", stk.count);
    return 0;
}