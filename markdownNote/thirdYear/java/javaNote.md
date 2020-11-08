# JAVA SYNTAX

## Array

+ `Type[] variable` - common way 
+ `Type variable[]`
+ Get length: `array.length`


### Note

```java
public class ABC{
    public static void test1(String args[]){
        int[] array;
        array = new int[3];
        System.out.println(array[0])
        int[][] array2d;
        array2d = new int[3][3];
        System.out.println(array2d[0][0])
    }

    public static void test2(String args[]){
        int[] array = new int[3];
        System.out.println(array[0])
    }

    public static void test3(String args[]){
        String[] strs = {"INIAD", "TOYO"};
        System.out.println(strs[0]);
        int[] array = {1, 2, 3};
        System.out.println(array[0]);
        int[] array2 = new[]{1, 2, 3};
        System.out.println(array2[0]);
    }

    public static int forFunc(String args[]){
        int sum = 0;
        int[] array = {1, 2, 3};
        for(int x : array){
            sum += x;
        }
        return sum;
    }
}
```

## Type

+ Primitive Type
  + Integer
  + Float
  + Booleans
  + Character 
+ Reference Type
  + String
  + Array
  + null
  + Object in general

### Note

+ If a reference variable called by a function, its value might change

```java
public class ReferenceSample {
    public static void main(String[] args) {
        int[] x = {1, 2, 3};
        test(x);
        System.out.printf("%d %d %d\n", x[0], x[1], x[2]);
    }
    public static void test(int[] x) {
        x[0] = 100;
    }
}
```

## Comparison

```java
public class ReferenceSample {
    public static void main(String[] args) {
        String x = "INIAD";
        String y = "INI";
        y += "AD";
        System.out.println(x == y); // False
        System.out.println(x.equals(y)); // True
    }
}
```