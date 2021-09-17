/* linked_list.c */

#include <stdlib.h>
#include <stdio.h>
#include "linked_list.h"

LIST list_construct() {
    list_node* node = malloc(sizeof(list_node));
    node->next = NULL;

    return node;
}

void list_free(LIST lst) {
    list_node* node = lst;
    while(node != NULL) {
        list_node* next = node->next;
        free(node);
        node = next;
    }
}

void list_print(LIST lst) {
    if((lst == NULL) || (lst->next == NULL)){
        return;
    }

    list_node* node = lst->next;
    while(node->next != NULL) {
        printf("%d -> ", node->value);
        node = node->next;
    }
    printf("%d\n", node->value);
}

void list_insert(LIST lst, POSITION pos, int value) {
    if((lst == NULL) || (pos == NULL)){
        return;
    }

    list_node* new_node = malloc(sizeof(list_node));
    new_node->value = value;
    new_node->next = pos->next;
    pos->next = new_node;
}

void list_delete(LIST lst, POSITION pos) {
    if((lst == NULL) || (pos == NULL)) {
        return;
    }

    list_node* next = pos->next;
    if(next == NULL) {
        return;
    }
    
    pos->next = next->next;
    free(next);
}

int list_retrieve(LIST lst, POSITION pos) {
    if((lst == NULL) || (pos == NULL) || (pos->next == NULL)) {
        return 0;
    }
    return pos->next->value;
}

POSITION list_first(LIST lst) {
    return lst;
}

POSITION list_last(LIST lst) {
    if(lst == NULL) {
        return NULL;
    }

    list_node* node = lst;
    while(node->next != NULL) {
        node = node->next;
    }
    return node;
}

POSITION list_next(LIST lst, POSITION pos) {
    if((lst == NULL) || (pos == NULL)) {
        return NULL;
    }
    return pos->next;
}

POSITION list_previous(LIST lst, POSITION pos) {
    if((lst == NULL) || (lst->next == NULL)){
        return NULL;
    }
    
    list_node* node = lst;
    while(node->next != pos) {
        node = node->next;
    }
    return node;
}

POSITION list_get(LIST lst, int n) {
    if(lst == NULL) {
        return NULL;
    }

    list_node* node = lst;
    for(int i = 0; i < n; i++) {
        if(node->next == NULL) {
            return NULL;
        }
        node = node->next;
    }
    return node;
}