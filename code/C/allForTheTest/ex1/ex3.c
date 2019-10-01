#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ex1_3.h"


gem_t *make_ring3(char *gem0, char *gem1, char *gem2){
    //printf("%s\n%s\n%s\n", str1, str2, str3);
    gem_t *note1, *note2, *note3;
    note1 = malloc(sizeof(struct gem));
    note2 = malloc(sizeof(struct gem));
    note3 = malloc(sizeof(struct gem));
    //note1->name = gem1;
    //note2->name = gem2;
    //note3->name = gem3;
    strcpy(note1->name, gem0);
    strcpy(note2->name, gem1);
    strcpy(note3->name, gem2);
    note1 -> ring_next = note2;
    note2 -> ring_next = note3;
    note3 -> ring_next = note1;
    //printf("%s\n%s\n%s\n%s\n", note1->string, note1->next->string,note1->next->next->string,note1->next->next->next->string);
    return note1;
}