
package assignment1.figures;
import assignment1.base.Writeable;
import java.io.*;

public class WriteablePyramid extends Pyramid implements Writeable{
    public WriteablePyramid(int height){
        super(height);
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