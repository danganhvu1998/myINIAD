package sample10.factory1;

import java.util.List;

abstract public class Display {
    public Printer set(String title, String copyright, List<Content> contents) {
        Printer printer = createPrinter();
        printer.setHeader(title);
        for(Content content : contents) {
            printer.setContent(content);
        }
        printer.setFooter(copyright);
        return printer;
    }

    abstract protected Printer createPrinter();
}