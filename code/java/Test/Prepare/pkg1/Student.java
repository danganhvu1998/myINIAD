package pkg1;

public class Student extends Person {
    private int studentId;
    static int count = 0;

    public Student(String name, int age){
        super(name, age);
        this.studentId = ++count;
    }

    @Override
    public String getInfo(){
        StringBuffer res = new StringBuffer();
        res.append( super.getInfo() );
        res.append( String.format("SID : %d\n", this.studentId) );
        return res.toString();
    }
}
