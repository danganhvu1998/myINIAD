// javac -d out user/User.java 
// javac -d out -cp out:junit-platform-console-standalone-1.5.2.jar  user/UserTest.java 
// java -jar junit-platform-console-standalone-1.5.2.jar --class-path out --scan-class-path
package user;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class UserTest {
    @Test
    public void main(){
        User user1 = new User("T", 22);
        User user2 = new User("V", 22);
        assertThat(user1.getName(), is("T"));
        assertThat(user2.getName(), is("V"));
        assertThat(user1.getId(), is(1));
        assertThat(user2.getId(), is(2));
    }
}