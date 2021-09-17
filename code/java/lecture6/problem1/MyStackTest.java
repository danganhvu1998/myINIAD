package problem1;

public class MyStackTest {
    public static void main(String[] args) {
        MyStack<String> T = new MyStack<String>(10);
        T.push("Apple");
        T.push("Banana");
        T.push("Orange");

        MyStack<Student> st = new MyStack<Student>(10);
        Student st1 = new Student("Bob", 10, "001");
        Student st2 = new Student("Alice", 12, "002");
        st.push(st1);
        st.push(st2);
        System.out.println(T.pop());
        System.out.println(st.pop().name);
    } 
}
