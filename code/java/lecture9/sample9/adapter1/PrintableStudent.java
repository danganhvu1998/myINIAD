package sample9.adapter1;

public class PrintableStudent extends Student implements Label {
    public PrintableStudent(String id, String firstName, String familyName) {
        super(id, firstName, familyName);
    }

    public String firstLine() {
        return getId();
    }

    public String secondLine() {
        return getFirstName() + " " + getFamilyName() ;
    }
}
