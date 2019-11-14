#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>


struct stack {
    int buf[128];
    int count;
};

// stack_init(&stk);
pthread_mutex_t mtx;
pthread_cond_t cond;

void stack_init(struct stack* stk)
{
    stk->count = 0;
}
// please write mutex
void stack_push(struct stack* stk, int val)
{   pthread_mutex_lock(&mtx);
    stk->buf[stk->count++] = val;
    pthread_cond_broadcast(&cond);
    pthread_mutex_unlock(&mtx);  
}
// please write mutex 
int stack_pop(struct stack* stk)
{   
    pthread_mutex_lock(&mtx);
    while (stk->count <= 0){
        pthread_cond_wait(&cond, &mtx);
    }
    if (stk->count <= 0) {
        fprintf(stderr, "ERROR: stack is empty\n");
        abort();
    }

    int tmp = stk->buf[--stk->count];
    pthread_mutex_unlock(&mtx);  
    return tmp; 

}

// no write mutex!!!


void* thread_entry_push(void* arg){
    struct stack* stk = (struct stack*)arg; 

        for (int i = 0; i <=10; i++){
            stack_push(stk, i);
            sleep(1);
        }

    return NULL; 

}

void* thread_entry_pop(void* arg){
    struct stack* stk = (struct stack*)arg; 

    for(;;){
        int res = stack_pop(stk);
        printf("%d\n",res);
    }

    return NULL; 

}



// void* thread_entry(void* arg){
//     for(int i = 0; i < 10; i++){
//         stack_push(&stk,i);
//         sleep(1);
//     }
//     return NULL;
// }
// void* thread_pop(void* arg){
//     for(;;){
//         int res = stack_pop(&stk);
//         printf("%d\n",res);
//         if(res == 9) break;
//     }
//     return NULL;
// }






int main(int argc, char* argv[])
{
    struct stack stk;
    pthread_t tid1 = NULL, tid2 = NULL; 
    void *retv;

    // stack_init(&stk);
    // for (int i = 0; i < 1000000; i++){
    //     stack_push(&stk,i);
    //      stack_pop(&stk);  // implementing multi-thread
    // }



//    pthread_create(&tid1, NULL, thread_entry, &stk);


   pthread_create(&tid1, NULL, thread_entry_push, &stk);


   pthread_create(&tid2, NULL, thread_entry_pop, &stk);

   pthread_join(tid1, &retv);
   pthread_join(tid2, &retv); 

  


    

    stack_push(&stk, 1);
    stack_push(&stk, 2);
    stack_push(&stk, 3);
    stack_push(&stk, 4);
    printf("poped: %d\n", stack_pop(&stk));
    printf("poped: %d\n", stack_pop(&stk));
    stack_push(&stk, 5);
    stack_push(&stk, 6);
    printf("poped: %d\n", stack_pop(&stk));
    stack_push(&stk, 7);
    printf("poped: %d\n", stack_pop(&stk));
    printf("poped: %d\n", stack_pop(&stk));
    printf("poped: %d\n", stack_pop(&stk));
    printf("poped: %d\n", stack_pop(&stk));
    
    return 0;
}