package sample10.composite1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        for(;;) {
            String input = br.readLine();
            Expression exp = Parser.getInstance().parse(input);
            exp.print();
            System.out.printf("= %f\n", exp.eval());
        }
    }
}
