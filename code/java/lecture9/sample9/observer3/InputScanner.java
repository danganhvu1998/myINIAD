package sample9.observer3;

import java.util.List;
import java.util.ArrayList;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class InputScanner {
    private List<Observer> observers = new ArrayList<Observer>();
    private String lastInput;

    public InputScanner() {
    }

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

    public void execute() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        
        for(;;) {
            lastInput = br.readLine();
            notifyObserver();
        }
    }

    public String getLastInput() {
        return lastInput;
    }
}