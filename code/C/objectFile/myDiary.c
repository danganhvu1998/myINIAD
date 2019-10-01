#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct diaries{
    int day;
    int month;
    int year;
    char title[200];
    struct diaries *next;
} Diaries;

Diaries * push_back(Diaries *list, int year, int month, int day, char *title){
    Diaries *newDiary, *run;
    newDiary = malloc(sizeof(struct diaries));
    newDiary->year = year;
    newDiary->month = month;
    newDiary->day = day;
    strcpy(newDiary->title, title);
    newDiary->next = NULL;
    if(list == NULL){
        list = newDiary;
    } else {
        run = list;
        while(run->next!=NULL) run = run->next;
        run -> next = newDiary;
    }
    return list;
}

Diaries* push_front( Diaries *list, int year, int month, int day, char title[] ){
    Diaries *newDiary;
    newDiary = malloc(sizeof(struct diaries));
    newDiary->year = year;
    newDiary->month = month;
    newDiary->day = day;
    strcpy(newDiary->title, title);
    newDiary->next = NULL;
    if(list == NULL){
        list = newDiary;
    } else {
        newDiary->next = list;
    }
    return newDiary;
}


void print(Diaries *list){
   Diaries *diary;
	 
   for (diary = list; diary!=NULL; diary = diary->next){
      printf("%d / %d / %d  \n", diary->day, diary->month, diary->year);
      printf("%s\n", diary->title);
   }
}

void delete_all(Diaries *list){
    Diaries *diary, *next;
    diary = list;
    next = diary;
    while(diary!=NULL){
        diary = diary->next;
        free(next);
        next = diary;
    }
}



int main(void){
   Diaries *list = NULL;
	 
   /* Add a diary to the end of the list */
   list = push_back(list, 1912, 7, 30, "Taisho period start!");
   list = push_back(list, 1926, 12, 25, "Showa period start!");
   list = push_back(list, 1989, 1, 7, "Heisei period start!");
   
   /* Display all diaries */
   print(list);
	 
   /* Delete all diaries */
   delete_all(list);
   //print(list);
}
