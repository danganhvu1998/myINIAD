#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <string.h>

#define BUFF_SIZE 5000
#define CMD_SIZE 50

char buf[BUFF_SIZE];
char *token;
char* cmd[512];

int curr_cmd_index;

int init_func(){
  curr_cmd_index = 0;
}

void string_to_token(){
  token = strtok(buf, " ");
  while( token != NULL ) {
    strcpy(cmd[curr_cmd_index], token);
    ++curr_cmd_index;
    token = strtok(NULL, " ");
  }
  cmd[curr_cmd_index] = NULL;
}

int main(){
  for(;;){
    printf("> ");
    init_func();
    fgets(buf, sizeof(buf), stdin);
    string_to_token();
    for(int i=0;i<curr_cmd_index;i++){
      printf("%s\n", cmd[i]);
    }
  }
}