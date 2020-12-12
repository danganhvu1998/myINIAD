package sample11.assignment2;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class NumberTest {
    @Test
    public void main(){
        float val = 123.0f;
        Number number = new Number(val);
        assertEquals(val, number.eval(), 0.001);
    }
}