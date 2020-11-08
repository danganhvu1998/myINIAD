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

# Subclass

