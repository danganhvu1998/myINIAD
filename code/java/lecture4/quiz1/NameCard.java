package quiz1;

public class NameCard {
    protected final String name;
    public NameCard(String name) {
        this.name = name;
    }

    public String getLabel() {
        return String.format("Student: %s", name);
    }
}
