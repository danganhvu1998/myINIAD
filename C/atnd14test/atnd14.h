#include <stdio.h>

typedef struct node {
    struct node *next;
    unsigned char value;
} node_t;

node_t *list_64m(FILE *fp);
