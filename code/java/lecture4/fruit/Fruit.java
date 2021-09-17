package fruit;

public class Fruit {
    protected String state = "skinned";
    protected int pieceNumber = 1;


    public void peel() {
        this.state = "peeled";
    }

    public String getState() {
        return this.state;
    }

    public int getPieceNumber() {
        return this.pieceNumber;
    }

    final public void cut () {
        this.pieceNumber*=2;
    }
}
