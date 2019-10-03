#include <stdio.h>

typedef struct gem {
    struct gem *_ring_next;
    char c;
} gem_t;

int insert_from_file(gem_t *after_this, FILE *fp);
