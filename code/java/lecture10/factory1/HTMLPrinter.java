package sample10.factory1;

import java.util.List;

public class HTMLPrinter extends Printer {
    private StringBuilder builder = new StringBuilder();

    protected void setHeader(String title){
        builder.append("<!DOCTYPE html>\n");
        builder.append("<html>\n<head>\n<meta charset=\"UTF-8\">\n");
        builder.append(String.format("<title>%s</title>\n</head>\n<body>\n", title));
        builder.append(String.format("<h1>%s</h1>", title));
    }

    protected void setContent(Content content) {
        builder.append(String.format("<h2>%s</h2>\n", replaceNewline(content.getTitle())));
        builder.append(String.format("<p><small>Author: %s</small></p>\n", replaceNewline(content.getAuthor())));
        builder.append(String.format("<p>%s</p>\n", replaceNewline(content.getDescription())));
    }

    protected void setFooter(String copyright) {
        builder.append(String.format("<footer>Copyright:%s</footer>\n", copyright));
        builder.append("</body>\n</html>\n");
    }
    
    public void print() {
        System.out.print(builder.toString());
    }

    private String replaceNewline(String from) {
        return from.replace("\n", "<br>");
    }
}
