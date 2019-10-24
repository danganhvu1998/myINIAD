#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
  FILE *dest_file, *source_file;
  source_file = fopen( argv[1] , "r" );
  dest_file = fopen( argv[2], "w" );
  char buf[1];
  while( fgets(buf, sizeof(buf), source_file)!=NULL ){
    fputs(buf, dest_file);
  }
}