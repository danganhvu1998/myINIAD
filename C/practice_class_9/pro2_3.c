#include <stdio.h>
#include <math.h>

double my_exp_auto(double x){
    double ans = 1.0, y = 1.0;
    double limit = pow(2, -52);
    int i = 1;

    while (1){
        y = y*x/i;
        if(y/ans<limit && -y/ans<limit) break;
        ans += y;
        i++;
    }

    return ans;
}


double my_exp_acc(double x){
  if (x > 0){
    return my_exp_auto(x);
  }
  else if(x == 0){
    return 1.0;
  }

  return 1.0/my_exp_auto(-x);
}


int main(void){
  double x = -20.0;
	
  printf("my_exp_auto(%lf) = %17.13lf \n", x, my_exp_auto(x));
  printf("my_exp_acc(%lf) = %17.13lf \n", x, my_exp_acc(x));
  printf("exp(%lf) = %17.13lf \n", x, exp(x));
}

