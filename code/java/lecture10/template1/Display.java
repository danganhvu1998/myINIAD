package sample10.template1;

import java.util.List;

abstract public class Display {
    public void print(String title, String copyright, List<Content> contents) {
        printHeader(title);
        for(Content content : contents) {
            printContent(content);
        }
        printFooter(copyright);
    }

    abstract protected void printHeader(String title);
    abstract protected void printContent(Content content);
    abstract protected void printFooter(String copyright);
}