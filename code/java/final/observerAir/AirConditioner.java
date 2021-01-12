import java.util.List;
import java.util.ArrayList;

public class AirConditioner {
    private int mode = 0;
    private double temperature = 23.0;
    private List<Observer> observers = new ArrayList<Observer>();

    public AirConditioner() {
    }


    public void set(int mode, double temperature) {
        this.mode = mode;
        this.temperature = temperature;
        notifyObserver();
    }

    public int getMode() {
        return mode;
    }

    public double getTemperature() {
        return temperature;
    }

    // OBS

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObserver() {
        for(Observer observer : observers) {
            observer.update(this);
        }
    }
}