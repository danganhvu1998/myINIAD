#include <stdio.h>

int main(void){
    FILE * fp =  fopen("text_copy.txt", "r");
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);

    /* Return the file pointer to the beginning */
    fseek(fp, 0, SEEK_SET);

    printf("File size = %d\n", filesize);

    fclose(fp);
}
