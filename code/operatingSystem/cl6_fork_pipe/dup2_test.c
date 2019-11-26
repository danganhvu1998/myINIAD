#include <unistd.h>
#include <stdio.h>
#include <string.h>

int main()
{
    pid_t pid;
    int pipefd[2], pipefd2[2], ret;

    ret = pipe(pipefd2);
    ret = pipe(pipefd);
    pid = fork();

    if (pid > 0) {
        /* Parent */
        char buf[]="Result from last cmd line 1\nResult from last cmd line 2\nResult from last cmd line 3\n";
        close(pipefd[0]);
        write(pipefd[1], buf, strlen(buf));
        close(pipefd[1]);

        close(pipefd2[1]);
        
        char ch;
        waitpid(pid, &ret, 0);
        while(read(pipefd2[0], &ch, 1) > 0)
        {
           printf("%c", ch);
        }
    }
    else {
        /* Child */
        close(pipefd[1]);
        close(STDIN_FILENO);
        dup2(pipefd[0], STDIN_FILENO);
        close(pipefd[0]);

        close(pipefd2[0]);
        close(STDOUT_FILENO);
        dup2(pipefd2[1], STDOUT_FILENO);

        char* cmd[] = {"cat", "-n", NULL};
        execvp(cmd[0], cmd);
        return 0;
    }

    return 0;
}