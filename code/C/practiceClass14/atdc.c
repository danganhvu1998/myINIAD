#include <stdio.h>
#include <string.h>

void hoge(){
  printf("HogeHoge\n\n");
}

void fuga(){
  printf("FugaFuga\n\n");
}

void piyo(){
  printf("PiyoPiyo\n\n");
}

struct command{
  char c[20];
  void (*p)(void);
};

struct command List[3] = {
    {"hoge", hoge}, 
    {"fuga", fuga}, 
    {"piyo", piyo}, 
};

int main(void){
  char command[20];

  while(1){
    printf(">>> Please input a command : hoge, fuga, piyo, exit \n>>> ");
    scanf("%s", command);

    for(int i = 0; i < 3; i++){
      if (!strcmp(command, List[i].c)) {
        List[i].p();
      }
    }

    if (!strcmp(command, "exit")) {
      break;
    }

  }
}
