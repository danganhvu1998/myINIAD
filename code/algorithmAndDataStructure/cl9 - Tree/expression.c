/* expression.c */

#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "array_stack.h"
#include "expression.h"

Node* expression_construct_operator(NodeType type, Node* left, Node* right) {
    Node* node = (Node*)malloc(sizeof(Node));

    node->type = type;
    node->value = 0;

    node->left = left;
    node->right = right;

    return node;
}

Node* expression_construct_number(int value) {
    Node* node = (Node*)malloc(sizeof(Node));

    node->type = NUMBER;
    node->value = value;

    node->left = NULL;
    node->right = NULL;
    
    return node;
}

void expression_free(Node* tree) {
    if(tree->left != NULL) {
        expression_free(tree->left);
    }
    if(tree->right != NULL) {
        expression_free(tree->right);
    }
    free(tree);
}

void print_node(Node* node) {    
    switch(node->type) {
        case OPERATOR_ADD:
            printf(" + ");
            break;
        case OPERATOR_SUB:
            printf(" - ");
            break;
        case OPERATOR_MUL:
            printf(" * ");
            break;
        case OPERATOR_DIV:
            printf(" / ");
            break;
        default:
            printf(" %d ", node->value);
            break;
    }
}

void expression_print_prefix(Node* tree) {
    print_node(tree);

    if(tree->left != NULL) {
        expression_print_prefix(tree->left);
    }

    if(tree->right != NULL) {
        expression_print_prefix(tree->right);
    }
}

void expression_print_infix(Node* tree) {
    if(tree->left != NULL) {
        printf("(");
        expression_print_infix(tree->left);
    }

    print_node(tree);

    if(tree->right != NULL) {
        expression_print_infix(tree->right);
        printf(")");
    }
}

void expression_print_postfix(Node* tree) {
    if(tree->left != NULL) {
        expression_print_postfix(tree->left);
    }

    if(tree->right != NULL) {
        expression_print_postfix(tree->right);
    }

    print_node(tree);
}

Node* expression_parse_prefix(char *str) {
    char *token = strtok(str, " \n");
    if(token == NULL) {
        return NULL;
    }
    if(strcmp(token, "+") == 0) {
        Node* op1 = expression_parse_prefix(NULL);
        Node* op2 = expression_parse_prefix(NULL);
        return expression_construct_operator(OPERATOR_ADD, op1, op2);
    } else if(strcmp(token, "-") == 0) {
        Node* op1 = expression_parse_prefix(NULL);
        Node* op2 = expression_parse_prefix(NULL);
        return expression_construct_operator(OPERATOR_SUB, op1, op2);
    } else if(strcmp(token, "*") == 0) {
        Node* op1 = expression_parse_prefix(NULL);
        Node* op2 = expression_parse_prefix(NULL);
        return expression_construct_operator(OPERATOR_MUL, op1, op2);
    } else if(strcmp(token, "/") == 0) {
        Node* op1 = expression_parse_prefix(NULL);
        Node* op2 = expression_parse_prefix(NULL);
        return expression_construct_operator(OPERATOR_DIV, op1, op2);
    } else {
        char *end;
        int value = strtol(token, &end, 10);
        return expression_construct_number(value);
    }
}

Node* expression_parse_postfix(char *str) {
    Node* result = NULL;
    STACK stack = stack_construct();
    char *token;
    for(token = strtok(str, " \n"); token != NULL; token = strtok(NULL, " \n")) {
        if(strcmp(token, "+") == 0) {
            Node* op2 = stack_pop(stack);
            Node* op1 = stack_pop(stack);
            Node* operator = expression_construct_operator(OPERATOR_ADD, op1, op2);
            stack_push(stack, operator);
        } else if(strcmp(token, "-") == 0) {
            Node* op2 = stack_pop(stack);
            Node* op1 = stack_pop(stack);
            Node* operator = expression_construct_operator(OPERATOR_SUB, op1, op2);
            stack_push(stack, operator);
        } else if(strcmp(token, "*") == 0) {
            Node* op2 = stack_pop(stack);
            Node* op1 = stack_pop(stack);
            Node* operator = expression_construct_operator(OPERATOR_MUL, op1, op2);
            stack_push(stack, operator);
        } else if(strcmp(token, "/") == 0) {
            Node* op2 = stack_pop(stack);
            Node* op1 = stack_pop(stack);
            Node* operator = expression_construct_operator(OPERATOR_DIV, op1, op2);
            stack_push(stack, operator);
        } else {
            char *end;
            int value = strtol(token, &end, 10);
            Node* number = expression_construct_number(value);
            stack_push(stack, number);
        }
    }
    if(! stack_empty(stack)) {
        result = stack_pop(stack);
    }
    while(! stack_empty(stack)) {
        Node* node = stack_pop(stack);
        expression_free(node);
    }
    stack_free(stack);

    return result;
}

Node* expression_parse_infix_support(char *str, int start, int end){
    printf("Debug: ");
    for(int i=start; i<=end; i++){
        printf("%c", str[i]);
    }
    printf("\n");
    int currentBrackets = 0;
    
}

Node* expression_parse_infix(char *str){
    int N = strlen(str);
    expression_parse_infix_support(str, 1, N-2);
}

void expression_print(Node* tree) {
    if(tree->left != NULL) {
        printf("(");
        expression_print(tree->left);
    }
    
    switch(tree->type) {
        case OPERATOR_ADD:
            printf(" + ");
            break;
        case OPERATOR_SUB:
            printf(" - ");
            break;
        case OPERATOR_MUL:
            printf(" * ");
            break;
        case OPERATOR_DIV:
            printf(" / ");
            break;
        default:
            printf(" %d ", tree->value);
            break;
    }

    if(tree->right != NULL) {
        expression_print(tree->right);
        printf(")");
    }
}

int expression_eval(Node* tree) {
    if(tree->type == NUMBER) return tree->value;
    int leftValue = expression_eval(tree->left);
    int rightValue = expression_eval(tree->right);
    if(tree->type == OPERATOR_ADD) {
        return leftValue + rightValue;
    } else if(tree->type == OPERATOR_SUB) {
        return leftValue - rightValue;
    } else if(tree->type == OPERATOR_MUL) {
        return leftValue * rightValue;
    } else if(tree->type == OPERATOR_DIV) {
        return leftValue / rightValue;
    }
    return 0;
}
