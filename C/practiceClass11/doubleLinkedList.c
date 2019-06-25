#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct diary {
    int year;
    int month;
    int day;
    char title[200];
    struct diary *next;
    struct diary *prev;
} Diary;

typedef struct diaries {
    Diary *head;
    Diary *tail;
} Diaries;

Diaries init_list(void){
  Diaries s;
  s.head = NULL;
  s.tail = NULL;
  return s;
}

void print(Diaries s){
  if (s.head!=NULL && s.tail !=NULL){
    Diary *tmp;
    for (Diary *tmp=s.head;tmp!=NULL;tmp=tmp->next){
      printf("%d / %d / %d : %s \n", tmp->day, tmp->month, tmp->year, tmp->title);
    }
  }
  printf("\n");
}

Diaries delete_all(Diaries s){
  if (s.head!=NULL && s.tail !=NULL){
    Diary *tmp1, *tmp2;
    tmp1 = s.head; 
    do {
        tmp2 = tmp1->next;
        free(tmp1);
        tmp1 = tmp2;
    } while (tmp1!=NULL);
    free(tmp1);
    tmp1 = NULL;
    tmp2 = NULL;
  }
  return init_list();
}

Diaries push_back(Diaries s, int year, int month, int day, char title[]){
  Diary *tmp;
  tmp = malloc(sizeof(Diary));
  tmp->year = year;
  tmp->month = month;
  tmp->day = day;
  strcpy(tmp->title, title);
  if (s.head == NULL && s.tail == NULL){
    tmp->next = NULL;
    tmp->prev = NULL;
    s.tail = tmp;
    s.head = tmp;
  }
  else{
    s.tail->next = tmp;
    tmp->next = NULL;
    tmp->prev = s.tail;
    s.tail = tmp;
  }
  return s;
}

Diaries push_front(Diaries s, int year, int month, int day, char title[]){
  Diary *tmp;
  tmp = malloc(sizeof(Diary));
  tmp->year = year;
  tmp->month = month;
  tmp->day = day;
  strcpy(tmp->title, title);
  
  if (s.head == NULL && s.tail == NULL){
    tmp->next = NULL;
    tmp->prev = NULL;
    s.tail = tmp;
    s.head = tmp;
  }
  else{
    s.head->prev = tmp;
    tmp->next = s.head;
    tmp->prev = NULL;
    s.head = tmp;
  }
  return s;
}

Diaries pop_back(Diaries s){
  if (s.head == NULL && s.tail == NULL){
    return init_list();
  }
  else if( s.head == s.tail  ){
    free(s.tail);
    return init_list();
  }
  Diary *tmp;
  tmp = s.tail;
  s.tail = s.tail->prev;
  s.tail->next = NULL;
  free(tmp);
  return s;
}

Diaries pop_front(Diaries s){
  if (s.head == NULL && s.tail == NULL){
    return init_list();
  }
  else if( s.head == s.tail  ){
    free(s.tail);
    return init_list();
  }
  Diary *tmp;
  
  tmp = s.head;
  s.head = s.head->next;
  s.head->prev = NULL;
  free(tmp);
	
  return s;
}


int main(void){
  Diaries s = init_list();
  s = push_back(s,1926, 12, 25, "Showa period start!");
  s = push_front(s, 1912, 7, 30, "Taisho period start!");
  s = push_back(s, 1989, 1, 7, "Heisei period start!");
  s = push_back(s, 2019, 5, 1, "Reiwa period start!");
  print(s);

  s = pop_front(s);
  print(s);

  s = pop_back(s);
  print(s);

  s = pop_front(s);
  print(s);

  s = delete_all(s);
}
