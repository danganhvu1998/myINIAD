package five;

import java.util.*;

public class Shelf {
    private ArrayList<Item> items = new ArrayList<Item>();

    public void push(Item item) {
        items.add(item);
    }

    public void print() {
        Collections.sort(items);
        for (Item item : items) {
            System.out.println(item.getName());
        }
    }
}
