#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{
    volatile int v = 1;
    
    pid_t pid = fork();
    if (pid < 0) {
        fprintf(stderr, "Fork failed\n");
        return -1;
    }

    if (pid > 0) {
        /* Parent */
        int ret;
        waitpid(pid, &ret, 0);

        printf("v = %d\n", v);
        return 0;
    }
    else {
        /* Child */
        v++;
    }
}
