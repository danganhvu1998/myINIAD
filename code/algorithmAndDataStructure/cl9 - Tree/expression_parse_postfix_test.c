/* expression_parse_prefix_test.c */

#include <stdlib.h>
#include <stdio.h>
#include "expression.h"

int main(int argc, char** argv) {
    char buf[256];
    fgets(buf, 256, stdin);

    Node* node = expression_parse_postfix(buf);

    expression_print_infix(node);
    printf(" = %d\n", expression_eval(node));

    expression_free(node);

    return 0;
}