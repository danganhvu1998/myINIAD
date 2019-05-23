#include <stdio.h>
#include <stdlib.h>
#include "atnd05_2.h"

long read_from_file(num_t **pp, FILE *fp){
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);
    printf("THE FUCK: %d\n", filesize);
    fseek(fp, 0, SEEK_SET);


    long num[1000005], cnt=0, N = filesize/8;
    num_t *temp, *last;
    fread(&num, sizeof(long), N, fp );
    for(int i=0;i<N;i++){
        temp = malloc(sizeof(num_t));
        //printf("%ld\n", num);
        temp->n = num[i];
        temp->next = NULL;
        ++cnt;
        if(*pp==NULL){
            *pp = temp;
            last = temp;
        } else {
            last->next = temp;
            last = temp;
        }
    }
    return N;
}

long write_to_file(num_t *list, FILE *fp){
    long num[1000005], cnt=0;
    while(list!=NULL){
        num[cnt] = list->n;
        ++cnt;
        list = list->next;
    }
    fwrite(&num, sizeof(long), cnt, fp);
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