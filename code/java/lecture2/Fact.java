public class Fact {
    public static int fact(int n) {
        int fact=1;   
        for(int i=1; i<=n; i++){    
            fact = fact*i;    
        }    
        return fact;
    }

    public static void main(String[] args) {
        int n = 5;
        int f = fact(n);
        System.out.printf("fact(%d) = %d\n", n, f);
    }
}
