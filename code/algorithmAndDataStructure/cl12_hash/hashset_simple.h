/* hashset_simple.h */

#define SIZE 10

typedef struct hashset {
    char *table[SIZE];
} hashset;

typedef hashset* SET;

SET set_construct();
void set_free(SET set);

int set_insert(SET set, char* str);
int set_delete(SET set, char* str);
int set_member(SET set, char* str);

