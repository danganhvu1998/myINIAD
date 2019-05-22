typedef struct gem {
    char name[8];           // name of gem
    struct gem *ring_next;  // used for making a ring
} gem_t;

int count_gem(gem_t *ring, char *name);
