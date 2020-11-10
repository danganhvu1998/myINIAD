package sample2;

public class Member {
    static final String DOMAIN = "@iniad.org";
    String id;
    String name;

    Member(String id, String name) {
        this.id = id;
        this.name = name;
    }

    String getEmail () {
        return this.id + DOMAIN;
    }
}
