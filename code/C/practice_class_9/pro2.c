#include <stdio.h>
#include <math.h>

double my_exp(double x, int n){
    double ans = 1.0, y = 1.0;

    for (int i = 1; i <= n; i++){
        y = y*x/i;
        ans += y;
        printf("%d %17.30lf %17.30lf\n", i, y, ans);
    }

    return ans;
}

int main(void){
  int n = 100;
  double x = -20.0;
  printf("       my_exp_auto(%lf) = %17.30lf \n", x, my_exp(x, n));
  printf("               exp(%lf) = %17.30lf \n", x, exp(x));
  x = -x;
  printf("my_exp_auto(%lf) = %17.30lf \n", x, my_exp(x, n));
  printf("        exp(%lf) = %17.30lf \n", x, exp(x));
}
