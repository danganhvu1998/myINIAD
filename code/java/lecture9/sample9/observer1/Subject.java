package sample9.observer1;

import java.util.List;
import java.util.ArrayList;

abstract public class Subject {
    private List<Observer> observers = new ArrayList<Observer>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void deleteObserver(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObserver() {
        for(Observer observer : observers) {
            observer.update(this);
        }
    }

    abstract public String getStatus();
}