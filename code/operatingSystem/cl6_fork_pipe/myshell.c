#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <string.h>
#include <stdlib.h>

#define BUFF_SIZE 5000
#define CMD_SIZE 50

char buf[BUFF_SIZE];
char *token;
char* cmd[512];

int curr_cmd_index;

int init_func(){
  curr_cmd_index = 0;
  buf[strlen(buf)-1] = '\0';
}

void string_to_token(){
  init_func();
  token = strtok(buf, " ");
  while( token != NULL ) {
    cmd[curr_cmd_index] = token;
    ++curr_cmd_index;
    token = strtok(NULL, " ");
  }
  cmd[curr_cmd_index] = NULL;
}

int main(){
  for(;;){
    printf("\n> ");
    fgets(buf, sizeof(buf), stdin);
    string_to_token();
    pid_t pid = fork();
    if(pid > 0){ // Parent
      int ret;
      waitpid(pid, &ret, 0);
      continue;
    } else {
      //char* cmdd[] ={"ls", "-al", NULL};
      execvp(cmd[0], cmd);
      return 0;
    }
  }
}