/* set_sample3.c */

#include <stdio.h>

typedef struct node {
    int val;
    struct node *next;
} node;

node node15 = {757, NULL};
node node14 = {311, NULL};
node node13 = {242, NULL};
node node12 = {233, NULL};
node node11 = {912, &node13};
node node10 = {859, NULL};
node node9 = {408, NULL};
node node8 = {88, &node9};
node node7 = {822, &node11};
node node6 = {551, &node14};
node node5 = {645, NULL};
node node4 = {353, &node12};
node node3 = {477, &node15};
node node2 = {167, &node3};
node node1 = {96, NULL};

node* table[10] = {NULL, &node6, &node7, &node4, NULL, &node5, &node1, &node2, &node8, &node10};

int member_list(node* list, int value, int* cnt) {
    if(list == NULL) {
        return 0;
    }
    ++*cnt;
    if(list->val == value) {
        return 1;
    }
    return member_list(list->next, value, cnt);
}

int member(node* table[], int value, int* cnt) {
    return member_list(table[value % 10], value, cnt);
}

int main(int argc, char* argv[]) {
    int cnt = 0;
    int value;
    printf("Input value:");
    scanf("%d", &value);

    if(member(table, value, &cnt)) {
        printf("%d is in the set.\n", value);
    } else {
        printf("%d is not in the set.\n", value);
    }

    printf("%d numbers are checked.\n", cnt);
    
    return 0;
}