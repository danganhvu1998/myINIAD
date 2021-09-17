package sample10.template1;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Content> contents = new ArrayList<Content>();
        contents.add(new Content("Good moring", "Taro", "Hi.\nThis is the first content.\n"));
        contents.add(new Content("Good afternoon", "Taro", "Hi.\nThis is the second content.\n"));
        contents.add(new Content("Good evening", "Jiro", "Hi.\nThis is the third content.\n"));

        Display display = new PlainDisplay();
        display.print("Content Test", "INIAD", contents);
    }
}
