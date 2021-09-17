/* set_test.c */

#include "binary_search_tree.h"
#include <string.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
    SET set = set_construct();

    for(;;) {
        char buf[256];
        char c;
        int value = 0;
        
        fgets(buf, 256, stdin);
        if(sscanf(buf, "%c %d", &c, &value) == 0) {
            continue;
        }
        switch(c) {
            case 'i':
                if(set_insert(set, value)) {
                    printf("\"%d\" is inserted.\n", value);
                    printf("  min: %d, max: %d\n", set_min(set), set_max(set));
                } else {
                    printf("Failed.\n");
                }
                break;
            
            case 'd':
                if(set_delete(set, value)) {
                    printf("\"%d\" is deleteed.\n", value);
                    printf("  min: %d, max: %d\n", set_min(set), set_max(set));
                } else {
                    printf("Failed.\n");
                }
                break;
            
            case 'm':
                    if(set_member(set, value)) {
                    printf("\"%d\" is a member.\n", value);
                } else {
                    printf("\"%d\" is not a member.\n", value);
                    }
                break;
        }
    }

    set_free(set);
}