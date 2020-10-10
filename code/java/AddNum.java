public class AddNum {
    public static void main(String[] args) {
        System.out.println(sumAll(args));
    }

    public static int intOf(String str) {
        try {
            int res = Integer.valueOf(str);  
            return res;
        } catch(NumberFormatException e) {
            return 0;
        }
    }

    public static int sumAll(String[] args) {
        int res = 0;
        for(int i = 0; i< args.length; i++){
            res += intOf(args[i]);
        }
        return res;
    }
}