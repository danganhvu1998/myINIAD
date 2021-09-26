package four;

public class Citrus extends Plant implements Edible {
    private String color;
    private boolean sweet;
    private boolean sour;

    public Citrus(int price, String color, boolean sweet) {
        super(price);
        this.color = color;
        this.sweet = sweet;
        this.sour = true;
    }

    public boolean isSweet() {
        return this.sweet;
    }

    public boolean isSour() {
        return this.sour;
    }

    @Override
    public String getColor() {
        return this.color;
    }
}
