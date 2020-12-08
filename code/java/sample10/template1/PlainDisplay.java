package sample10.template1;

import java.util.List;

public class PlainDisplay extends Display{
    protected void printHeader(String title) {
        System.out.printf("******************************\n\n");
        System.out.printf("%s\n\n", title);
        System.out.printf("******************************\n");
    }

    protected void printContent(Content content) {
        System.out.printf("**** %-20s ****\n", content.getTitle());
        System.out.printf("\n", content.getAuthor());
        System.out.printf("%s\n", content.getDescription());
    }

    protected void printFooter(String copyright) {
        System.out.printf("\n(c):%s\n", copyright);
    }
}
