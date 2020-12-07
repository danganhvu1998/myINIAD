

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        ActivityManager manager = ActivityManager.getInstance();
        manager.addActivity(new PyramidActivity());
        manager.execute();
    }
}
