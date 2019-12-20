/* hashmap.c */

#include "hashmap.h"
#include <string.h>
#include <stdlib.h>

int hash(char* str) {
    int sum = 0;
    for(int i = 0; i < strlen(str); i++) {
        sum += str[i];
    }
    return sum % SIZE;
}

MAP map_construct() {
    hashmap* map = (hashmap*)malloc(sizeof(hashmap));
    for(int i = 0; i < SIZE; i++) {
        map->table[i] = NULL;
    }
    return map;
}

void map_free_node(hashmap_node* node) {
    if(node->next != NULL) {
        map_free_node(node->next);
    }
    free(node->key);
    free(node->value);
    free(node);
}

void map_free(MAP map) {
    for(int i = 0; i < SIZE; i++) {
        if(map->table[i] != NULL) {
            map_free_node(map->table[i]);
        }
    }
    free(map);
}

int map_put(MAP map, char* key, char* value) {
    int h = hash(key);
    
    hashmap_node* node = map->table[h];
    while(node != NULL) {
        if(strcmp(node->key, key) == 0) {
            return 0;
        }
        node = node->next;
    }

    hashmap_node* new_node = (hashmap_node*)malloc(sizeof(hashmap_node));
    new_node->key = (char*)malloc(strlen(key) + 1);
    strcpy(new_node->key, key);
    new_node->value = (char*)malloc(strlen(value) + 1);
    strcpy(new_node->value, value);
    
    new_node->next = map->table[h];
    map->table[h] = new_node;

    return 1;
}

char* map_get(MAP map, char* key) {
    int h = hash(key);
    hashmap_node* node = map->table[h];
    while(node != NULL) {
        if(strcmp(node->key, key) == 0) {
            return node->value;
        }
        node = node->next;
    }

    return NULL;
}

int map_delete(MAP map, char* key) {
    int h = hash(key);
    hashmap_node* node = map->table[h];
    hashmap_node* last = NULL;
    while(node != NULL) {
        if(strcmp(node->key, key) == 0) {
            if(last == NULL){
                map->table[h] = node->next;
            } else {
                last->next = node->next;
            }
            free(node);
            return 1;
        }
        last = node;
        node = node->next;
    }

    return 0;
}