package assignment1.figures;

import assignment1.base.Figure;

public class Rectangle extends Figure{
    public int width;
    public Rectangle(int height, int width){
        super(height);
        this.width = width;
    }

    @Override
    public final String draw(){
        StringBuffer sb = new StringBuffer();
        for(int i = 1; i <= this.height; i++){
            String line = "*".repeat(this.width) + "\n";
            sb.append(line);
        }
        return sb.toString();
    }
}