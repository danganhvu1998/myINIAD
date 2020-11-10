package animal;

public class Main {
    public static void main (String... args) {
        Human human = new Human();
        Dog dog = new Dog();
        Cat cat = new Cat();
        human.run();
        System.out.println(human.getStomatch());
        System.out.println(dog.bark());
        System.out.println(cat.bark());
        System.out.println(human.talk());
    }
}
