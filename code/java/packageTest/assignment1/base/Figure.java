package assignment1.base;

abstract public class Figure{
    public int height;

    public Figure(int height){
        this.height = height;
    }

    abstract public String draw();
}