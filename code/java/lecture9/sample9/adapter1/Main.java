package sample9.adapter1;

public class Main {
    public static void main(String[] args) {
        Printer printer = new Printer();
        PrintableStudent st = new PrintableStudent("01", "Enryo", "Inoue");
        printer.print(st);
    }
}
