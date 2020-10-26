public class Button {
    private boolean pressed = false;
    final String label;
    private static int numPressed = 0;
    
    Button(){
        this.label = "Untitled";
    }

    Button(String str){
        this.label = str;
    }

    public void press(){
        if( !this.pressed ) numPressed++;
        this.pressed = true;
    }

    public void release(){
        if( this.pressed ) numPressed--;
        this.pressed = false;
    }

    public boolean isPressed(){
        return pressed;
    }

    public int getNumPressed(){
        return numPressed;
    }
}
