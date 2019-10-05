typedef struct gem {
    struct gem *_next_gem;
    long value;
} gem_t;

int count_m10(gem_t *first, gem_t *end_mark);
