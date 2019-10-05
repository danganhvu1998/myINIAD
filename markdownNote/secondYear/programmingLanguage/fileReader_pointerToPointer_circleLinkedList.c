#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct gem {
    char gemName;
    struct gem *next;
} gem_t;

void ringCreatorReadAll(gem_t **first, FILE *fp){
    gem_t *temp, *last;
    char ch[1000005];//This should be big
    
    //Finding FILESIZE
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);
    fseek(fp, 0, SEEK_SET);
    printf("FILE SIZE: %d\n", filesize);

    //READ FILE
    fread(ch, sizeof(char), filesize, fp );
    for(int i=0; i<filesize;i++){
        temp = malloc(sizeof(gem_t));
        temp->gemName = ch[i];
        if(i==0) {
            *first = temp;
            last = temp;
        } else {
            last->next = temp;
            last = temp;
            if(i==filesize-1){
                temp->next = *first;
            }
        }
    }
    fseek(fp, 0, SEEK_SET);
}

void ringCreatorReadOneByOne(gem_t **first, FILE *fp){
    gem_t *temp, *last;
    char ch[5];//1 is also okay but safety first
    while(1){
        fread(ch, sizeof(char), 1, fp );
        if(feof(fp)) break; // Dont Know why but this will read just enough characters instead of double the last one
        temp = malloc(sizeof(gem_t));
        temp->gemName = ch[0];
        if(*first==NULL) {//if *first==NULL
            *first = temp;
            last = temp;
        } else {
            last->next = temp;
            last = temp;
        }
    }
    last->next = *first;
    fseek(fp, 0, SEEK_SET);
}

void printRing(gem_t *first){
    if(!first){ //If first is NULL
        printf("NO RING FOUND\n");    
    }
    printf("RING START <");
    gem_t *run = first;
    while(1){
        printf("%c", run->gemName);
        run = run->next;
        if(run==first) break;
    }
    printf("> RING END\n");
}

int main(){
    FILE *fp;
    gem_t *ringStartReadAll = NULL, *ringStartReadOneByOne = NULL; // It is important to init value to NULL
    fp = fopen("text.txt", "r");
    ringCreatorReadAll(&ringStartReadAll, fp);
    printRing(ringStartReadAll);
    ringCreatorReadOneByOne(&ringStartReadOneByOne, fp);
    printRing(ringStartReadOneByOne);
}