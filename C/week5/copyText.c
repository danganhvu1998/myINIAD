#include <stdio.h>

int main(void){
  char ch[10];
  FILE * fp1 = fopen("text.txt", "r");
  FILE * fp2 = fopen("text_copy.txt", "w");

  while (!feof(fp1)){
        fread(ch, sizeof(char), 1, fp1);
        fwrite(ch, sizeof(char), 1, fp2);
  }
  fclose(fp1);
  fclose(fp2);
}
