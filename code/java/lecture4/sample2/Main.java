package sample2;

public class Main {
    public static void main(String[] args) {
        Student st = new Student("1234", "Taro", 1);
        System.out.println(st.getProfile());
        Teacher t = new  Teacher("1000", "Inoue", "Professor");
        System.out.println(t.getProfile());
    }

    private static void printMember(Member m) {
        System.out.printf("%s %s\n", m.id, m.name);
        System.out.println(m.getEmail());
    }
}
