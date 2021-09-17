package animal;

public class Animal {
    protected String stomatch;
    public String getStomatch() {
        return this.stomatch;
    }
    public void get() {
        this.stomatch = "full";
    }
    public void run() {
        this.stomatch = "hungry";
    }
}
