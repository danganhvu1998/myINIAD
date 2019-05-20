#include <stdio.h>

typedef struct num
{
  struct num *next;
  long n;
} num_t;

long read_from_file(num_t **pp, FILE *fp);
long write_to_file(num_t *list, FILE *fp);
