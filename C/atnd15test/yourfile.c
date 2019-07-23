#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "atnd15.h"

void node_insert(node_t *top, int i, char *name){
    node_t *run = top, *temp;
    int n = i-1;
    for(int j=0;j<n;j++){
        run = run->_nx;
    }
    temp = malloc(sizeof(node_t));
    strcpy(temp->_name, name);
    temp->_nx = run->_nx;
    run->_nx = temp;
}