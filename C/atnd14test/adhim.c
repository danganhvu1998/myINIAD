#include "atnd14.h"
#include <stdio.h>
#include <stdlib.h>

node_t *list_64m(FILE *fp) {
    int const sz = 1024;
    unsigned char buf[sz];
    node_t *first=NULL, *prev=NULL;

    while (!feof(fp)) {
        int n = fread(buf,1,sizeof buf,fp);
        if (n>0) {            
            for (int i=0; i<n; i++) {
                if (buf[i]%64==0){
                    node_t *p = malloc(sizeof(node_t));
                    p->next = NULL;
                    p->value = buf[i];
                    if (first==NULL) {
                        first = p;
                        prev = p;
                    } else {
                        prev->next =p;
                        prev = p;
                    }
                }
            }
        }
    }
    return first;
    
}