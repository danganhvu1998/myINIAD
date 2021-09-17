/* binary_search_tree.h */

typedef struct treeset_node{
    int value;
    struct treeset_node* left;
    struct treeset_node* right;
} treeset_node;

typedef struct treeset {
    treeset_node* root;
} treeset;

typedef treeset* SET;

SET set_construct();
void set_free(SET set);

int set_insert(SET set, int value);
int set_delete(SET set, int value);
int set_member(SET set, int value);

int set_min(SET set);
int set_max(SET set);
