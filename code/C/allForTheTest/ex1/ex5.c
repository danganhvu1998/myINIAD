#include <stdio.h>
#include "ex1_5.h"

int count_elms(unsigned char v, FILE *fp){
    char ch[1000005];
    int ans=0;
    fseek(fp, 0, SEEK_END);
    int filesize = ftell(fp);
    fseek(fp, 0, SEEK_SET);
    fread(ch, sizeof(char), filesize, fp );
    for(int i=0;i<filesize;i++){
        if(ch[i]==v) ++ans;
    }
    return ans;
}