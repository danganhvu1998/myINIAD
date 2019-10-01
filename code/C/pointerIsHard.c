#include <stdio.h>

int maxInt(int *intList, int sideOfArray){
    int result = 0;
    for(int i=0; i<sideOfArray; i++){
        if(result<intList[i]){
            result = intList[i];
        }
    }
    return result;
}

int minInt(int *intList, int sideOfArray){
    int result = 1000;
    for(int i=0; i<sideOfArray; i++){
        if(result>intList[i]){
            result = intList[i];
        }
    }
    return result;
}

int value_range(int *intList, int sideOfArray){
    return maxInt(intList, sideOfArray)-minInt(intList, sideOfArray);
}

int main(){
    int intList[] = {10, 11, 12, 14};
    int sideOfArray = sizeof(intList) / sizeof(intList[0]);
    printf("%d", value_range(intList, sideOfArray));
}