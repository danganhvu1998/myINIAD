#include <stdio.h>
#include <stdlib.h>
#include "atnd04.h"

num_t *push(num_t **s, long v){
    num_t *temp, *run;
    temp = malloc(sizeof(num_t));
    temp->n = v;
    if(*s==NULL){
        *s = temp;
    } else {
        run = *s;
        temp->next = run;
        *s = temp;
    }
    return *s;
}

void printThisShit(num_t **s){
    num_t *run;
    if(*s==NULL){
        printf("THIS SHIT IS NULL\n");
        return;
    }
    run = *s;
    printf("THIS SHIT IS BEING PRINTED\n");
    while(run!=NULL){
        printf("%ld ", run->n);
        run = run->next;
    }
    printf("\nTHIS SHIT IS DONE\n");
}

num_t *pop(num_t **s){
    num_t *run, *result;
    if(*s==NULL){
        return NULL;
    }
    run = *s;
    result = run;
    run = run->next;
    *s = run;
    return result;
}

/*int main(){
    num_t *s;
    long a,b;
    s = NULL;
    while(1){
        scanf("%ld", &a);
        if(a==1){
            scanf("%ld", &b);
            push(&s, b);
        } else {
            pop(&s);
        }
        printThisShit(&s);
    }
}*/