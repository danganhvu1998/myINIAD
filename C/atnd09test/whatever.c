#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "atnd09.h"

void gem_insert(gem_t *ring, int i, char *name){
    int cnt = 1;
    gem_t *run_ring = ring, *tmp;
    while(cnt < i){
        run_ring = run_ring->_ptr;
        ++cnt;
        printf("%d %d %s %s\n", cnt, i, run_ring->_name, name);
    }
    tmp = malloc(sizeof(gem_t));
    strcpy(tmp->_name, name);
    tmp->_ptr = run_ring->_ptr;
    run_ring->_ptr = tmp;
    run_ring = ring;
    for(int i=1; i<=15;i++){
        printf("-> %s\n", run_ring->_name);
        run_ring = run_ring->_ptr;
    }
}