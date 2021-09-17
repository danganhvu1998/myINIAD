package assignment1.figures;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import assignment1.base.Writable;

public class WritablePyramid extends Pyramid implements Writable {
    public WritablePyramid(int height) {
        super(height);
    }

    @Override
    public String draw(){
        StringBuffer sb = new StringBuffer();
        for(int i = 1; i <= this.height; i++){
            String line = " ".repeat(this.height-i) + "*".repeat(2*i - 1);
            sb.append(line).append("\n");
        }
        return sb.toString();
    }

    @Override
    public void write(String filename){
        try{
            File file = new File(filename);
            FileWriter writer = new FileWriter(file,true);
            writer.write(draw());
            writer.close();
        } catch(IOException e){
            System.out.println("Error.");
        }
    }
}
