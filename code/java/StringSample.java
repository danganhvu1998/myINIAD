import java.lang.StringBuffer;

public class StringSample {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        for(int i = 0; i < 10; i++) {
            sb.append(i);
            sb.append(' ');
        }
        String result = sb.toString();
        System.out.println(result);
    }
}