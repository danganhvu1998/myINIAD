#include <stdio.h>
#include "atnd08.h"

void gem_unlink(gem_t *ring, gem_t *target){
    gem_t *run, *last, *next;
    last = ring;
    run = last->ring_next;
    next = run->ring_next;
    while(run!=target){
        run=run->ring_next;
        last = last->ring_next;
        next = next->ring_next;
    }
    last->ring_next = next;

}
