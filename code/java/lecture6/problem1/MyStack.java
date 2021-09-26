package problem1;

public class MyStack<E> {
    final int size;
    private int top;
    private E[] elements;
    
    @SuppressWarnings("unchecked")
    public MyStack(int size) {
        this.size = size;
        this.top = 0;
        this.elements = (E[]) new Object[size];
    }

    public void push (E item) {
        if(this.top >= this.size) {
            return;
        }
        this.elements[top] = item;
        this.top++;
    }

    public E pop() {
        this.top--;
        return elements[top];
    }
}

