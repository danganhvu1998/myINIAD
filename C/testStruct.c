#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct base10e4 {
    int value;
    int position;
    struct linkedList *next;
};

void printBase10e4(struct base10e4 *num10e4){
    struct base10e4 *current;
    current = num10e4;
    print("\n");
    while(current!=NULL){
        printf("%d", current->value);
        current = current->next;
    }
    print("\n");
}

struct base10e4 charToBase10e4(char *base10e4Num){
    struct base10e4 *newBase10e4=NULL;
    struct base10e4 *temp={0,0,NULL};
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
            if(newBase10e4==NULL){
                newBase10e4 = temp
            }
        }
    }

}

int main(){
    printf("%s", returnHelloWorld());
}
