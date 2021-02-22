public class Classroom {
    protected static String name;
    protected static int capacity;

    Classroom(String name, int capacity){
        this.name = name;
        this.capacity = capacity;
    }

    public String getName(){
        return this.name;
    }

    public int getCapacity(){
        return this.capacity;
    }
}
