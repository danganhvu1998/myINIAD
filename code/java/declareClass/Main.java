public class Main {
    public static void test1() {
        Student student1 = new Student();
        student1.name = "TARO";
        student1.grade = 12;
        student1.getStudentInfo();
        Student student2 = new Student();
        student2.name = "NGUYEN THAO";
        student2.grade = 16;
        student2.getStudentInfo();
    }

    public static void test2() {
        Student student1 = new Student("TARO", 12);
        student1.getStudentInfo();
        Student student2 = new Student("NGUYEN THAO", 16);
        student2.getStudentInfo();
    }

    public static void main(String[] args) {
        test1();
        test2();
    }
}
