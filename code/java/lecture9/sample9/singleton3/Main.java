package sample9.singleton3;

public class Main{
    public static void main(String[] args) {
        Shop shop = new Shop();
        Seller tocho = new Seller("Yamada", "Tocho");
        Seller coop = new Seller("Yoshida", "Coop");
        Customer taro = new Customer("Taro");
        Customer jiro = new Customer("Jiro");
        taro.charge(1000);
        jiro.charge(500);
        
        Item ramen = new Item(tocho, "Ramen", 400);
        Item okayu = new Item(tocho, "Okayu", 400);
        Item pen = new Item(coop, "Pen", 100);
        Item paper = new Item(coop, "Paper", 100);

        shop.register(ramen);
        shop.register(okayu);
        shop.register(pen);
        shop.register(paper);

        shop.buy(taro, "Ramen");
        shop.buy(taro, "Pen");
        shop.buy(jiro, "Okayu");
        shop.buy(jiro, "Paper");
    }
}