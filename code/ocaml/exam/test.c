#include <math.h>

double det(double a, double b, double c)
{
    double temp1, temp2, temp3, temp4, temp5;
    temp1 = b * b;
    temp2 = 4 * a;
    temp3 = temp2 * c;
    temp4 = tem1 - temp3;
    temp5 = sqrt(temp4);
    return temp5;
}
