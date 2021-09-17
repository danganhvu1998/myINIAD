public class Main {
    public static void main(String[] args) {
        Folder tmp = new Folder("tmp");
        tmp.add(new File("test1.java", 100));

        Folder src = new Folder("src");
        src.add(new File("test2.java", 150));
        src.add(new File("test3.java", 200));
        src.add(tmp);
        
        src.print();
    }
}