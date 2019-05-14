#include <stdio.h>

int main(void){
  char ch[10], chi[10];

  fread(ch, sizeof(char), 10, stdin );

  for (int i = 0; i < 10; i++){
        chi[9-i] = ch[i];
  }

  fwrite(chi, sizeof(char), 10, stdout);

}
