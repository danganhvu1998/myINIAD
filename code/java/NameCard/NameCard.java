public class NameCard {
    private String firstName;
    private String familyName;
    private int id;
    private static int studentCnt = 0;

    NameCard(String firstName, String familyName){
        ++studentCnt;
        this.id = studentCnt;
        this.firstName = firstName;
        this.familyName = familyName;
    }

    public String getLabel(){
        return String.format("No. %d: %s %s", id, firstName, familyName);
    }
}
