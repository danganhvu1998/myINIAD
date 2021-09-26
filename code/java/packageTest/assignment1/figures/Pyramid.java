package assignment1.figures;

import assignment1.base.Figure;

public class Pyramid extends Figure{
    public Pyramid(int height){
        super(height);
    }

    @Override
    public String draw(){
        StringBuffer sb = new StringBuffer();
        for(int i = 1; i <= this.height; i++){
            String line = " ".repeat(this.height-i) + "*".repeat(2*i-1) + "\n";
            sb.append(line);
        }
        return sb.toString();
    }
}