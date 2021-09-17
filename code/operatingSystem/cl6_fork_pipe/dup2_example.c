#include <unistd.h>
#include <stdio.h>
#include <string.h>

int main()
{
    pid_t pid;
    int pipefd[2], ret;

    ret = pipe(pipefd);
    if (ret < 0) {
        fprintf(stderr, "Pipe failed\n");
        return -1;
    }
    
    pid = fork();
    if (pid < 0) {
        fprintf(stderr, "Fork failed\n");
        return -1;
    }

    if (pid > 0) {
        /* Parent */
        close(pipefd[0]);
        
        close(STDOUT_FILENO);
        dup2(pipefd[1], STDOUT_FILENO);

        char* cmd[] = {"ls", "-al", NULL};
        execvp(cmd[0], cmd);
    }
    else {
        /* Child */
        close(pipefd[1]);

        close(STDIN_FILENO);
        dup2(pipefd[0], STDIN_FILENO);

        char* cmd[] = {"cat", "-n", NULL};
        execvp(cmd[0], cmd);
    }

    return 0;
}