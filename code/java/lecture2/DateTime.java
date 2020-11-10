import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTime {
    public static void main(String[] args) {
        LocalDateTime time1 = LocalDateTime.now();
        System.out.println(time1);
        LocalDateTime time2 = time1.plusYears(2);
        String time2_format = time2.format(DateTimeFormatter.BASIC_ISO_DATE);
        System.out.println(time2_format);
    }
}
