#include <stdio.h>

typedef struct edge {
    signed long long from_node_id;
    signed long long to_node_id;
};

typedef struct node {
    // Will contain just not node id, but also id of the worker. First 16bit is for wokers id, last 48bit is for node is
    // So we could support maximum 65000 workers and 2.8e14 nodes
    unsigned long long id; 

    
};
