package sample1;

import sample1.pkg1.Member;
import sample1.pkg1.Programmer;
import sample1.pkg2.EngineeringStudent;
import sample1.pkg2.EngineeringTeacher;
import sample1.pkg2.Student;
import sample1.pkg2.Teacher;

public class Main {
    public static void main(String[] args) {
        // Student st = new Student("1234", "Taro", 1);
        // System.out.println(st.getProfile());
        // Teacher t = new  Teacher("1000", "Inoue", "Professor");
        // System.out.println(t.getProfile());

        EngineeringStudent st = new EngineeringStudent("1234", "Taro", 1);
        System.out.printf(st.getProfile());
        checkSkill(st);

        EngineeringTeacher tc = new EngineeringTeacher("1234", "Taro", "Professor");
        System.out.printf(tc.getProfile());
        checkSkill(tc);
    }

    // private static void printMember(Member m) {
    //     System.out.printf("%s %s\n", m.id, m.name);
    //     System.out.println(m.getEmail());
    // }

    private static void checkSkill (Programmer p) {
        if (p.canWritePython()) {
            System.out.printf("I can write Python.\n");
        }
        if (p.canWriteC()) {
            System.out.printf("I can write C.\n");
        }
        if (p.canWriteJava()) {
            System.out.printf("I can write Java.\n");
        }
    }
}
