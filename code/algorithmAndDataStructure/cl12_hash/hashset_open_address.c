/* hashset_open_address.c */

#include "hashset_open_address.h"
#include <string.h>
#include <stdlib.h>

char* deleted = "";

int hash(char* str) {
    int sum = 0;
    for(int i = 0; i < strlen(str); i++) {
        sum += str[i];
    }
    return sum % SIZE;
}

int hash_next(int h) {
    return (h + 1) % SIZE;
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
    for(int i = 0; i < SIZE; i++) {
        if(set->table[h] == NULL) {
            break;
        }
        if((set->table[h] != deleted) && (strcmp(set->table[h], str) == 0)) {
            return 0;
        }
        h = hash_next(h);
    }

    h = hash(str);
    for(int i = 0; i < SIZE; i++) {
        if((set->table[h] == NULL) || (set->table[h] == deleted)) {
            char *str2 = (char*)malloc(strlen(str) + 1);
            strcpy(str2, str);
            set->table[h] = str2;
            return 1;
        }
        h = hash_next(h);
    }

    return 0;
}

int set_delete(SET set, char* str) {
    int h = hash(str);
    
    for(int i = 0; i < SIZE; i++) {
        if(set->table[h] == NULL) {
            break;
        }
        if((set->table[h] != deleted) && (strcmp(set->table[h], str) == 0)) {
            free(set->table[h]);
            set->table[h] = deleted;
            return 1;
        }
        h = hash_next(h);
    }
    return 0;
}

int set_member(SET set, char* str) {
    int h = hash(str);
    
    for(int i = 0; i < SIZE; i++) {
        if(set->table[h] == NULL)
            return 0;
        if((set->table[h] != deleted) && (strcmp(set->table[h], str) == 0)) {
            return 1;
            h = hash_next(h);
        }
    }
    return 0;
}

