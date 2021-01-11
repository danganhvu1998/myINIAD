## Class Diagram

+ ![err][javaDesign02]
  + Variable visibility
    + `+`: Public
    + `-`: Private
    + `~`: Package level (omitted)
    + `#`: Protected
+ Association: https://moocs.iniad.org/courses/2020/CS118/07/05
  + ![err][javaDesign00]
  + ![err][javaDesign01]
  + ![err][javaDesign03]

## Design Pattern

### Adapter Pattern

+ Just a pattern to connect 2 partterns
  + ![err][javaDesign04]

### Singleton pattern

+ A class that manages exactly one instance (log class for example), that information needs to be shared across software
+ ![err][javaDesign06]
  + Declare an instance as a private static field in
  + Declare a private constuctor
  + Declare a public static method to get the instance
+ Example code [Singleton Stack](../../../code/java/lecture9/singleton2/SingletonStack.java)

### Observer Pattern

+ A pattern that observes the state change of an object and get notified when there is a change
+ ![err][javaDesign07]
+ ![err][javaDesign08]
+ Example [Observerable Stack](../../../code/java/lecture9/observer1/ObservableStack.java)

### Template Method Pattern: Skip, just about design


### Factory Method Pattern

+ Just define an interface or abstract class for creating an object but let the subclasses decide which class to instantiate. In other words, subclasses are responsible to create the instance of the class.
+ ![err][javaDesign09]
+ [More info](https://www.javatpoint.com/factory-method-design-pattern)

### Composite Pattern

+ [Code folder](../../../code/java/sample10/composite1)
+ ![err][javaDesign10]

[javaDesign00]: ./../image/javaDesign00.png
[javaDesign01]: ./../image/javaDesign01.png
[javaDesign02]: ./../image/javaDesign02.png
[javaDesign03]: ./../image/javaDesign03.png
[javaDesign04]: ./../image/javaDesign04.png
[javaDesign05]: ./../image/javaDesign05.png
[javaDesign06]: ./../image/javaDesign06.png
[javaDesign07]: ./../image/javaDesign07.png
[javaDesign08]: ./../image/javaDesign08.png
[javaDesign09]: ./../image/javaDesign09.png
[javaDesign10]: ./../image/javaDesign10.png
[javaDesign11]: ./../image/javaDesign11.png
[javaDesign12]: ./../image/javaDesign12.png
[javaDesign13]: ./../image/javaDesign13.png
[javaDesign14]: ./../image/javaDesign14.png
[javaDesign15]: ./../image/javaDesign15.png
[javaDesign16]: ./../image/javaDesign16.png
[javaDesign17]: ./../image/javaDesign17.png
[javaDesign18]: ./../image/javaDesign18.png
[javaDesign19]: ./../image/javaDesign19.png
[javaDesign20]: ./../image/javaDesign20.png
[javaDesign21]: ./../image/javaDesign21.png
[javaDesign22]: ./../image/javaDesign22.png
[javaDesign23]: ./../image/javaDesign23.png
[javaDesign24]: ./../image/javaDesign24.png
[javaDesign25]: ./../image/javaDesign25.png
[javaDesign26]: ./../image/javaDesign26.png
[javaDesign27]: ./../image/javaDesign27.png
[javaDesign28]: ./../image/javaDesign28.png
[javaDesign29]: ./../image/javaDesign29.png
[javaDesign30]: ./../image/javaDesign30.png
[javaDesign31]: ./../image/javaDesign31.png
[javaDesign32]: ./../image/javaDesign32.png
[javaDesign33]: ./../image/javaDesign33.gif
[javaDesign34]: ./../image/javaDesign34.png
[javaDesign35]: ./../image/javaDesign35.png
[javaDesign36]: ./../image/javaDesign36.png
[javaDesign37]: ./../image/javaDesign37.png
[javaDesign38]: ./../image/javaDesign38.png
[javaDesign39]: ./../image/javaDesign39.png
[javaDesign40]: ./../image/javaDesign40.png
[javaDesign41]: ./../image/javaDesign41.png
[javaDesign42]: ./../image/javaDesign42.png
[javaDesign43]: ./../image/javaDesign43.png
[javaDesign44]: ./../image/javaDesign44.png
[javaDesign45]: ./../image/javaDesign45.png
[javaDesign46]: ./../image/javaDesign46.png
[javaDesign47]: ./../image/javaDesign47.png
[javaDesign48]: ./../image/javaDesign48.png
[javaDesign49]: ./../image/javaDesign49.png
[javaDesign50]: ./../image/javaDesign50.png
[javaDesign51]: ./../image/javaDesign51.png
[javaDesign52]: ./../image/javaDesign52.png
[javaDesign53]: ./../image/javaDesign53.png
[javaDesign54]: ./../image/javaDesign54.png
[javaDesign55]: ./../image/javaDesign55.png
[javaDesign56]: ./../image/javaDesign56.png
[javaDesign57]: ./../image/javaDesign57.png
[javaDesign58]: ./../image/javaDesign58.png
[javaDesign59]: ./../image/javaDesign59.png
[javaDesign60]: ./../image/javaDesign60.png
[javaDesign61]: ./../image/javaDesign61.png
[javaDesign62]: ./../image/javaDesign62.png
[javaDesign63]: ./../image/javaDesign63.png
[javaDesign64]: ./../image/javaDesign64.png
[javaDesign65]: ./../image/javaDesign65.png
[javaDesign66]: ./../image/javaDesign66.png
[javaDesign67]: ./../image/javaDesign67.png
[javaDesign68]: ./../image/javaDesign68.png
[javaDesign69]: ./../image/javaDesign69.png
[javaDesign70]: ./../image/javaDesign70.png


