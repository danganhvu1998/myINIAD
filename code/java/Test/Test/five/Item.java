package five;

public class Item implements Comparable<Item> {
    private String name;

    public Item(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    @Override
    public int compareTo(Item other) {
        return this.name.compareTo(other.name);
    }
}