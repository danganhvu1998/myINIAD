typedef struct whatever001
{
    char name[100];
    int score;
} result;

void printResult(result *A);
void changeName(result *A, char nameNew[100]);
void changeScore(result *A, int score);
