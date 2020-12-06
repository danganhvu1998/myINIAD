package sample10.composite2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) throws IOException {
        Map<String, Float> variables = new HashMap<String, Float>();
        variables.put("x", 1.0f);
        variables.put("y", 1.0f);

        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        for(;;) {
            String input = br.readLine();
            Expression exp = Parser.getInstance().parse(input);
            exp.print();
            System.out.printf("= %f\n", exp.eval(variables));
        }
    }
}
