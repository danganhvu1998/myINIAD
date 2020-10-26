public class Human {
    private string name;
    
    Human(String name){
        this.name = name;
    }

    String getName(){
        return this.name;
    }
}

public class TestArrayList{
    public static void Main(String[] args){
    ArrayList<Human> myList = new ArrayList<Human>();

    myList.add(("Alice"));
    myList.add(("Bob"));
    
    for (int i = 0; i < myList.size(); i++) {
          System.out.println(myList.get(i));
        }
    }
}