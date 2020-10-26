public class Author {
    private String name;
    private String email;

    Author(String name, String email){
        this.email = email;
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public String getEmail(){
        return this.email;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String toString(){
        return String.format("[NAME: %s; EMAIL: %s]", this.name, this.email);
    }
}
