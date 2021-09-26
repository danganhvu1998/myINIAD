public class Main {
    public static void main(String[] args) {
        AirConditioner ac = new AirConditioner();
        ac.addObserver(new MyObserver());
        ac.set(1, 25.0);
        ac.addObserver(new MyObserver());
        ac.set(0, 20.0);
    }
}