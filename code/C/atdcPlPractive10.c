#include <stdio.h>
#include <math.h>

void solve_quadratic_equation(double a, double b, double c, double *x1, double *x2){
  double D = b*b-4*a*c;
  if (D > 0) {
    *x1 =  (-b+sqrt(D))/a/2;
    *x2 =  (-b-sqrt(D))/a/2;
    if(*x1<0.000001 || -*x1<0.000001){
        *x1 = c/a/ *x2;
    } else if(*x2<0.000001 || -*x2<0.000001){
        *x2 = c/a/ *x1;
    }
  }
  else if (D == 0) {
    *x1 = -b/(2.0*a);
    *x2 = *x1;
  }
  else {
    printf("This equation has no real number solution\n");
  }
}

int main(void){
  double a = 1.0, b = pow(2, 28), c = 1.0;
  double x1, x2;

  solve_quadratic_equation(a, b, c, &x1, &x2);
  printf("x1 = %19.17lf, x2 = %19.17lf\n", x1, x2);
}
