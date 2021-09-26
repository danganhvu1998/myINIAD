#include <stdio.h>

extern int sum(int n, int m);

int main()
{
    printf("sum(5, 9) = %d\n", sum(5, 9));
    return 0;
}
