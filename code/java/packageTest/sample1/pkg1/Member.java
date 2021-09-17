package sample1.pkg1;

abstract public class Member{
    protected static final String DOMAIN = "@iniad.org";
    protected String id;
    protected String name;
    abstract public boolean canReserveRoom();
    abstract public String getEmail();

    public Member(String id, String name){
        this.id = id;
        this.name = name;
    }
    
    public String getProfile(){
        StringBuffer sb = new StringBuffer();
        sb.append("Student ID: ").append(id).append("\n");
        sb.append("Student Name: ").append(name).append("\n");
        String email = getEmail();
        sb.append("Student Email: ").append(email).append("\n");
        if(canReserveRoom()){
            sb.append("Room: OK").append("\n");
        }
        else {
            sb.append("Room: NG").append("\n");
        }
        return sb.toString();
    }
}