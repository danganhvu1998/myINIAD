package pkg1;

public class Person {
    private String name;
    private int age;
    public int id;
    public static int count;

    public Person(String name, int age){
        this.name = name;
        this.age = age;
        this.id = ++count;
    }

    public String getInfo(){
        StringBuffer res = new StringBuffer();
        res.append( String.format("NAME: %s\n", this.name) );
        res.append( String.format("AGE : %d\n", this.age) );
        res.append( String.format("ID  : %d\n", this.id) );
        return res.toString();
    }

    public void changeName(String newName){
        this.name = newName;
    }

    public void changeAge(int newAge){
        this.age = newAge;
    }

    public void printInfo(){
        System.out.println( this.getInfo() );
    }
}
