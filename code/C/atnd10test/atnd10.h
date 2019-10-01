#include <stdio.h>

typedef struct gem {
    struct gem *_nxt;  // used for making a ring
    char value;        // value
} gem_t;

gem_t *create_ring_from_file(FILE *fp);
