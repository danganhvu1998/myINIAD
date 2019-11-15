/* expression.h */
#pragma once

typedef enum {
    NUMBER = 0,
    OPERATOR_ADD = 1,
    OPERATOR_SUB = 2,
    OPERATOR_MUL = 3,
    OPERATOR_DIV = 4
} NodeType;

typedef struct Node {
    NodeType type;
    int value;

    struct Node* left;
    struct Node* right;
} Node;

Node* expression_construct_operator(NodeType type, Node* left, Node* right);
Node* expression_construct_number(int value);
void expression_free(Node* tree);

void expression_print_prefix(Node* tree);
void expression_print_infix(Node* tree);
void expression_print_postfix(Node* tree);

Node* expression_parse_prefix(char *str);
Node* expression_parse_postfix(char *str);
Node* expression_parse_infix(char *str);

int expression_eval(Node* tree);
