extern int print_int(int);
extern int print_string(char*);

int fib(int n)
{
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

int main()
{
    int i;

    i = 0;
    while (i != 11) {
        print_string("fib(");
        print_int(i);
        print_string(") = ");
        print_int(fib(i));
        print_string("\n");
        i = i + 1;
    }
    return 0;
}
