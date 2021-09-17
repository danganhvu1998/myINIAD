/* sort_test2.c */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "sort.h"

typedef struct {
    int id;
    char name[16];
    int class;
    int score;
} student;

char* NAMES[] = {"satoh", "suzuki", "takahashi", "tanaka"};

student* create_student(int id) {
    student* st = (student*)malloc(sizeof(student));
    st->id = id + 1;
    st->class = id % 3 + 1;
    st->score = rand() % 100;
    strcpy(st->name, NAMES[rand() % 4]);

    return st;
}

int compare_score(T a, T b) {
    student* st1 = (student*)a;
    student* st2 = (student*)b;
    return st1->score - st2->score;
}

int compare_class(T a, T b) {
    student* st1 = (student*)a;
    student* st2 = (student*)b;
    return st1->class - st2->class;
}

int main(int argc, char* argv[]) {
    int length;
    student** list;
    if(argc < 2) {
        return -1;
    }

    length = atoi(argv[1]);
    list = (student**)malloc(sizeof(student*) * length);
    for(int i = 0; i < length; i++) {
        list[i] = create_student(i);
    }

    printf("Before: \n");
    for(int i = 0; i < length; i++) {
        student* st = list[i];
        printf("%d |%d |%d |%s\n", st->id, st->class, st->score, st->name);
    }
    
    sort((T *)list, length, compare_score);

    printf("Middle: \n");
    for(int i = 0; i < length; i++) {
        student* st = list[i];
        printf("%d |%d |%d |%s\n", st->id, st->class, st->score, st->name);
    }
    sort((T *)list, length, compare_class);

    printf("After: \n");
    for(int i = 0; i < length; i++) {
        student* st = list[i];
        printf("%d |%d |%d |%s\n", st->id, st->class, st->score, st->name);
    }

    for(int i = 0; i < length; i++) {
        free(list[i]);
    }
    free(list);

    return 0;
}