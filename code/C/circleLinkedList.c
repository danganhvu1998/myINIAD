#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct student {
    char name[20];
    int score;
    struct student *next;
} studentSt;

void append(studentSt **first, char* name, int score){
    studentSt *temp, *run;
    temp = malloc(sizeof(studentSt));
    strcpy(temp->name, name);
    temp->score = score;
    if(*first!=NULL){
        run = *first;
        temp->next = *first;
        while(1){
            if(run->next == *first){
                run->next = temp;
                break;
            } else {
                run = run->next;
            }
        }
    } else {
        *first = temp;
        temp->next = temp;
    }
}

void print(studentSt *first){
    if(first==NULL){
        printf("Nothing to print\n");
        return;
    }
    studentSt *run;
    run = first;
    printf("START PRINT\n");
    printf("%s %d\n", run->name, run->score);
    run = run->next;
    while(run!=first){
        printf("%s %d\n", run->name, run->score);
        run = run->next;
    }
    printf("END PRINT\n\n");
}

int data(studentSt *first, char* name){
    studentSt *temp;
    temp = first;
    while(1){
        if(!strcmp(temp->name, name)) {
            //printf("%s %s %d", temp->name, name, temp->score);
            return temp->score;
        }
        else temp=temp->next;
        if(temp == first){
            return -1;
        }
    }
}

studentSt * search(studentSt *first, char* name){
    studentSt *temp;
    temp = first;
    while(1){
        if(!strcmp(temp->name, name)) {
            //printf("%s %s %d", temp->name, name, temp->score);
            return temp;
        }
        else temp=temp->next;
        if(temp == first){
            return NULL;
        }
    }
}

void delete(studentSt **first, char* name){
    studentSt *temp, *last;
    temp = *first;
    last = temp;
    temp = temp->next;
    *first = temp;
    while(1){
        if(!strcmp(temp->name, name)) {
            last->next = temp->next;
            free(temp);
        }
        else {
            last = temp;
            temp = temp->next;
        }
        if(temp == *first){
            return;
        }
    }
}

int main(){
    studentSt *whatever;
    whatever = NULL;
    append(&whatever, "INIAD", 90);
    append(&whatever, "Toyo", 80);
    append(&whatever, "Jyoho", 70);
    append(&whatever, "Renke", 75);
    delete(&whatever, "INIAD");
    print(whatever);
}