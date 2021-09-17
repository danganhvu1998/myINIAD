public class Main {
    public static void main(String[] args) {
        AirConditioner.getInstance().set(1, 20.0);
        System.out.printf("Mode:%d\n", AirConditioner.getInstance().getMode());
        System.out.printf("Temperature:%f\n", AirConditioner.getInstance().getTemperature());
    }
}