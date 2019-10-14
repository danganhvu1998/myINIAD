#include <stdio.h>
#include <stdlib.h>
#include "array_list.h"

LIST reverse(LIST lst){
  LIST answer_list = list_construct();
  POSITION current_lst_pos = list_last(lst);
  POSITION current_answer_list_pos = list_first(answer_list);
  for(;;){
    current_lst_pos = list_previous(lst, current_lst_pos);
    list_insert(answer_list, current_answer_list_pos, list_retrieve(lst, current_lst_pos));
    printf("%d %d\n", current_lst_pos, list_retrieve(lst, current_lst_pos));
    if(current_lst_pos == list_first(lst)) break;
  }
  return answer_list;
}

int main(){
  LIST test_list = list_construct();
  list_insert(test_list, list_first(test_list), 5);
  list_insert(test_list, list_first(test_list), 10);
  list_insert(test_list, list_first(test_list), 15);
  list_insert(test_list, list_first(test_list), 20);
  list_insert(test_list, list_first(test_list), 25);
  list_insert(test_list, list_first(test_list), 30);
  list_insert(test_list, list_first(test_list), 35);
  list_insert(test_list, list_first(test_list), 40);
  list_print( reverse(test_list) );
}