#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ex2_3.h"

int insert_from_file(gem_t *after_this, FILE *fp){
    gem_t *temp, *last;
    char ch[1000005];//This should be big
    
    //Finding FILESIZE
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);
    fseek(fp, 0, SEEK_SET);
    printf("FILE SIZE: %d\n", filesize);

    //READ FILE
    fread(ch, sizeof(char), filesize, fp );

    // Solve
    last = after_this;
    for(int i=0; i<filesize;i++){
        temp = malloc(sizeof(gem_t));
        temp->c = ch[i];
        last->_ring_next = temp;
        last = temp;
    }
    last->_ring_next = after_this;
    return filesize;
}