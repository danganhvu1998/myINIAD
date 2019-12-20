/* hashmap.h */

#define SIZE 10

typedef struct hashmap_node {
    struct hashmap_node* next;
    char* key;
    char* value;
} hashmap_node;

typedef struct hashmap {
    hashmap_node *table[SIZE];
} hashmap;

typedef hashmap* MAP;

MAP map_construct();
void map_free(MAP map);

int map_put(MAP map, char* key, char* value);
char* map_get(MAP map, char* key);
int map_delete(MAP map, char* key);
