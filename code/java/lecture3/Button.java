// public class Button {
//     String label;
//     Boolean pressed;
//     Button (String label){
//         this.label = label;
//         this.pressed = false;
//     }
//     Button () {
//         this.label = "Untitled";
//         this.pressed = false;
//     }
//     static int numPressed = 0;
//     void press () {
//         this.pressed = true;
//         numPressed++;
//     }

//     void release () {
//         this.pressed = false;
//     }
// }

public class Button {
    public String label;
    public Boolean pressed;
    public Button (String label){
        this.label = label;
        this.pressed = false;
    }
    public Button () {
        this.label = "Untitled";
        this.pressed = false;
    }
    static int numPressed = 0;
    void press () {
        this.pressed = true;
        numPressed++;
    }

    void release () {
        this.pressed = false;
    }

    Boolean isPressed() {
        return this.pressed;
    }
    static int getNumPressed () {
        return numPressed;
    }
}
