public class Combination {
    public static int fact(int n) {
        int res = 1;
        while (n > 0) {
            res *= n;
            n--;
        }
        return res;
    }
    public static int combination(int n, int r) {
        return (fact(n) / (fact(r) * fact(n-r)));
    }

    public static void main(String[] args) {
        int n = 10;
        int r = 3;
        int c = combination(n, r);
        System.out.printf("C(%d, %d) = %d\n", n, r, c);
    }
}
