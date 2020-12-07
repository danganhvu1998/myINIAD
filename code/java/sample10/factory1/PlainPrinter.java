package sample10.factory1;

import java.util.List;

public class PlainPrinter extends Printer{
    private StringBuilder builder = new StringBuilder();

    protected void setHeader(String title) {
        builder.append("******************************\n\n");
        builder.append(String.format("%s\n\n", title));
        builder.append("******************************\n");
    }

    protected void setContent(Content content) {
        builder.append(String.format("**** %-20s ****\n", content.getTitle()));
        builder.append(String.format("\n", content.getAuthor()));
        builder.append(String.format("%s\n", content.getDescription()));
    }

    protected void setFooter(String copyright) {
        builder.append(String.format("\n(c):%s\n", copyright));
    }
    
    public void print() {
        System.out.print(builder.toString());
    }
}
