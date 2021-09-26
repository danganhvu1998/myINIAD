package function;

public class Factorial implements Function {
    public double evaluate (double x) {
        double fact=1; 
        for(int i=1;i<=x;i++){    
            fact=fact*i;    
        }    
        return fact;
    }
}
