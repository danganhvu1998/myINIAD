#include <stdio.h>
#include <string.h>

int main(){
    char *text = "I am a student at INIAD!";
    FILE *textFile = fopen("text.txt", "w");
    fwrite(text, 1, strlen(text), textFile);
    fclose(textFile);
}