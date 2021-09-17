/* set_sample2.c */

#include <stdio.h>

typedef struct node {
    int val;
    struct node *left;
    struct node *right;
} node;

node node15 = {912, NULL, NULL};
node node14 = {822, NULL, NULL};
node node13 = {645, NULL, NULL};
node node12 = {477, NULL, NULL};
node node11 = {353, NULL, NULL};
node node10 = {242, NULL, NULL};
node node9 = {167, NULL, NULL};
node node8 = {88, NULL, NULL};
node node7 = {859, &node14, &node15};
node node6 = {551, &node12, &node13};
node node5 = {311, &node10, &node11};
node node4 = {96, &node8, &node9};
node node3 = {757, &node6, &node7};
node node2 = {233, &node4, &node5};
node node1 = {408, &node2, &node3};

int member(node* tree, int value, int* cnt) {
    if(tree == NULL) {
        return 0;
    }
    ++*cnt;
    if(tree->val == value) {
        return *cnt;
    } else if(tree->val > value) {
        return member(tree->left, value, cnt);
    } else {
        return member(tree->right, value, cnt);
    }
}

int main(int argc, char* argv[]) {
    int cnt = 0;
    int value;
    printf("Input value:");
    scanf("%d", &value);

    if(member(&node1, value, &cnt)) {
        printf("%d is in the set.\n", value);
    } else {
        printf("%d is not in the set.\n", value);
    }
    
    printf("%d numbers are checked.\n", cnt);

    return 0;
}