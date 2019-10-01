typedef struct num
{
  struct num *next;
  long n;
} num_t;
num_t *push(num_t **s, long v);
num_t *pop(num_t **s);
