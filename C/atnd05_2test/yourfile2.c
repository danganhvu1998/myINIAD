#include <stdio.h>
#include <stdlib.h>
#include "atnd05_2.h"

long read_from_file(num_t **pp, FILE *fp){
    long num, cnt=0;
    num_t *temp, *last;
    while(!feof(fp)){
        fread(&num, sizeof(long), 1, fp );
        if(feof(fp)) break;
        temp = malloc(sizeof(num_t));
        //printf("%ld\n", num);
        temp->n = num;
        temp->next = NULL;
        ++cnt;
        if(*pp==NULL){
            *pp = temp;
        } else {
            last = *pp;
            while(last->next!=NULL){
                last = last->next;
            }
            last->next = temp;
        }
    }
    return cnt;
}

long write_to_file(num_t *list, FILE *fp){
    long num, cnt=0;
    while(list!=NULL){
        num = list->n;
        ++cnt;
        fwrite(&num, sizeof(long), 1, fp);
        list = list->next;
    }
    return cnt;
}

/*int main(){
    FILE * fp1 = fopen("text.txt", "r");
    FILE * fp2 = fopen("text_copy.txt", "w");
    num_t *s;
    s = NULL;
    read_from_file(&s, fp1);
    write_to_file(s, fp2 );
}*/