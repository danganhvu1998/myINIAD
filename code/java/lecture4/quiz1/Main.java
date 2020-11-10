package quiz1;

public class Main {
    public static void main(String[] args) {
        NameCard n1 = new CourseNameCard("Taro", "Engineering");
        NameCard n2 = new CourseNameCard("Jiro", "Business");
        System.out.println(n1.getLabel());
        System.out.println(n2.getLabel());
    }
}
