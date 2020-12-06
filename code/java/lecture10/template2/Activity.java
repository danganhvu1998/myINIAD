

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

abstract public class Activity {
    public void execute() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        
        onStart();
        for(;;) {
            String input = br.readLine();
            if(input.equals("")) {
                break;
            }
            onInput(input);
        }
        onStop();
    }

    abstract protected void onStart();
    abstract protected void onStop();
    abstract protected void onInput(String input);
}
