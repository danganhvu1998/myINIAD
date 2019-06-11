typedef struct gem {
    char _name[8];     // name of gem
    struct gem *_ptr;  // used for making a ring
} gem_t;

// ring - pointer to the first gem_t of a ring
// i - location within the ring where a new gem_t is inserted (location of gem_t pointed by the 1st parameter is 0)
// name - a new gem_t's name
void gem_insert(gem_t *ring, int i, char *name);
