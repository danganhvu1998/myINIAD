public class Bmi {
    public static void printRisk(int age, double h, double w) {
        h /= 100;
        double bmi = w / h / h;
        String risk;
        if (bmi<22 && age<45) {
            risk = "Low";
        } else if(bmi>=22 && age>=45) {
            risk = "High";
        } else {
            risk = "Medium";
        }
        System.out.printf("Your BMI: %f\nYour risk: %s", bmi, risk);
    }

    public static void main(String[] args) {
        int age = 30;
        double h = 170.0;
        double w = 70.0;

        printRisk(age, h, w);
    }
}