#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]){
  int string_length;
  char buf[300];
  while( fgets(buf, sizeof(buf), stdin)!=NULL ){
    for(int i=0;i<sizeof(buf);i++){
      if(buf[i]>='0' & buf[i]<='9'){
        buf[i]='*';
      }
    }
    printf("%s", buf);
  } 
}