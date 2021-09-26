public class Book {
    String name;
    Author author;
    int price;

    Book (String name, Author author) {
        this.name = name;
        this.author = author;
    }

    Book (String name, Author author, int price) {
        this.name = name;
        this.author = author;
        this.price = price;
    }

    String getName () {
        return this.name;
    }

    String getAuthor () {
        return this.author.toString();
    } 

    int getPrice () {
        return this.price;
    }

    void setPrice (int price) {
        this.price = price;
    }

}
