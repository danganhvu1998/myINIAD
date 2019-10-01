#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct base10e4 {
    int value;
    struct base10e4 *next;
};
//All element except last one will represent 4 digit of the big number
int count = 0;
void freeBase10e4(struct base10e4 *num10e4){// holy shit my ram
    struct base10e4 *next;
    while(num10e4!=NULL){
        next = num10e4->next;
        free(num10e4);
        //printf("-> %d\n", ++count);
        num10e4 = next;
    }
}

void printBase10e4(struct base10e4 *num10e4){
    struct base10e4 *current;
    char save[100000];
    int len = 0;
    int tempValue;
    current = num10e4;
    while(current!=NULL){
        tempValue = current->value;
        for(int i=0;i<4;i++){
            save[len+i] = tempValue%10+'0';
            tempValue/=10;
        }
        len+=4;
        current = current->next;
    }
    len--;
    printf("\nPRINT BASE 10E4: ");
    bool started = 0;
    for(int i=len;i>=0;i--){
        if(save[i] == '0' && started == 0) continue;
        started = 1;
        printf("%c", save[i]);
    }
    printf("\n\n");
}

void simplePrintBase10e4(struct base10e4 *num10e4){
    printf("\nSIMPLE PRINT BASE 10E4: START\n");
    struct base10e4 *current;
    current = num10e4;
    while(current!=NULL){
        printf("----> %d\n", current->value);
        current = current->next;
    }
    printf("SIMPLE PRINT BASE 10E4: END\n");
}

struct base10e4* plusBase10e4(struct base10e4 *numA, struct base10e4 *numB){
    struct base10e4 *result = NULL, *tempA, *tempB, *temp, *last = NULL;
    int rememberFromLastPlus = 0, plusValue, tempAVar, tempBVar;
    tempA = numA;
    tempB = numB;
    while(tempA!=NULL || tempB!=NULL || rememberFromLastPlus!=0){
        //######################################
        if(tempA==NULL) tempAVar = 0;
        else {
            tempAVar = tempA->value;
            tempA = tempA->next;
        }
        //######################################
        if(tempB==NULL) tempBVar = 0;
        else {
            tempBVar = tempB->value;
            tempB = tempB->next;
        }
        //######################################
        plusValue = tempAVar + tempBVar + rememberFromLastPlus;
        rememberFromLastPlus = plusValue / 10000;
        plusValue = plusValue % 10000;
        temp = (struct base10e4*)malloc(sizeof(struct base10e4));
        temp->value = plusValue;
        temp->next = NULL;
        if(last != NULL) last->next = temp;
        last = temp;
        if(result==NULL) result = temp;
    } 
    return result;
}

struct base10e4* intMultipleToBase10e4(int numA, int numB, int pos){
    struct base10e4 *result=NULL, *last=NULL , *temp;
    // INIT FIRST VALUE
    for(int i=0; i<pos; i++){
        temp = (struct base10e4*)malloc(sizeof(struct base10e4));
        temp->value = 0;
        temp->next = NULL;
        if(last != NULL) last->next = temp;
        last = temp;
        if(result==NULL) result = temp;
    }
    // MULTIPLE PROCESS
    int multiResult = numA*numB;
    while(multiResult>0){
        temp = (struct base10e4*)malloc(sizeof(struct base10e4));
        temp->value = multiResult % 10000;
        multiResult /= 10000;
        temp->next = NULL;
        if(last != NULL) last->next = temp;
        last = temp;
        if(result==NULL) result = temp;
    }
    return result;
}

struct base10e4* multipleBase10e4(struct base10e4 *numA, struct base10e4 *numB){
    struct base10e4 *tempA, *tempB, *temp, *last, *result, *multipleResult;
    int countA=0, countB;
    result = (struct base10e4*)malloc(sizeof(struct base10e4));
    result->value = 0;
    result->next = NULL;
    tempA = numA;
    while(tempA!=NULL){
        tempB = numB;
        countB = 0;
        while(tempB!=NULL){
            //printf("\n%d %d %d %d\n", countA, countB, tempA->value, tempB->value);
            multipleResult = intMultipleToBase10e4(tempA->value, tempB->value, countA+countB);
            //printBase10e4(multipleResult);
            temp = plusBase10e4(result, multipleResult);
            freeBase10e4(result);
            freeBase10e4(multipleResult);
            result = temp;
            tempB = tempB->next;
            countB++;
        }
        tempA = tempA->next;
        countA++;
    }
    return result;
}

struct base10e4* charToBase10e4(char *base10e4Num){
    struct base10e4 *t, *last = NULL, *result = NULL;
    int len = strlen(base10e4Num);
    int startOfFirstElement = len-4;
    //##############################################
    for(int i=startOfFirstElement; i>-4;i-=4){
        int currentPartValue = 0;
        t = (struct base10e4*)malloc(sizeof(struct base10e4));
        for(int j=0;j<4;j++){
            int nextCharInt = 0;
            if(i+j>=0) nextCharInt = base10e4Num[i+j]-'0';
            currentPartValue = currentPartValue*10+nextCharInt;
        }
        t->next = NULL;
        t->value = currentPartValue;
        if(last != NULL) last->next = t;
        last = t;
        if(result==NULL) result = t;
    }
    return result;
}

struct base10e4* intToBase10e4(int number){
    struct base10e4 *result=NULL, *last=NULL , *temp;
    while(number>0){
        temp = (struct base10e4*)malloc(sizeof(struct base10e4));
        temp->value = number % 10000;
        number /= 10000;
        temp->next = NULL;
        if(last != NULL) last->next = temp;
        last = temp;
        if(result==NULL) result = temp;
    }
    return result;
}

struct base10e4* factorialBase10e4(int numb){
    struct base10e4 *result, *curr, *temp;
    result = (struct base10e4*)malloc(sizeof(struct base10e4));
    result->value = 1;
    result->next = NULL;
    for(int i=1;i<=numb;i++){
        printf("%d/%d\n", i, numb);
        curr = intToBase10e4(i);
        temp = multipleBase10e4(result, curr);
        freeBase10e4(result);
        freeBase10e4(curr);
        result = temp;
    }
    return result;
}

int main(){
    int N;
    struct base10e4 *testValue1, *testValue2, *testValue3, *testValue4, *testValue5, *testValue6;
    scanf("%d", &N);
    testValue1 = factorialBase10e4(N);
    printBase10e4(testValue1);
}