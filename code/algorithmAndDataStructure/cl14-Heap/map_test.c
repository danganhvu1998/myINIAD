/* map_test.c */

#include <string.h>
#include <stdio.h>
#include "hashmap.h"

int main(int argc, char* argv[]) {
    MAP map = map_construct();

    for(;;) {
        char buf[256];
        
        fgets(buf, 256, stdin);
        buf[strlen(buf) - 1] = '\0';

        char* command = strtok(buf, " ");
        char* key = strtok(NULL, " ");
        char* value = strtok(NULL, " ");

        if(strncmp(command, "p", 1) == 0) {
            if((key == NULL) || (value == NULL)) {
                continue;
            }
            if(map_put(map, key, value)) {
                printf("PUT : MAP[\"%s\"] = \"%s\"\n", key, value);
            } else {
                printf("Failed.\n");
            }
        } else if(strncmp(command, "g", 1) == 0) {
            if(key == NULL) {
                continue;
            }
            value = map_get(map, key);
            if(value != NULL) {
                printf("GET : MAP[\"%s\"] = \"%s\"\n", key, value);
            } else {
                printf("Failed.\n");
            }
        } else if(strncmp(command, "d", 1) == 0) {
            if(key == NULL) {
                continue;
            }
            if(map_delete(map, key)) {
                printf("DELETE : MAP[\"%s\"]\n", key);
            } else {
                printf("Failed.\n");
            }
        }
    }

    map_free(map);
}