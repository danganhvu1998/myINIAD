/* set_test.c */

#include <string.h>
#include <stdio.h>
#include "hashset_simple.h"

int main(int argc, char* argv[]) {
    SET set = set_construct();

    for(;;) {
        char buf[256];
        
        fgets(buf, 256, stdin);
        buf[strlen(buf) - 1] = '\0';
        if(strncmp(buf, "i ", 2) == 0) {
            if(set_insert(set, buf + 2)) {
                printf("\"%s\" is inserted.\n", buf + 2);
            } else {
                printf("Failed.\n");
            }
        } else if(strncmp(buf, "d ", 2) == 0) {
            if(set_delete(set, buf + 2)) {
                printf("\"%s\" is deleted.\n", buf + 2);
            } else {
                printf("Failed.\n");
            }
        } else if(strncmp(buf, "m ", 2) == 0) {
            if(set_member(set, buf + 2)) {
                printf("\"%s\" is a member.\n", buf + 2);
            } else {
                printf("\"%s\" is not a member.\n", buf + 2);
            }

        }
    }

    set_free(set);
}