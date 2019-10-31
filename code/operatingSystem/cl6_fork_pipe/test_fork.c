#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(){
  pid_t pid = fork();
  if(pid > 0){ // Parent
    int ret;
    waitpid(pid, &ret, 0);
    printf("Child returned %d\n", ret);
  } else {
    char* cmd[] ={"ls", "-al", NULL};
    execvp(cmd[0], cmd);
    return 0;
  }
  return 0;
}