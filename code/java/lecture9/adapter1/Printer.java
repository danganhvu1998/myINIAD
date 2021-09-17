package sample9.adapter1;

public class Printer{
    public Printer() {
    }

    public void print(Label label) {
        System.out.println("--------------------");
        System.out.printf("|%-18s|\n", label.firstLine());
        System.out.printf("|%-18s|\n", label.secondLine());
        System.out.println("--------------------");
    }
}