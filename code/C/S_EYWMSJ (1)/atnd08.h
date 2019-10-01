typedef struct gem {
    char name[8];           // name of gem
    struct gem *ring_next;  // used for making a ring
} gem_t;

void gem_unlink(gem_t *ring, gem_t *target);
