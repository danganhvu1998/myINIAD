public class TestTime {
    public static void main(String[] args) {
        Time t = new Time();
        t.setHour(16);
        t.setMinute(7);
        t.setSecond(30);
        System.out.println(t.getCurrentTime());
    }
}
