typedef struct gem {
    char name[8];           // name of gem
    struct gem *ring_next;  // used for making a ring
} gem_t;

gem_t *make_ring3(char *gem0, char *gem1, char *gem2);
