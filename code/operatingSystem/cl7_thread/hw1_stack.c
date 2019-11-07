#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <stdint.h>

struct stack {
    int buf[128];
    int count;
};

pthread_mutex_t mtx;

void stack_init(struct stack* stk)
{
    stk->count = 0;
}

void stack_push(struct stack* stk, int val)
{   
    pthread_mutex_lock(&mtx);
    stk->buf[stk->count++] = val;
    pthread_mutex_unlock(&mtx);
}

int stack_pop(struct stack* stk)
{
    if (stk->count <= 0) {
        fprintf(stderr, "ERROR: stack is empty\n");
        abort();
        return 0;
    }
    pthread_mutex_lock(&mtx);
    return stk->buf[--stk->count];
    pthread_mutex_unlock(&mtx);
}

void* crazy_push_pop_sieu_to_khong_lo(void* arg){
    struct stack* stk = arg;
    for(int i=0; i<1000; i++){
        printf("START %d\n", stk->count);
        stack_push(stk, i);
        printf("END1 %d\n", stk->count);
        stack_pop(stk);
        printf("END %d\n", stk->count);
    }
    return NULL;
}


int main(int argc, char* argv[])
{   
    int er;
	void* retval;
    struct stack stk;
    stack_init(&stk);
    //return 0;
    pthread_t tid1, tid2;
    er = pthread_create(&tid1, NULL, crazy_push_pop_sieu_to_khong_lo, (void*)&stk);
    if (er != 0) {
        fprintf(stderr, "ERROR: pthread_create failed\n");
        return -1;
    }
    er = pthread_create(&tid2, NULL, crazy_push_pop_sieu_to_khong_lo, (void*)&stk);
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
    printf("Stack size should be 0 but it is %d", stk.count);
    return 0;
}