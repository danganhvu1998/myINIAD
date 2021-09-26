public class MyObserver implements Observer {
    @Override
    public void update(AirConditioner ac) {
        System.out.printf("Mode:%d\n", ac.getMode());
        System.out.printf("Temperature:%f\n", ac.getTemperature());
    }
}