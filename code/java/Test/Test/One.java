public class One {
    public static void main(String[] args) {
        int res = 1;
        for (String arg : args) {
            int intArg;
            try {
                intArg = Integer.parseInt(arg);
            } catch (NumberFormatException e) {
                intArg = 0;
            }
            res *= intArg;
        }
        System.out.println(res);
    }
}
