# Important Note

## Command

+ **man cmd:** Read manual of cmd
+ **curl -s link_download:** Download file in link_download
+ **grep 'regex_systax':** Find line with regex_systax in file_name
+ **cat:** Displace text
  + -n: show line number at the begin of all line
+ **head -n:** First n lines
+ **tail -n:** Last n lines
+ **wc -l:** Count line
+ EXAMPLE
  + `curl -s https://www.rfc-editor.org/rfc/rfc6588.txt | grep '^[0-9]\.' | cat | tail -5`
  + `curl -s https://moocs-files.iniad.org/2018/OS/08/philosopher.c | cat -n | grep 'pthread'`

## C

+ `int main(int argc, char* argv[])`
  + argc: number of parameters
  + argv[]: Parameters
+ `fscanf`
  + `fscanf(uptime_file, "%lf", &up_time_in_second_float)`
+ System Call
  + #include <unistd.h>
  + int `open(const char* path, int flags [, int mode])`
    + Flags:
      + O_RDONLY
      + O_RDWR
      + O_WRONLY
    + When success, return integer that >= 0
  + int `read(int fd, void* buf, int count)`
    + Read from file specified by fd at most count bytes, then store data to buf
    + Return the number of readed bytes -> When reached EOF, 0 is returned
  + int `write(int fd, void* buf, int count)`
    + Write to file specified by fd at most count bytes the data stored in buf
    + Return the number of written bytes
  + int `close(int fd)`
    + Close file
+ Process and its POSIX API
  + fork
  + wait, waitpid
  + execvp
  + [MyShell.c](/code/operatingSystem/cl6_fork_pipe/myshell_optional.c)
+ Thread and its POSIX API
  + pthread_create
  + pthread_join
  + pthread_detach
  + [ThreadExample](/code/operatingSystem/cl7_thread/hw1_stack.c)
  + Compile: `gcc -pthread sample.c -o sample`
+ Snchronization Of Thread - Mutex
  + pthread_mutex_init
  + phthead_mutex_destroy
  + pthread_mutex_lock
  + pthread_mutex_unlock
+ Thread - Conditional Wait using Condition Variable
  + pthread_cond_init
  + pthread_cond_destroy
  + pthread_cond_wait: **While waiting for notification, mutex lock is temporarily released**
  + pthread_cond_broadcast
  + [Example](/code/operatingSystem/cl7_thread/send_and_receive_msg.c)
+ Socket API
  + socket() - create new socket
  + bind() - Binds my IP address/port to socket
  + listen() - Prepares a queue for accepting incoming connection requests
  + accept() -  Wiaits for connection request
  + connect() - Connect to a server
  + getaddrinfo() - Converts host name to IP address
  + [Example](/code/operatingSystem/cl10_socket/server.c)
+ Memory-mapped file
  + nmap()
  + munmap()
  + [Example](/code/operatingSystem/cl11_virtualMemory/ass.c)

## BASH

+ C Makefile
  
  + ```bash
    hellofunc: hellomake.o hellofunc.o
      gcc -Wall $^ -lm -o $@
    hellomake.o: hellomake.c
      gcc -Wall -c $< -o $@
    hellofunc.o: hellofunc.c
      gcc -Wall -c $< -o $@
    clean:
      rm *.o
    ```

    + $^: All parameters
    + $<: First parameter
    + $@: Result
