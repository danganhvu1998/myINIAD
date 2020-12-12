package sample11.assignment1;

public class Book extends Item {
    public Book(String name, int price) {
        super(name, price);
    }

    public int getTaxPrice() {
        return (int)(price * 1.1);
    }
}