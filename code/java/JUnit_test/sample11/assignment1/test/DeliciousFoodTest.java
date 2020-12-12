// javac -d out user/User.java 
// javac -d out -cp out:junit-platform-console-standalone-1.5.2.jar  user/UserTest.java 
// java -jar junit-platform-console-standalone-1.5.2.jar --class-path out --scan-class-path
package sample11.assignment1;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class DeliciousFoodTest {
    @Test
    public void main(){
        DeliciousFood food = new DeliciousFood("ABC", 1000);
        assertThat(food.getTaxPrice(), is(1080));
        assertThat(food.getTaste(), is("Delicious"));
    }
}