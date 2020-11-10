package sample1;

public class Concrete implements GenericsInterfaceSample<String>{
    public Concrete() {
    }
    @Override
    public void print(String data) {
        System.out.printf("Concrete: %s\n", data);
    }
}
