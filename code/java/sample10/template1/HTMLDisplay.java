package sample10.template1;

import java.util.List;

public class HTMLDisplay extends Display{
    protected void printHeader(String title){
        System.out.printf("<!DOCTYPE html>\n");
        System.out.printf("<html>\n<head>\n<meta charset=\"UTF-8\">\n");
        System.out.printf("<title>%s</title>\n</head>\n<body>\n", title);
        System.out.printf("<h1>%s</h1>", title);
    }

    protected void printContent(Content content) {
        System.out.printf("<h2>%s</h2>\n", replaceNewline(content.getTitle()));
        System.out.printf("<p><small>Author: %s</small></p>\n", replaceNewline(content.getAuthor()));
        System.out.printf("<p>%s</p>\n", replaceNewline(content.getDescription()));
    }

    protected void printFooter(String copyright) {
        System.out.printf("<footer>Copyright:%s</footer>\n", copyright);
        System.out.printf("</body>\n</html>\n");
    }

    private String replaceNewline(String from) {
        return from.replace("\n", "<br>");
    }
}
