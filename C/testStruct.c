#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct base10e4 {
    int value;
    struct linkedList *next;
};

void printBase10e4(struct base10e4 *num10e4){
    struct base10e4 *current;
    int save[20000];
    int len = 0;
    current = num10e4;
    while(current!=NULL){
        save[len] = current->value;
        ++len;
        current = current->next;
    }
    print("\n");
    for(int i=len;)
    print("\n");
}

struct base10e4 charToBase10e4(char *base10e4Num){
    struct base10e4 *t, *temp, *result = NULL;
    int len = strlen(base10e4Num);
    int curr = len - len%4 + 4;
    int currentPartValue = 0;
    //##############################################
    while(curr!=0){
        if(curr>len) {
            currentPartValue = 0;
        } else {
            currentPartValue = currentPartValue*10+base10e4Num[curr-1]-'0';
        }
        if(curr%4==1){
            temp->value = currentPartValue;
            currentPartValue = 0;
            if(result==NULL){
                result = temp
            }
        }
    }

}

int main(){
    printf("%s", returnHelloWorld());
}
