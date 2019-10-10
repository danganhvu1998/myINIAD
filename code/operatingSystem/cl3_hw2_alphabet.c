#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]){
  int string_length;
  char buf[300];
  int count_alphabet_char[50];
  for(char ch='a'; ch<='z';ch++){
    count_alphabet_char[ch-'a'] = 0;
  }
  while( fgets(buf, sizeof(buf), stdin)!=NULL ){
    for(int i=0;i<sizeof(buf);i++){
      if(buf[i]>='a' & buf[i]<='z'){
        ++count_alphabet_char[buf[i]-'a'];
      }
    }
  }
  for(char ch='a'; ch<='z';ch++){
    printf("%c : %d\n", ch, count_alphabet_char[ch-'a']);
  }
}