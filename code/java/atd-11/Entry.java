abstract public class Entry{
    abstract public String getName();
    abstract public int getSize();

    public void print() {
        System.out.printf("%s(%d)\n", getName(), getSize());
    }
}