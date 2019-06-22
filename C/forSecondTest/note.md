Programming Language
====================================

+ ***Variable Argument Lists***
  + variableArgumentList.c
+ ***Function Pointer + File Reader + Circle Linked List***
  + fileReader_pointerToPointer_circleLinkedList.c
+ ***Enum Type***
  + enum.c
+ ***Function Pointer***
  + callbackFunction.c
  + functionPointer.c
+ ***Bit Fields***
  + Bit Field: bitFields.c
  + Packed Bit Field: bitFiledPacked.c
+ ***Share Libraries and Archieve File***
  + The program files that call the functions in shared libraries need shared libraries at runtime because the machine instructions of the functions do not exist in the program file.  
    + gcc -c -fPIC objectFile1.c objectFile2.c
    + gcc -shared -o libshar.so objectFile1.o objectFile2.o
  + In constrast, the program files that call the functions in archive files can run without archive files because the machine instructions of the functions exist in the program file.
    + ar -rcs archieveFile.a objectFile1.o objectFile2.o
    + gcc mainFile.c archieveFile.a
+ ***Library APIs***
  + Many programs call the functions in shared libraries. For example, the programs that use the file I/O use the shared library. A key data type is the pointer to FILE.fopen opens specified files and returns pointers to FILE.fread reads the bytes using pointers to FILE. 
  + The programs however do not need to know the details of FILE (what members it has, how they are ordered, how large it is, etc). They declare variables of the pointer to FILE type but not of the FILE type. On the other hand, the shared libraries know that the programs use the API functions to update the status of FILE but do not directly access to the details of FILE. 
  + We do not need to modify the source code that uses the API to provide the programs to different platforms that support the API. On the other hand, we can improve the shared libraries without modifying the programs that use the API as long as the shared library provides the same APIs.
+ ***GOTO***
  + Syntax
    + goto nameOfTheJumpPoint
    + //blablablablabla
    + nameOfTheJumpPoint:
      + [code]
  + Use when error handling.
+ ***VLA and Malloc***
  + VLA much faster than Malloc
  + Syntax:
    + n = 100;
    + m = 1000;
    + int A[n][m]
+ ***Using math.h***
  + gcc mainfile.c -lm
  + double sqrt(double)
  + double pow(double, double)
  + int abs(int)
+ ***malloc and realloc***
  + new_pointer = malloc(size) // new block
  + new_pointer = realloc(old_pointer, new_size) // Change size of old block and keep data
+ ***Load a specific share libirary while running***
  + include <dlfcn.h>
  + void *lib_pointer = dloppen(const char *lib, int flags)
    + const char *lib : Path to library file
    + flags: Don't know
  + void *func_pointer = dlsym(lib_pointer, "func_name")
    + lib_pointer : library file pointer
  + While complie add -ldl
+ ***Static Variable (Global Variable) and Automatic Variable (Local Variable)***
  + Automatic Variable (Local Variable)
    + Only avarible in block {int i; code; code;}
  + Static Variable (Global Variable)
    + Avarible everywhere
    + How to declare
      + Outside all block
      + static int s (s will be avarible everywhere)
+ ***Float, Double, Long Double***
  + Float
    + 32 bits
      + Sign (S) 1 bit
      + Biased Exponent (E) 8 bits
      + Trailing Significand (T) 23 bits
  + Double
    + 64 bits
      + Sign (S) 1 bit
      + Biased Exponent (E)11 bits
      + Trailing Significand (T) 52 bits
  + Float
    + 128 bits (But only use 80)
      + Sign (S) 1 bit
      + Biased Exponent (E) 15 bits
      + Trailing Significand (T) 64 bits
