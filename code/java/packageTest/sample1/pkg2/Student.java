package sample1.pkg2;

import sample1.pkg1.Member;

public class Student extends Member {
    private int grade;

    public Student(String id, String name, int grade) {
        super(id, name);
        this.grade = grade;
    }

    @Override
    public String getEmail () {
        return id + DOMAIN;
    }

    @Override
    public String getProfile () {
        StringBuffer sb = new StringBuffer();
        sb.append("----- Student -----\n");
        sb.append(super.getProfile());
        sb.append("Grade: ").append(grade).append("\n");
        return sb.toString();
    }
   @Override
    public boolean canReserveRoom() {
        return false;
    }
}