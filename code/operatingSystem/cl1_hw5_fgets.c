#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
    int current_line_number = 0, currenly_a_new_line_check = 1;
    char buf[30];
    char new_line_start[30];
    while( fgets(buf, sizeof(buf), stdin)!=NULL ){
        if(currenly_a_new_line_check){
            sprintf(new_line_start, "%d", ++current_line_number);
            strcat(new_line_start, "\t");
            printf("%s", new_line_start);
            currenly_a_new_line_check = 0;
        }
        printf("%s", buf);
        if(buf[strlen(buf)-1] == '\n') currenly_a_new_line_check = 1;
    }
}   