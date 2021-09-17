import java.util.Random;
import java.util.Scanner;

public class Jaken {
    public static void main(String[] args) {
        Random r = new Random();
        int randNum = r.nextInt(3);
        System.out.println("あなたの手?0:グー, 1:チョキ, 2:パー");

        System.out.printf("あなた：");
        Scanner myScanner = new Scanner(System.in);
        int a = myScanner.nextInt();

        System.out.println("コンピューター：" + randNum);

        if(a==0) {
            switch (randNum) {
                case 0:
                    System.out.println("引き分け");
                    break;
                case 1:
                    System.out.println("あなたの勝");
                    break;
                case 2:
                    System.out.println("コンピュータの勝");
                    break;
            }
        } else if (a==1) {
            switch (randNum) {
                case 0:
                    System.out.println("コンピュータの勝");
                    break;
                case 1:
                    System.out.println("引き分け");
                    break;
                case 2:
                    System.out.println("あなたの勝");
                    break;
            }
        } else if (a==2) {
            switch (randNum) {
                case 0:
                    System.out.println("あなたの勝");
                    break;
                case 1:
                    System.out.println("コンピュータの勝");
                    break;
                case 2:
                    System.out.println("引き分け");
                    break;
            }
        }
        
    }
}
