package assignment1.figures;

import assignment1.base.Figure;

public class Pyramid extends Figure {
    public Pyramid(int height) {
        super(height);
    }

    // @Override
	// public void draw () {
    //     int i, j;
    //     for (i=0; i<height; i++) {
    //         for (j=0; j<height-i; j++) {
    //             System.out.printf(" ");
    //         }
    //         for (j=0; j<=2*i; j++) {
    //             System.out.printf("*");
    //         }
    //         System.out.println();
    //     }
    // }

    public String draw(){
        StringBuffer sb = new StringBuffer();
        for(int i = 1; i <= this.height; i++){
            String line = " ".repeat(this.height-i) + "*".repeat(2*i-1);
            sb.append(line).append("\n");
        }
        return sb.toString();
    }

}
