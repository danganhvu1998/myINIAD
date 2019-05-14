#include <stdio.h>
#include <string.h>
short checkChar(char a){
    if(a>='a' && a<='z') return 1;
    if(a>='A' && a<='Z') return 1;
    if(a>='0' && a<='9') return 1;
    return 0;
}

int main(void){
    char ch[100];
    int count = 0, curr=0;
    while(!feof(stdin)){
        fread(ch, 1, sizeof(ch), stdin );
        int N = strlen(ch);
        for(int i=0;i<N;i++){
            if(curr == 1){
                if(checkChar(ch[i])){
                    curr = 1;
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
            printf("%c %d %d\n", ch[i], count, N);
        }
    }
    printf("%d", count);
}
