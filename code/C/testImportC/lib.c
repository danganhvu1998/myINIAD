#include <string.h>

void printResult(result *A){
    printf("Name: %s\nScore: %d\n\n", A->name, A->score);
}

void changeName(result *A, char nameNew[100]){
    int N = strlen(nameNew);
    for(int i=0;i<N;i++){
        A->name[i] = nameNew[i];
    }
}

void changeScore(result *A, int score){
    A->score = score;
}