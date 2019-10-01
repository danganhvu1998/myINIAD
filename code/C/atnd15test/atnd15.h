typedef struct node {
    char _name[8];     // name of node
    struct node *_nx;  // used for making a NULL-terminated list
} node_t;

// top - pointer to the first node of the list
// i - location within the ring where a new node_t is inserted
// (location of node_t pointed by the 1st parameter is 0)
// name - a new node_t's name
void node_insert(node_t *top, int i, char *name);
