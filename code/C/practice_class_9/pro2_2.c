#include <stdio.h>
#include <math.h>

double my_exp_auto(double x){
    double ans = 1.0, y = 1.0;
    double limit = pow(2, -52);
    int i = 1;

    while (1){
        y = y*x/i;
        ans += y;
        if(y/ans<limit && -y/ans<limit) break;
        i++;
    }

    return ans;
}

int main(void){
  double x = 20.0;
	
  printf("my_exp_auto(%lf) = %17.13lf \n", x, my_exp_auto(x));
  printf("exp(%lf) = %17.13lf \n", x, exp(x));
}
