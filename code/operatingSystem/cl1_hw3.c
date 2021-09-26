#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
    int current_hour;
    if(argc < 2) {
        puts("You need to specify an hour");
        return 1;
    } 
    current_hour = atoi(argv[1]);
    if(current_hour<5){
        puts("Good night");
    } else if(current_hour<10){
        puts("Good morning");
    } else if(current_hour<17){
        puts("Hello");
    } else if(current_hour<20){
        puts("Good evening");
    } else {
        puts("Good night");
    }
    return 0;
}