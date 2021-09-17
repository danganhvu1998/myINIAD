package sample11.assignment1;

public class DeliciousFood extends Item implements Eatable{
    public DeliciousFood(String name, int price) {
        super(name, price);
    }

    public int getTaxPrice() {
        return (int)(price * 1.08);
    }

    public String getTaste() {
        return "Delicious";
    }
}
