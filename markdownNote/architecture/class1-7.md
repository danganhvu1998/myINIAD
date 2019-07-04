Architecture Class 1 -> 7
==================================

+ Class 2
  + ***Logic circuit***
    + ***A logic circuit*** is an electronic circuit in which "logic gates" are connected by "wirings“.
    + There are 3 basic logic gates:
      + AND
      + OR
      + NOT
    + An input signal of 1 means the input voltage is equal to the positive reference voltage (High).
    + An input signal of 0 means that the input voltage is equal to the ground voltage (0)
    + The positive reference voltage is recently around 1V.
    + ![An logic circuit][archi1]
+ Class 3
  + ***Logic symbol and truth table***
    + ![Logic symbol and truth table][archi2]
+ Class 4
  + Adder
    + ![Adder][archi3]
  + Subtraction
    + ![Subtraction][archi4]
  + ALU
    + ![ALU][archi9]
+ Class 5
  + Intruction Code Table
    + ![Intruction Code Table][archi7]
  + Intruction Code
    + ![Intruction Code][archi8]
+ Class 6
  + Register Intruction Code
    + ![Register Intruction Code][archi5]
    + ![Register Intruction Code][archi6]
  + Some Example
    + ![Example][archi10]
    + ![Example][archi11]
+ Class 7
  + ***Clock signal and D-flipflop***
    + Clock = 0: Input data in, hold, but not out
      + ![Clock signal][archi12]
    + Clock 0->1: Stop input, Hold and out last input
      + ![Clock signal][archi13]
    + Clock 1: Hold and out last input
      + ![Clock signal][archi14]
    + Clock 1->0: Output last input, input new input
      + ![Clock signal][archi15]
    + Clock = 0: Output last input, input and hold new input
      + ![Clock signal][archi16]
      + ![Clock signal][archi17]
  + ***Illustrate with ALU***
    + ![Clock signal][archi18]
    + ![Clock signal][archi19]
    + ![Clock signal][archi20]
  + ***Illustrate Instruction execution flow by CPU***
    + ![Illustrate Instruction execution flow by CPU][archi21]
      + At Clock rising edge:
        + Update PC value
        + Register data is updated (From last PC)
        + Read instruction code from new PC value address
        + Decode Op-code and Operand fields.
        + Read operand registers.
        + ALU operation. (But not yet updated to Register)
    + The following are the steps of the instruction execution flow.
      + Instruction fetch
      + Decode
      + Read operand registers
      + Execute ALU operation
      + Calculate address of next instruction to execute
      + Write data to operand register and update PC value
    + Exercise
      + ![Exercise][archi22]
      + ![Exercise][archi23]
      + ![Exercise][archi24]

[archi1]: ./../image/archi1.png
[archi2]: ./../image/archi2.png
[archi3]: ./../image/archi3.png
[archi4]: ./../image/archi4.png
[archi5]: ./../image/archi5.png
[archi6]: ./../image/archi6.png
[archi7]: ./../image/archi7.png
[archi8]: ./../image/archi8.png
[archi9]: ./../image/archi9.png
[archi10]: ./../image/archi10.png
[archi11]: ./../image/archi11.png
[archi12]: ./../image/archi12.png
[archi13]: ./../image/archi13.png
[archi14]: ./../image/archi14.png
[archi15]: ./../image/archi15.png
[archi16]: ./../image/archi16.png
[archi17]: ./../image/archi17.png
[archi18]: ./../image/archi18.png
[archi19]: ./../image/archi19.png
[archi20]: ./../image/archi20.png
[archi21]: ./../image/archi21.png
[archi22]: ./../image/archi22.png
[archi23]: ./../image/archi23.png
[archi24]: ./../image/archi24.png
[archi25]: ./../image/archi25.png
[archi26]: ./../image/archi26.png
[archi27]: ./../image/archi27.png
[archi28]: ./../image/archi28.png
[archi29]: ./../image/archi29.png
