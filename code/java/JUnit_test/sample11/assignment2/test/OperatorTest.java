package sample11.assignment2;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

public class OperatorTest {
    @Test
    public void test1(){
        Operator op =  new Operator("+");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        assertEquals(2.0, op.eval(), 0.001);
    }

    @Test
    public void test2(){
        Operator op =  new Operator("-");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        assertEquals(0.0, op.eval(), 0.001);
    }

    @Test
    public void test3(){
        Operator op =  new Operator("*");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        assertEquals(1.0, op.eval(), 0.001);
    }

    @Test
    public void test4(){
        Operator op =  new Operator("/");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        assertEquals(1.0, op.eval(), 0.001);
    }

    @Test(expected = UnsupportedOperationException.class)
    public void test5(){
        Operator op =  new Operator("**");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        op.eval();
    }

    @Test(expected = UnsupportedOperationException.class)
    public void test6(){
        Operator op =  new Operator("+");
        op.add(new Number(1.0f));;op.add(new Number(1.0f));;op.add(new Number(1.0f));;op.add(new Number(1.0f));;
        op.eval();
    }
}