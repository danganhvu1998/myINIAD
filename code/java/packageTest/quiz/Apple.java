package quiz;

public class Apple extends Fruit implements Sellable {
    public Apple(double weight){
        super(weight);
    }

    @Override
    public int getPrice(){
        return 10;
    }
}
