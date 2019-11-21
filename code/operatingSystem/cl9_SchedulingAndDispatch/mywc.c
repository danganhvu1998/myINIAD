#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <string.h>
#include <stdlib.h>
#include <fcntl.h>
#include <ctype.h>

int main(int argc, char* argv[]){
  int fr, rlen;
  int charCount=0, wordCount=0, lineCount=0;
  int inWord = 0;
  unsigned char buf[8192];
  fr = open(argv[1], O_RDONLY);
  for(;;){
    rlen = read(fr, buf, sizeof(buf));
    if(rlen<=0){
      break;
    }  else {
      charCount += rlen;
      for(int i=0; i<rlen;i++){
        if( isspace(buf[i]) ){
          inWord = 0;
        } else {
          if(inWord == 0){
            wordCount++;
            inWord = 1;
          }
        }
        if(buf[i]=='\n') lineCount++;
      }
      // printf("%s", buf);
    }
  }
  printf("%d %d %d %s", lineCount, wordCount, charCount, argv[1]);
  close(fr);

}