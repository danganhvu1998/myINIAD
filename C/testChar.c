#include <stdio.h>
#include <string.h>

int charToInt(char *num){
    int len = strlen(num);
    int result = 0;
    for(int i=0; i<len;i++){
        result = result*10+num[i]-'0';
    }
    return result;
}

int main(){
    char *whatever = "1293";
    printf("%d", charToInt(whatever));
}