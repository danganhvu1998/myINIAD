/* hashset_chain.h */

#define SIZE 10

typedef struct hashset_node {
    struct hashset_node* next;
    char* value;
} hashset_node;

typedef struct hashset {
    hashset_node *table[SIZE];
} hashset;

typedef hashset* SET;

SET set_construct();
void set_free(SET set);

int set_insert(SET set, char* str);
int set_delete(SET set, char* str);
int set_member(SET set, char* str);

