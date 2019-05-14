#include <stdio.h>
#include <string.h>
short checkChar(char a){
    if(a>='a' && a<='z') return 1;
    if(a>='A' && a<='Z') return 1;
    if(a>='0' && a<='9') return 1;
    return 0;
}

int main(void){
    char ch[10000];
    fread(ch, sizeof(char), 10000, stdin );
    int N = strlen(ch), count = 0, curr=0;
    for(int i=0;i<N;i++){
        if(curr == 1){
            if(checkChar(ch[i])){
                continue;
            } else {
                curr = 0;
            }
        } else {
            if(checkChar(ch[i])) {
                count++;
                curr=1;
            } else {
                curr = 0;
            }
        }
    }
    printf("%d", count);
}
