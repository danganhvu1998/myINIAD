package atd;

import java.util.*;
import atd.Student;

public class ArrayListTest {

    public static void main(String[] args) {
        ArrayList<Student> myList = new ArrayList<Student>();
        myList.add( new Student("Alice") );
        myList.add( new Student("Bob") );
        for( Student st : myList ){
            System.out.println( st.getName() );
        }
    }
}
