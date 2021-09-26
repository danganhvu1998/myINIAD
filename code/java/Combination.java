public class Combination {
    public static int combination(int n, int r) {
        int res = 1;
        for (int i = 0; i < r; i++) {
            res *= (n-i);
            res /= (i+1);
        }
        return res;
    }

    public static void main(String[] args) {
        int n = 10;
        int r = 3;
        int c = combination(n, r);
        System.out.printf("C(%d, %d) = %d\n", n, r, c);
    }
}