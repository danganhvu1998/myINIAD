/* hashset_chain.c */

#include "hashset_chain.h"
#include <string.h>
#include <stdlib.h>

int hash(char* str) {
    int sum = 0;
    for(int i = 0; i < strlen(str); i++) {
        sum += str[i];
    }
    return sum % SIZE;
}

SET set_construct() {
    hashset* set = (hashset*)malloc(sizeof(hashset));
    for(int i = 0; i < SIZE; i++) {
        set->table[i] = NULL;
    }
    return set;
}

void set_free_node(hashset_node* node) {
    if(node->next != NULL) {
        set_free_node(node->next);
    }
    free(node->value);
    free(node);
}

void set_free(SET set) {
    for(int i = 0; i < SIZE; i++) {
        if(set->table[i] != NULL) {
            set_free_node(set->table[i]);
        }
    }
    free(set);
}

int set_insert(SET set, char* str) {
    int h = hash(str);
    
    hashset_node* node = set->table[h];
    while(node != NULL) {
        if(strcmp(node->value, str) == 0) {
            return 0;
        }
        node = node->next;
    }

    hashset_node* new_node = (hashset_node*)malloc(sizeof(hashset_node));
    new_node->next = set->table[h];
    new_node->value = (char*)malloc(strlen(str) + 1);
    strcpy(new_node->value, str);

    set->table[h] = new_node;

    return 1;
}

int set_delete(SET set, char* str) {
    int h = hash(str);
    if(set->table[h] == NULL) {
        return 0;
    }

    hashset_node* node = set->table[h];
    if(strcmp(node->value, str) == 0) {
        set->table[h] = node->next;
        free(node->value);
        free(node);
        return 1;
    } else {
        while(node->next != NULL) {
            hashset_node* next = node->next;
            if(strcmp(next->value, str) == 0) {
                node->next = next->next;
                free(next->value);
                free(next);
                return 1;
            }
            node = node->next;
        }
    }

    return 0;
}

int set_member(SET set, char* str) {
    int h = hash(str);
    
    hashset_node* node = set->table[h];
    while(node != NULL) {
        if(strcmp(node->value, str) == 0) {
            return 1;
        }
        node = node->next;
    }
    return 0;
}

