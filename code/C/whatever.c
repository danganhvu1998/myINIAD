#include <stdio.h>
#include <stdlib.h>

typedef struct num {
  struct num *next;
  long n;
} num_t;

int main() {
  int n = 20;
  num_t *list = NULL;
  for (int i = 0; i < n; i++)  {
    long r = random();
    num_t *curr, *temp;
    temp = (struct num*)malloc(sizeof(struct num));
    //printf("%ld %p\n", r, temp);
    temp->n = r;
    temp->next = NULL;
    if(list==NULL){
        curr = temp;
        list = temp;
    } else {
        curr->next = temp;
        curr = temp;
    }
  }
  long curr_min, curr_max;
  curr_min = list->n;
  curr_max = list->n;
  while(list!=NULL){
      //printf("%ld\n", list->n);
      if(curr_min>list->n) curr_min = list->n;
      if(curr_max<list->n) curr_max = list->n;
      list = list->next;
  }
  printf("diff %ld\n", curr_max - curr_min);
}
