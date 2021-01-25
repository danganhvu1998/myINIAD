public class AirConditioner {
    private static AirConditioner instance = new AirConditioner();
    private int mode = 0;
    private double temperature = 23.0;

    private AirConditioner() {
    }

    public static AirConditioner getInstance() {
        return instance;
    }

    public void set(int mode, double temperature) {
        this.mode = mode;
        this.temperature = temperature;
    }

    public int getMode() {
        return mode;
    }

    public double getTemperature() {
        return temperature;
    }
}