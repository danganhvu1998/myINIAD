#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ex1_4.h"

int count_gem(gem_t *ring, char *name){
    gem_t *runRing;
    int ans = 0;
    runRing = ring->ring_next;
    if(strcmp(ring->name, name)==0) ++ans;
    while(runRing!=ring){
        if(strcmp(runRing->name, name)==0) ++ans;
        runRing = runRing->ring_next;
    }
    return ans;
}