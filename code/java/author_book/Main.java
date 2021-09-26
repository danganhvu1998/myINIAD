public class Main {
    public static void main(String[] args) {
        Author author = new Author("Alice", "alice@example.com");
        Book book = new Book("DummyBook", author, 5000);
        System.out.printf("BOOK: %s\nAUTHOR: %s\nPRICE: %d\n\n", book.getName(), book.getAuthor(), book.getPrice());
        book.author.setEmail("alice2@example.com");
        book.setPrice(5500);
        System.out.printf("BOOK: %s\nAUTHOR: %s\nPRICE: %d\n\n", book.getName(), book.getAuthor(), book.getPrice());
    }
}
