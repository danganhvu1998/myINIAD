#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
  FILE *random_char;
  random_char = fopen("/dev/random", "r");
  char buf[59];
  if( fgets(buf, sizeof(buf), random_char)!=NULL ){
    for(int i=0;i<sizeof(buf);i++){
      if( ('a'<=buf[i] & 'z'>=buf[i] ) | ('A'<=buf[i] & 'Z'>=buf[i] ) | ('0'<=buf[i] & '9'>=buf[i] ) ){
        printf("%c", buf[i]);
      }
    }
  }
  fclose(random_char);

}