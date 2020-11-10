public class NameCard {
    private final String firstName;
    private final String familyName;
    private final int id;
    static int counter = 1;
    
    NameCard (String firstName, String familyName) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.id = counter;
        counter++;
    }

    public String getLabel () {
        return String.format("No. %d: %s %s", id, firstName, familyName);
    }
}
