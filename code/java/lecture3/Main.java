// public class Main {
//     public static void main(String[] args) {
//         Button btn1 = new Button("My button");
//         Button btn2 = new Button();        
//         btn1.press();
//         if(btn1.pressed) {
//             System.out.printf("%s is pressed.\n", btn1.label);
//         } 
//         btn2.press();
//         if(btn2.pressed) {
//             System.out.printf("%s is pressed.\n", btn2.label);
//         } 
//         btn2.release();
//         if(! btn2.pressed) {
//             System.out.printf("%s is not pressed.\n", btn2.label);
//         }
//         System.out.printf("The number of all generated buttons whose pressed is true: %d\n", Button.numPressed);
//     }
// }

public class Main {
    public static void main(String[] args) {
        NameCard n1 = new NameCard("Taro", "Yamada");
        NameCard n2 = new NameCard("Jiro", "Tanaka");
        System.out.println(n1.getLabel());
        System.out.println(n2.getLabel());
    }
}
