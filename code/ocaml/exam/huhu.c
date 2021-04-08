int foo(int a, int b)
{
    int c0, c1, c, d;

    if (a > b) {
       c0 = a + b;
    }
    else {
       c1 = a - b;
    }
    c = phi(c0, c1);
    d = c * 2;
    return d;
}
