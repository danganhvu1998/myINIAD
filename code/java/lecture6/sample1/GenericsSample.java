package sample1;

public class GenericsSample<T> {
    private T first;
    private T second;
    public GenericsSample(T first, T second) {
        this.first = first;
        this.second = second;
    }
    public T getFirst() {
        return first;
    }
    public T getSecond() {
        return second;
    }
}
