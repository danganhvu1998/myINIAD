package sample1.pkg2;

import sample1.pkg1.Member;

public class Teacher extends Member {
    private String title;

    public Teacher(String id, String name, String title) {
        super(id, name);
        this.title = title;
    }

    @Override
    public String getEmail () {
        return id + DOMAIN;
    }

    @Override
    public String getProfile () {
        StringBuffer sb = new StringBuffer();
        sb.append("----- Teacher -----\n");
        sb.append(super.getProfile());
        sb.append("Title: ").append(title).append("\n");
        return sb.toString();
    }

    @Override
    public boolean canReserveRoom() {
        return true;
    }
}
