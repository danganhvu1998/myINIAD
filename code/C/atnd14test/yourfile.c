#include <stdio.h>
#include "atnd14.h"
#include <stdlib.h>

node_t *list_64m(FILE *fp){
    unsigned char ch[1000005];
    node_t *first = NULL, *temp = NULL, *last = NULL;
    while(1){
        int n = fread(ch, sizeof(char), 1000000, fp );
        if(n==0) break;
        for(int i=0;i<n;i++){
            if(ch[i]%64==0) {
                temp = malloc(sizeof(node_t));
                temp->value = ch[i];
                temp->next = NULL;
                if(first==NULL) {
                    first = temp;
                    last = temp;
                } else {
                    last->next = temp;
                    last = temp;
                }
            }
        }
    }
    return first;
}