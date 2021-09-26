#include <stdio.h>

int main(){
    enum week0 {mon, tue, wed, weed, fri, sat, sun};
    enum week1 {mon1=0x01, tue1=0x02, wed1=0x08, weed1=0x10, fri1=0x20, sat1=0x40, sun1=0x60};
    enum week2 {mon2, tue2, wed2, weed2=0, fri2, sat2, sun2=0};
    char *varListName[] = {"mon", "tue", "wed", "weed", "fri", "sat", "sun", "mon1", "tue1", "wed1", "weed1", "fri1", "sat1", "sun1", "mon2", "tue2", "wed2", "weed2", "fri2", "sat2", "sun2"};
    int varList[] = {mon, tue, wed, weed, fri, sat, sun, mon1, tue1, wed1, weed1, fri1, sat1, sun1, mon2, tue2, wed2, weed2, fri2, sat2, sun2};
    for(int i=0;i<21;i++){
        printf("%s %d\n", varListName[i], varList[i]);
    }
    
}