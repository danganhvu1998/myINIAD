# Modifiers (Access, Static, Final, Abstract)

+ Access Modifier
  + `public`
    + Allow `same class`, `same packet`, `subclass`, `other class` to access
  + `protected`
    + Allow `same class`, `same packet`, `subclass` to access
  + Not specific
    + Allow `same class`, `same packet` to access
  + `private`
    + Allow `same class` to access only
+ Static
  + Not belong to instance, but belong to class itselfs
  + ```java
        public class Student {
            int grade
            static boolean older(Student a, Student b){
                return a.grade > b.grade;
            }
        }
    ```
+ Final
  + variable: indicate that variable is not changeable
  + class: indicate that class cannot be inherited
  + method (function): indicate that method cannot be modify (by sub-class)
+ Abstract
  + Assume that subclass will finish implementation
  + If not override in subclass, it stay as abstract class
  + ```java
        abstract public class Member {
            abstract public boolean canReserveRoom();

            public String getProfile(){
                return "CAN RESERVE: " + canReserveRoom();
            }
        }

        abstract public class Student extends Member {
            @override 
            public boolean canReserveRoom(){
              return false;
            };
        }

        abstract public class Teacher extends Member {
            @override 
            public boolean canReserveRoom(){
              return true;
            };
        }
    ```

# Package

+ Declare the package class belong to
  + ```java
        package sample1.pkg1;

        public class Student {
            int grade
            // The rest
        }
    ```

# Subclass

```java
public class Student extends Member {
    public boolean canReserveRoom(){
      return false;
    };
}
```

# Interface

```java
public interface Writable {
    void write(String filename);
}

public class WriteablePyramid extends Pyramid implements Writeable{
    public WriteablePyramid(int height){
        super(height);
    }

    @Override
    public void write(String filename){
        System.out.println(height);
    }
}
```

# Generics Class

+ Example
  + ```java
      public class GenericsSample<T> {
          private T first;
          private T second;
          public GenericsSample(T first, T second) {
              this.first = first;
              this.second = second;
          }
          public T getFirst() {
              return first;
          }
          public T getSecond() {
              return second;
          }
      }

      public class Main {
          public static void main(String[] args) {
              GenericsSample<String> g1 = new GenericsSample<String>("INIAD", "Toyo");
              System.out.printf("%s %s\n", g1.getFirst(), g1.getSecond());
              GenericsSample<Integer> g2 = new GenericsSample<Integer>(Integer.valueOf(10), Integer.valueOf(20));
              System.out.printf("%d %d\n", g2.getFirst().intValue(), g2.getSecond().intValue());
              GenericsSample<String> g3 = new GenericsSample<>("INIAD", "Toyo");
              System.out.printf("%s %s\n", g3.getFirst(), g1.getSecond());
              GenericsSample<Integer> g4 = new GenericsSample<>(Integer.valueOf(10), Integer.valueOf(20));
              System.out.printf("%d %d\n", g4.getFirst().intValue(), g2.getSecond().intValue());
          } 
      }
      ```

+ With interface
  + ```java
      public interface GenericsInterfaceSample<T> {
          public void print(T data);
      }

      public class Concrete implements GenericsInterfaceSample<String>{
          public Concrete() {
          }
          @Override
          public void print(String data) {
              System.out.printf("Concrete: %s\n", data);
          }
      }
    ```
