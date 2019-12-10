/* hashset_simple.c */

#include "hashset_simple.h"
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

void set_free(SET set) {
    for(int i = 0; i < SIZE; i++) {
        if(set->table[i] != NULL) {
            free(set->table[i]);
        }
    }
    free(set);
}

int set_insert(SET set, char* str) {
    int h = hash(str);
    if(set->table[h] != NULL) {
        return 0;
    }

    char *str2 = (char*)malloc(strlen(str) + 1);
    strcpy(str2, str);

    set->table[h] = str2;

    return 1;
}

int set_delete(SET set, char* str) {
    int h = hash(str);
    if(set->table[h] == NULL) {
        return 0;
    }

    if(strcmp(set->table[h], str) != 0) {
        return 0;
    }

    free(set->table[h]);
    set->table[h] = NULL;

    return 1;
}

int set_member(SET set, char* str) {
    int h = hash(str);
    if(set->table[h] != NULL) {
        if(!strcmp(set->table[h], str)) return 1;
        return 0;
    }
    return 0;
}

