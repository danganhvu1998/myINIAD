public class Teacher extends Human {
    public String getAge(){
        return "Secret"; // 
    }
}

public class NameCard {
    protected final String name;
    public NameCard(String name) {
        this.name = name;
    }

    public String getLabel() {
        return String.format("Student: %s", name);
    }
}

public class CourseNameCard extends NameCard {
    protected final String name;
    protected final String course;
    public CourseNameCard(String name, String course) {
        super(name);
        this.course = course;
    }

    @Override
    public String getLabel() {
        return String.format("Student: %s(Course %s)", name, course);
    }
}