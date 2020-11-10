public class Quiz {
    public static void main(String[] args) {
        // System.out.println(appendAll(args));
        System.out.println(sumAll(args));
    }

    public static String appendAll(String[] args) {
        StringBuffer sb = new StringBuffer();
        for(String str : args) {
            sb.append(str);
            sb.append(';');
        }
        return sb.toString();
    }

        public static int sumAll(String[] args) {
        int sum = 0;
        try {
            for(String str : args) {
                sum += Integer.parseInt(str);
            }
        } catch (NumberFormatException e) {
            return 0;
        }
        return sum;
    }
}
