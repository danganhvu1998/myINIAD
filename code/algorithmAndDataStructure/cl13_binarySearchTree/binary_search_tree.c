/* binary_search_tree.c */

#include "binary_search_tree.h"
#include <string.h>
#include <stdlib.h>

treeset_node* set_construct_node(int value) {
    treeset_node* new_node = (treeset_node*)malloc(sizeof(treeset_node));
    new_node->value = value;
    new_node->left = NULL;
    new_node->right = NULL;
    return new_node;
}

void set_free_node(treeset_node* node) {
    if(node != NULL) {
        free(node->left);
        free(node->right);
        free(node);
    }
}

SET set_construct() {
    treeset* set = (treeset*)malloc(sizeof(treeset));
    set->root = NULL;
    return set;
}

void set_free(SET set) {
    set_free_node(set->root);
    free(set);
}

int set_insert_node(treeset_node* node, int value) {
    if(node->value > value) {
        if(node->left == NULL) {
            node->left = set_construct_node(value);
            return 1;
        } else {
            return set_insert_node(node->left, value);
        }
    } else if(node->value < value) {
        if(node->right == NULL) {
            node->right = set_construct_node(value);
            return 1;
        } else {
            return set_insert_node(node->right, value);
        }
    } else {
        return 0;
    }
}

int set_insert(SET set, int value) {
    if(set->root == NULL) {
        set->root = set_construct_node(value);
        return 1;
    } 

    return set_insert_node(set->root, value);
}

int set_deletemin_node(treeset_node** node) {
    if((*node)->left != NULL) {
        int result = set_deletemin_node(&((*node)->left));
        return result;
    }

    int value = (*node)->value;
    if((*node)->right == NULL) {
        free(*node);
        *node = NULL;
    } else {
        free(*node);
            *node = (*node)->right;
    }

    return value;
}

int set_delete_node(treeset_node** node, int value) {
    if(*node == NULL) {
        return 0;
    }
    
    if((*node)->value > value) {
        int result = set_delete_node(&((*node)->left), value);
        return result;
    } else if((*node)->value < value) {
        int result = set_delete_node(&((*node)->right), value);
        return result;
    } else {
        if(((*node)->left == NULL) && ((*node)->right == NULL)) {
            free(*node);
            *node = NULL;
        } else if((*node)->left == NULL) {
            free(*node);
            *node = (*node)->right;
        } else if((*node)->right == NULL) {
            free(*node);
            *node = (*node)->left;
        } else {
            (*node)->value = set_deletemin_node(&((*node)->right));
        }

        return 1;
    }
}

int set_delete(SET set, int value) {
    return set_delete_node(&(set->root), value);
}

int set_member_node(treeset_node* node, int value) {
    if(node == NULL) return 0;
    if(node->value == value) return 1;
    return ( set_member_node(node->left, value) | set_member_node(node->right, value) );
}

int set_member(SET set, int value) {
    return set_member_node(set->root, value);
}

int set_min_node(treeset_node* node) {
    int setMin;
    while(node!=NULL){
        setMin = node->value;
        node = node->left;
    }
    return setMin;
}

int set_min(SET set) {
    if(set->root == NULL) {
        return 0;
    }
    return set_min_node(set->root);
}

int set_max_node(treeset_node* node) {
    int setMax;
    while(node!=NULL){
        setMax = node->value;
        node = node->right;
    }
    return setMax;
}

int set_max(SET set) {
    if(set->root == NULL) {
        return 0;
    }
    return set_max_node(set->root);
}

