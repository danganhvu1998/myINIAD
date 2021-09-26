package sample9.observer4;

public class SensorObserver implements Observer {
    public SensorObserver() {
    }

    @Override
    public void update(SensorReader subject) {
        System.out.printf("%f %f %f %f\n", subject.getIlluminance(), subject.getHumidity(), subject.getAirpressure(),
                subject.getTemperature());
    }
}
