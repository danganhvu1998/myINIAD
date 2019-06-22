#include <stdio.h>
#include <stdlib.h>
#include "atnd10.h"

gem_t *create_ring_from_file(FILE *fp){
    char ch[2005];
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);
    fseek(fp, 0, SEEK_SET);
    fread(ch, sizeof(char), filesize, fp );
    printf("%s\n", ch);
    gem_t *temp, *first, *last;
    for(int i=0;i<filesize;i++){
        temp = malloc(sizeof(gem_t));
        if(i == 0) first = temp;
        else {
            if(i== filesize-1) temp->_nxt = first;
            last->_nxt = temp;
        }
        temp->value = ch[i];
        last = temp;
    }
    return first;
}