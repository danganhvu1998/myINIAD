#include <stdio.h>

int main(void){
    FILE * fp =  fopen("text_copy.txt", "r");
    char *file[100];
    /* Thinking here */(fp, 0, /* Thinking here */);
    int filesize = /* Thinking here */(fp);

    /* Return the file pointer to the beginning */
    /* Thinking here */(fp, 0, /* Thinking here */);

    printf("File size = %d\n", filesize);

    fclose(fp);
}
