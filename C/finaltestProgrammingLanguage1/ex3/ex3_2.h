typedef struct node {
    struct node *next;
    long value;
} node_t;

node_t *my_at(node_t *top, node_t *end, int i);
