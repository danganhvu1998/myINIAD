public class Author {
    String name;
    String email;
    Author (String name, String email) {
        this.name = name;
        this.email = email;
    }

    String getName () {
        return this.name;
    }

    String getEmail () {
        return this.email;
    } 

    void setEmail (String email) {
        this.email = email;
    }

    public String toString () {
        return "Author [name=" + name + ", email=" + email + "]";
    }
    
}
