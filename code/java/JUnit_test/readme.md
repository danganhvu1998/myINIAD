javac -d out sample11/assignment2/*.java
javac -d out -cp out:junit-platform-console-standalone-1.5.2.jar sample11/assignment2/test/*.java
java -jar junit-platform-console-standalone-1.5.2.jar --class-path out --scan-class-path