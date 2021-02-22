public class EmergencyClassroom extends Classroom{
    private static double ratio;

    EmergencyClassroom(String name, int capacity, double ratio){
        super(name, capacity);
        this.ratio = ratio;
    }

    @Override
    public int getCapacity(){
        return (int)(this.capacity * this.ratio);
    }
}
