Programming Language
====================================

+ ***Share Libraries and Archieve File***
  + The program files that call the functions in shared libraries need shared libraries at runtime because the machine instructions of the functions do not exist in the program file.  
    + gcc -c -fPIC objectFile1.c objectFile2.c
    + gcc -shared -o libshar.so objectFile1.o objectFile2.o
  + In constrast, the program files that call the functions in archive files can run without archive files because the machine instructions of the functions exist in the program file.
    + ar -rcs archieveFile.a objectFile1.o objectFile2.o
    + gcc mainFile.c archieveFile.a
+ ***Using math.h***
  + gcc mainfile.c -lm
  + double sqrt(double)
  + double pow(double, double)
  + int abs(int)
+ ***Static Variable (Global Variable) and Automatic Variable (Local Variable)***
  + Automatic Variable (Local Variable)
    + Only avarible in block {int i; code; code;}
  + Static Variable (Global Variable)
    + Avarible everywhere
    + How to declare
      + Outside all block
      + static int s (s will be avarible everywhere)
  