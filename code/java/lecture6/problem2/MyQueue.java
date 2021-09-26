package problem2;

public class MyQueue<E> {
    private int size;
    private int tail;
    private int head;
    private E[] elements;

    @SuppressWarnings("unchecked")
    public MyQueue(int size) {
        this.size = size;
        this.tail = 0;
        this.head = 0;
        this.elements = (E[]) new Object[size];
    }

    public void enqueue(E x) {
        if(this.tail >= this.size) {
            return;
        }
        this.elements[this.tail] = x;
        this.tail++;
        this.tail %= this.size;
    }

    public E dequeue() {
        if(this.size == 0 | this.head == this.size){
            return null;
        }
        E ret = this.elements[this.head];
        this.head++;
        this.head %= this.size;
        return ret;
    }
}
