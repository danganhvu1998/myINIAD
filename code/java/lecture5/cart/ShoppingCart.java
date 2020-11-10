package cart;

import java.util.Arrays;
import java.util.List;

public abstract class ShoppingCart {
    private List<Product> items;
    private double total;
    private double totalWithTax;

    public ShoppingCart() {
        this.total = 0;
        this.totalWithTax = 0;
    }

    abstract public void addItem(Product p);
    abstract public void removeItem(Product p);

    public String getReceipt () {
        
    }
    
}
