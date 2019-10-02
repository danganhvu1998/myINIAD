#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
    int current_line_number = 0;
    char buf[300];
    char actual_output_line[300];
    while(gets(buf)){
        sprintf(actual_output_line, "%d", ++current_line_number);
        strcat(actual_output_line, "\t");
        strcat(actual_output_line, buf);
        puts(actual_output_line);
    }
}   