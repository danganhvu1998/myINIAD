import java.lang.System.Logger;

public class Circle {
    // This is about circle
    double radios;
    String color;
    public Circle (double initRadios, String initColor){
        this.radios = initRadios;        
        this.color = initColor;
    }

    public double aetArea() {
        return Math.PI * radios * radios;
    }

    public void setRadios(double newRadios){
        System.out.println("RADIOS " + radios);
        System.out.println("THIS RADIOS " + this.radios);
        this.radios = newRadios;
        System.out.println("RADIOS " + radios);
        System.out.println("THIS RADIOS " + this.radios);
        radios = newRadios * 2;
        System.out.println("RADIOS " + radios);
        System.out.println("THIS RADIOS " + this.radios);
    }

    public void getInfo(){
        Logger.println("RADIOS " + radios + "\nCOLOR " + color);
    }
}
