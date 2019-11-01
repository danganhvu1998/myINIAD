/* binary_tree_test.c */

#include <stdio.h>
#include "binary_tree.h"

int main(int argc, char** argv) {
    Node* node4 = tree_construct((T)4, NULL, NULL);
    Node* node5 = tree_construct((T)5, NULL, NULL);
    Node* node6 = tree_construct((T)6, NULL, NULL);
    
    Node* node2 = tree_construct((T)2, node4, node5);
    Node* node3 = tree_construct((T)3, node6, NULL);
    Node* node1 = tree_construct((T)1, node2, node3);

    printf("Node1: depth=%d height=%d\n", tree_depth(node1), tree_height(node1));
    printf("Node2: depth=%d height=%d\n", tree_depth(node2), tree_height(node2));
    printf("Node3: depth=%d height=%d\n", tree_depth(node3), tree_height(node3));
    printf("Node4: depth=%d height=%d\n", tree_depth(node4), tree_height(node4));
    printf("Node5: depth=%d height=%d\n", tree_depth(node5), tree_height(node5));
    printf("Node6: depth=%d height=%d\n", tree_depth(node6), tree_height(node6));
    
    tree_free(node1);
    
    return 0;
}