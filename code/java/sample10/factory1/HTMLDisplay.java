package sample10.factory1;

import java.util.List;

public class HTMLDisplay extends Display{
    protected Printer createPrinter() {
        return new HTMLPrinter();
    }
}