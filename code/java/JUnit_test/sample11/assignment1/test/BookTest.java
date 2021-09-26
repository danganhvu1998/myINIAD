// javac -d out user/User.java 
// javac -d out -cp out:junit-platform-console-standalone-1.5.2.jar  user/UserTest.java 
// java -jar junit-platform-console-standalone-1.5.2.jar --class-path out --scan-class-path
package sample11.assignment1;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class BookTest {
    @Test
    public void main(){
        Book book = new Book("ABC", 1000);
        assertThat(book.getTaxPrice(), is(1100));
    }
}