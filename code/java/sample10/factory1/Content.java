package sample10.factory1;

public class Content {
    private String title;
    private String description;
    private String author;

    public Content(String title, String author, String description) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthor() {
        return author;
    }
}