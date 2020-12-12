package user;

public class User {
    private String name;
    private int age, id;
    public static int userCount = 0;

    public User(String name, int age){
        this.name = name;
        this.age = age;
        this.id = ++userCount;
    }

    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }

    public int getId() {
        return id;
    }
}
