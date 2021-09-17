package sample9.observer2;

import java.io.IOException;
import java.io.File;

public class Main {
    public static void main(String[] args) throws IOException {
        InputScanner scanner = new InputScanner();
        EchoObserver observer = new EchoObserver();
        scanner.addObserver(observer);

        scanner.execute();
    }
}
