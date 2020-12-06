package five;

public class Main {
    public static void main(String[] args) {
        Shelf shelf = new Shelf();
        shelf.push(new Item("INIAD"));
        shelf.push(new Item("TOYO"));
        shelf.push(new Item("AKABNE"));
        shelf.push(new Item("BKABNE"));
        shelf.push(new Item("CKABNE"));
        shelf.push(new Item("DKABNE"));
        shelf.push(new Item("EKABNE"));
        shelf.print();
    }
}