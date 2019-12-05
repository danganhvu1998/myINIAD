#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(){
  int current_line_number = 0, currenly_a_new_line_check = 1;
  char buf[30];
  char new_line_start[30];
  char last_line[3][1000];
  while( fgets(buf, sizeof(buf), stdin)!=NULL ){
    if(currenly_a_new_line_check){
      strcpy(last_line[0], last_line[1]);
      strcpy(last_line[1], last_line[2]);
      last_line[2][0] = '\0';
      currenly_a_new_line_check = 0;
    }
    strcpy(last_line[2], strcat(last_line[2], buf));
    if(buf[strlen(buf)-1] == '\n') currenly_a_new_line_check = 1;
    //printf("%s%s%s\n======================\n", last_line[0], last_line[1], last_line[2]);
  }
  printf("%s%s%s", last_line[0], last_line[1], last_line[2]);
}