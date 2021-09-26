import pkg1.*;
import structure.*;

public class Main {

    public static void main1(){
        Person ps1 = new Person("Thu Thao", 22);
        Student st1 = new Student("Anh Vu", 22);
        Student st3 = new Student("ABC", 22);
        ps1.printInfo();
        st1.printInfo();
        st3.printInfo();
    }

    public static void main2(){
        Person ps1 = new Person("Thu Thao", 22);
        Person ps2 = new Person("Thu Thao", 22);
        Person ps3 = new Person("Thu Thao", 22);
        Person ps4 = new Person("Thu Thao", 22);
        Student st1 = new Student("Anh Vu", 22);
        Student st2 = new Student("Anh Vu", 22);
        Student st3 = new Student("Anh Vu", 22);
        Student st4 = new Student("ABC", 22);
        Student st5 = new Student("Anh Vu", 22);
        PeopleList people = new PeopleList();
        people.add(ps1);
        people.add(ps2);
        people.add(st1);
        people.add(st2);
        people.add(st3);
        people.add(ps3);
        people.add(ps4);
        people.add(st4);
        people.add(st5);
        people.print();
    }
    public static void main(String[] args) {
        main2();
    }
}