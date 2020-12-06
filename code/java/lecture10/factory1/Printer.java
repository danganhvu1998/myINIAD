package sample10.factory1;

import java.util.List;

abstract public class Printer {
    abstract public void print();

    abstract protected void setHeader(String title);
    abstract protected void setContent(Content content);
    abstract protected void setFooter(String copyright);
}