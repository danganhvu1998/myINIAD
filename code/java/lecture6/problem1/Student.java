package problem1;

public class Student extends Person {
    final String id;
    public Student(String name, int age, String id) {
        super(name, age);
        this.id = id;
    }
}
