double pi(int n)
{   
    double q0, q1, q2, q3, q4, q5;
    double x0, x1, x2;
    double y0, y1, y2, y3, y4;
    int i;
    i0;
    while (i1 < n) {
        q4 = phi(q3, q0);
        x0 = n * 2;
        x1 = x0 + 1;
        x2 = 1 / x2;

        y0 = i % 2;
        if (y0==0) {
            q1 = q4 + x2;
        } else {
            q2 = q4 - x2;
        }
        q3 = phi(q1, q2);
        i++;
    }
    q5 = q3 * 4.0;
    return q5;
}
