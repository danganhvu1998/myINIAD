# Important Note

## Command

+ **man cmd:** Read manual of cmd
+ **curl -s link_download:** Download file in link_download
+ **grep 'regex_systax':** Find line with regex_systax in file_name
+ **cat:** Displace text
  + -n: show line number at the begin of all line
+ **head -n:** First n lines
+ **tail -n:** Last n lines
+ EXAMPLE
  + `curl -s https://www.rfc-editor.org/rfc/rfc6588.txt | grep '^[0-9]\.' | cat | tail -5`

## C

+ `int main(int argc, char* argv[])`
  + argc: number of parameters
  + argv[]: Parameters
+ `fscanf`
  + `fscanf(uptime_file, "%lf", &up_time_in_second_float)`

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
