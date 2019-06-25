#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct bowling{
  char player[100];
  int score;
  struct bowling *next;
} bowling;

bowling* append(bowling *list, char player[], int score){
    bowling *tmp = malloc(sizeof(bowling));
    strcpy(tmp->player, player);
    tmp->score = score;

    if (list == NULL){
      tmp->next = tmp;
      return tmp;
    }
    else {
      tmp->next = list->next;
      list->next = tmp;
    }
    return list;
}

void print(bowling *list){
   if (list != NULL){
     bowling *tmp = list;
     do {
       printf("%s : score %d\n", tmp->player, tmp->score);
       tmp = tmp->next;
     } while(tmp != list); 
   }
}

bowling* all_delete(bowling *list){
   if (list != NULL){
     bowling *tmp = list->next;
     bowling *tmp_old;
     do {
       tmp_old = tmp;
       tmp = tmp->next;
       free(tmp_old);
     } while(tmp != list);
     free(list);
   }
   return NULL;
}

int sum(bowling *list){
   int res = 0;
   if (list != NULL){
       res = list->score;
       bowling *run = list->next;
       while(run!=list){
           res += run->score;
           run = run->next;
       }

   }
   return res;
}

int main(void){
  int res;
  bowling *list = NULL;
  list = append(list, "INIAD", 120);
  list = append(list, "Toyo", 98);
  list = append(list, "Jyoho", 143);
  list = append(list, "Jyoho", 139);

  print(list);

  res = sum(list);
  printf("Summation result : %d\n", res);
  
  list = all_delete(list);
}
