package sample2.pkg1;

public abstract class Member {
    protected static final String DOMAIN = "@iniad.org";
    public String id;
    public String name;

    public Member(String id, String name) {
        this.id = id;
        this.name = name;
    }

    abstract public String getEmail();

    abstract public boolean canReserveRoom();

    public String getProfile() {
        StringBuffer sb = new StringBuffer();
        sb.append("ID: ").append(id).append("\n");
        sb.append("Name: ").append(name).append("\n");
        String email = getEmail();
        sb.append("email: ").append(email).append("\n");
        if(canReserveRoom()) {
            sb.append("Room: OK").append("\n");
        }
        else {
            sb.append("Room: NO").append("\n");
        }
        return sb.toString();
    }

    public String getId() {
        return id;
    }
}
