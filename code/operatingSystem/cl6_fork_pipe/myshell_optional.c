#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <string.h>
#include <stdlib.h>

#define BUFF_SIZE 5000
#define CMD_SIZE 50

char buf[BUFF_SIZE];
char* cmd_string[CMD_SIZE];
char* write_to_file_name = NULL;
char* cmd_strings;
char* cmd[512];

int curr_cmd_index;
int curr_cmd_string_index;

int init_func(){
  curr_cmd_string_index = 0;
  buf[strlen(buf)-1] = '\0';
}

void start_end_space_remover(char* str){
  int n = strlen(str);
  char* temp = str;
  int start = 0, end = n-1;
  while(str[start] == ' ') ++start;
  while(str[end] == ' ') --end;
  for(int i=start; i<=end; i++) *str++=temp[i];
  *str = '\0';
}

void buf_to_cmd_string(){
  char* token;
  init_func();
  token = strtok(buf, ">");
  cmd_strings = token;
  token = strtok(NULL, ">");
  write_to_file_name = token;
  if(write_to_file_name == NULL){
    printf("not write to file\n");
  } else {
    start_end_space_remover(write_to_file_name);
    printf("write to \"%s\"\n", write_to_file_name);
  }
  // Split cmd_strings into many cmd_string
  start_end_space_remover(cmd_strings);
  printf("%s\n", cmd_strings);
  token = strtok(cmd_strings, "|");
  while( token != NULL ) {
    cmd_string[curr_cmd_string_index] = token;
    start_end_space_remover(cmd_string[curr_cmd_string_index]);
    ++curr_cmd_string_index;
    token = strtok(NULL, "|");
  }
  cmd[curr_cmd_string_index] = NULL;
}

void string_to_token(int curr_cmd){
  char* token;
  char BUF[500];
  strcpy(BUF, cmd_string[curr_cmd]);
  curr_cmd_index = 0;
  //printf("%s\n", BUF);
  token = strtok(BUF, " ");
  while( token != NULL ) {
    cmd[curr_cmd_index] = token;
    //printf("--> %s\n", cmd[curr_cmd_index]);
    ++curr_cmd_index;
    token = strtok(NULL, " ");
  }
  cmd[curr_cmd_index] = NULL;
}

int main(){
  char curr_result[8192] = "HAHA\nHaha\n";
  for(;;){
    printf("\n> ");
    fgets(buf, sizeof(buf), stdin);
    printf("BUF: %s\n", buf);
    buf_to_cmd_string();
    int curr_cmd = 0;
    while(cmd_string[curr_cmd] != NULL){
      int curr_result_wr = 0;
      pid_t pid;
      int pipefd[2], pipefd2[2], ret;
      ret = pipe(pipefd);
      if (ret < 0) {
          fprintf(stderr, "Pipe failed\n");
          return -1;
      }
      ret = pipe(pipefd2);
      if (ret < 0) {
          fprintf(stderr, "Pipe failed\n");
          return -1;
      }
      printf("CURRENT CMD: %d : %s\n", curr_cmd, cmd_string[curr_cmd]);
      printf("RESULT:\n----------------------------------------------------------------\n");
      pid = fork();
      if (pid < 0) {
          fprintf(stderr, "Fork failed\n");
          return -1;
      }
      if(pid > 0){ // Parent
        /* Parent */
        close(pipefd2[0]);
        write(pipefd2[1], curr_result, strlen(curr_result)+1);
        close(pipefd[1]);
        
        char ch;
        //waitpid(pid, &ret, 0);
        while(read(pipefd[0], &ch, 1) > 0)
        {
          curr_result[curr_result_wr] = ch;
          ++curr_result_wr;
        }
        curr_result[curr_result_wr] = '\0';
        printf("%s----------\nResult Length: %ld\n\n----------------------------------------------------------------\n\n", curr_result, strlen(curr_result));
      } else { 
        /* Child */
        printf("THis is child: %s\n-----\n", curr_result);
        close(pipefd[0]);
        close(STDOUT_FILENO);
        dup2(pipefd[1], STDOUT_FILENO);
        
        close(pipefd2[1]);
        close(STDIN_FILENO);
        dup2(pipefd2[0], STDIN_FILENO);
        
        string_to_token(curr_cmd);
        execvp(cmd[0], cmd);
        return 0;
      }
      ++curr_cmd;
    }
  }
}
// ls -al | ls | cat myshell.c 
// ls -al | cat -n