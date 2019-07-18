#include "atnd14.h"
#include <stdio.h>
#include <stdlib.h>

node_t *list_64m(FILE *fp){
    char buf[10000];
    node_t *head = NULL;
    node_t *cur = malloc(sizeof(node_t));
    cur = head;

    while(!feof(fp)){
        
        int n = fread(buf,1,sizeof(buf),fp);
        
        for(int i = 0; i < n; i++){
            if(n==0) return head;
            if(buf[i]%64 == 0){
                node_t *tmp = malloc(sizeof(node_t));
                tmp->value = buf[i];
                if(head == NULL){
                    head = tmp;
                    cur = tmp;
                }
                else{
                    cur->next = tmp;
                    cur = tmp;
                }
            }
        }
    }
    return head;

}