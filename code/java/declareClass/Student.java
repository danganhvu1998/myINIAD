public class Student {
    String name;
    int grade;
    static int studentCount = 0;

    Student(){
        this.name = null;
        this.grade = 0;
        ++this.studentCount;
    }

    Student(String name, int grade){
        this.name = name;
        this.grade = grade;
        ++this.studentCount;
    }

    public void getStudentInfo(){
        System.out.printf("%s\n%d\n", name, grade);
        System.out.printf("%d\n\n", this.studentCount);
    }
}
