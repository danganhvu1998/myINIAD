package sample1.pkg1;
import sample1.pkg2.Student;

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Taro", 3);
        System.out.printf("%s %d\n", student.getName(), student.getGrade());
    }
}
