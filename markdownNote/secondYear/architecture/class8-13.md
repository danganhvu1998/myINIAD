architecture Class 8 -> 13
==================================

+ <span style="color:MediumSpringGreen ">***Class 8: Propram and instructions***</span>
  + <span style="color:tomato">***From Program To Machine cooe***</span>
    + Able to read simple machine code
    + Statements and expressions are translated into instruction sequences.
    + Early computers were programmed with instructions side by side.
    + Statements and expressions of a programming language are generalization of the function of instructions
    + Variables are mapped to registers and memory words.
    + Variables are generalization of ***registers and memory***
  + <span style="color:tomato">***Instruction Type***</span>
    + <span style="color:MediumSeaGreen">***Load/store instructions***</span>
      + Instructions to read data from memory and instructions to write data to memory
        + mov 0x8(%ebp),%eax -> eax = memory[ebp+8]
        + mov %eax,(%esp) -> memory[esp] = eax
    + <span style="color:MediumSeaGreen">***Data transfer instructions***</span>
      + Instructions to transfer data from one register to another and instructions to set a constant in a register.
        + mov %esp,%ebp -> ebp = esp
        + mov $0x1,%eax -> eax = 1
    + <span style="color:MediumSeaGreen">***Arithmetic instructions***</span>
      + Instructions to execute ALU operation, shift operation etc.
        + sub $0x18,%esp -> esp = esp-24
        + cmpl $0x1,0x8(%ebp) -> memory[ebp+8]-1
        + sub $0x1,%eax -> eax = eax-1
        + imul 0x8(%ebp),%eax -> eax = eax*memory[ebp+8]
    + <span style="color:MediumSeaGreen">***Jump instructions***</span>
      + Instructions that explicitly specifies the address of the instruction to be executed next
      + jmp 25 <_factorial+0x25> -> jump to <_factorial+0x25>
  + <span style="color:tomato">***Addressing Mode***</span>
    + <span style="color:MediumSeaGreen">***Register mode***</span>
      + Assuming that the register number is r, operand = Register[r]
        + mov %esp,%ebp
        + sub $0x18,%esp
    + <span style="color:MediumSeaGreen">***Register indirect mode***</span>
      + Assuming that the register number is r, the operand = Memory[Register[r]].
        + mov %eax,(%esp)
    + <span style="color:MediumSeaGreen">***Register relative indirect mode***</span>
      + Assuming that the register number is r and displacement is d,the operand = Memory[Register[r]+d].
        + cmpl $0x1,0x8(%ebp)
        + mov 0x8(%ebp),%eax
        + imul 0x8(%ebp),%eax
    + <span style="color:MediumSeaGreen">***Immediate mode***</span>
      + Assuming that the immediate value is im, the operand = im.
        + sub $0x18,%esp
        + cmpl $0x1,0x8(%ebp)
        + mov $0x1,%eax
  + <span style="color:tomato">***Compound Instruction***</span>
    + Is the instructions of function that combining multiple instructions
      + push %ebp
        + esp = esp-4
        + Memory[esp] = ebp
      + call 0 <_factorial>
        + esp = esp-4
        + Memory[esp] = address of instruction next to “call”.
        + jump to <_factorial>
+ <span style="color:MediumSpringGreen ">***Class 9: Memory***</span>
  + <span style="color:tomato">***Memory Access***</span>
    + Machine code (instructions) is stored in memory and executed.
    + Instruction code length
      + CPU16: 16-bit (2-byte)
      + x86: 8-bit x N(N-byte)
    + Data is also stored in memory and accessed by instructions.
    + Memory interface is a set of address & data buses
      + Addresses of data in memory is usually assigned by byte (8-bit) unit.
      + Data in memory is accessed via the data bus.
        + ***The bus width of the data bus, that is, the size of data that can be handled by one access, is called "word".***
    + Data placement based on data size boundaries.
      + OK: ![memory][00archi1]
      + Not OK: ![memory][00archi2]
    + <span style="color:MediumSeaGreen">***Endian Mode***</span>
      + There are two ways to address the bytes in a word.
      + Big endian and little endian
        + ![memory][00archi3]
      + 32'h01234567 is written to address 4b
        + ![memory][00archi4]
  + <span style="color:tomato">***Memory structure***</span>
    + Address: Select one or more bit cells in memory.
    + Data
      + When reading: The data of the selected bit cell is read
      + When writing: This data is written to the selected bit cell
    + Command: Control memory operation. (Read, write, etc.)
    + ![memory][00archi5]
  + <span style="color:tomato">***Bit Cell Circuit***</span>
    + <span style="color:MediumSeaGreen">***SRAM - Static Random Access Memory***</span>
      + ![memory][00archi11]
      + ![memory][00archi9]
      + Data is determined by amplifying the voltage difference between BL pair.
        + ![memory][00archi10]
      + It can read and write as fast as register bit cells.
      + Requires 6 transistors per bit cell, and a large area.
      + Data can be held as long as power is supplied.
      + Can be made of the same transistor as the logic circuit.
    + <span style="color:MediumSeaGreen">***DRAM - Dynamic Random Access Memory***</span>
      + Write: Charge a capacitor from a bit line.
        + Store 1 or 0 by the presence or absence of charge
        + ![memory][00archi7]
      + Read: Discharge capacitor charge to a bit line.
        + Data is determined by amplifying difference between bit line voltage and reference voltage.
        + ![memory][00archi8]
        + After reading, have to re-write
      + Access is slower compared to SRAM.
      + 1 transistor + 1 capacitor per bit cell, and a small area
  + <span style="color:tomato">***Memory System***</span>
    + <span style="color:MediumSeaGreen">***SRAM vs DRAM***</span>
      + SRAM
        + Pros: High-speed access, no problem for CPU integration
        + Cons: High cost, small capacity
      + DRAM
        + Pros: Large capacity, low cost
        + Cons: Slow access, CPU integration possible but high cost. Access time is 30ns, so 1 cycle access is not possible at higher than 33MHz.
    + <span style="color:MediumSeaGreen">***Sollution***</span>
      + SRAM: Integrated with CPU as high-speed "cache memory“.
      + DRAM: Placed outside the CPU as scalable external memory. (RAM)
  + <span style="color:tomato">***Cache Memory***</span>
    + Fully Associative
      + ![cache][00archi32]
      + Tag: A[0:26]
      + Position of data in like: byte A[27:31] (lower 5 bit)
      + When looking for data in cache, have to compare to all tags
    + Direct Mapped
      + ![cache][00archi33]
      + Tag: A[0:26] but A[19:26](lower 8 bit of tag) also indicate the only line that allowed to contain it.
      + Position of data in like: byte A[27:31] (lower 5 bit)
      + When looking for data in cache, only have to compare with line A[19:26]
    + 2-way set associative
      + ![cache][00archi34]
      + Tag: A[0:26] but A[20:26](lower 7 bit of tag) also indicate line that allowed to contain it (line A[20:26]\*2 and line A[20:26]\*2+1).
        + If A[20:26] == 0 then it can be in line 0 or 1
        + If A[20:26] == 1 then it can be in line 2 or 3
        + ...
        + If A[20:26] == 127 then it can be in line 254 or 255
      + Position of data in like: byte A[27:31] (lower 5 bit)
      + When looking for data in cache, only have to compare with line A[19:26]
+ <span style="color:MediumSpringGreen ">***Class 10: Pipelined instruction processing***</span>
  + <span style="color:tomato">***Append instructions to CPU16***</span>
    + ![pipelined instruction][00archi12]
    + ![pipelined instruction][00archi13]
    + ![pipelined instruction][00archi14]
    + ![pipelined instruction][00archi15]
  + <span style="color:tomato">***Instruction processing pipeline***</span>
    + ![pipelined instruction][00archi16]
    + <span style="color:MediumSeaGreen">***Stages***</span>
      + Instruction fetch (IF): Instruction read from memory
        + Cache -> Memory
      + Decode (D): Instruction code decoding
        + Instruction code format that allows each field to be decoded in parallel
      + Execution & address calculation (EX): Addition and multiplication
      + Memory access (MA): Read data from memory and write data to memory
    + ![pipelined instruction][00archi17]
    + ![pipelined instruction][00archi18]
+ <span style="color:tomato">***Pipeline processing issues***</span>
  + Cache memory is essential to read instructions and data from external memory (DRAM) and pipeline processing at clock frequency of 100MHz or more.
    + DRAM access time = 30nsec exceeds 100 MHz 1 cycle = 10nsec
    + If a cache miss occurs, the operation of the IF stage or MA stage takes multiple cycles
  + If the instruction code to be read is compact, the operation of the IF stage is completed in a small number of cycle
  + If the bus width for reading the instruction code is wide, the operation of the IF stage is completed in a small number of cycles.
  + Stopping the operation of pipeline processing is called “stall”.
    + Cache miss
    + Awaiting completion of previous stage
    + Occurrence of branching (jump)
    + ***Reducing stalls is the key for improving pipeline processing performance.***
+ <span style="color:MediumSpringGreen ">***Class 11: Highiperformance instruction processing***</span>
  + <span style="color:tomato">***Instruction pipeline basics***</span>
    + ![Highiperformance][00archi19]
    + Time required to set D-FF: tdff
    + t(IF) time require to perform IF, ...
      + T = t(IF)+t(D)+t(EX)+t(MA)
      + F = 1/tcc
      + F < 1/max(t(IF),t(D),t(EX),t(MA))+tdff
        + -> F < 1/ ( 4/T + tdff)
        + -> Pipeline performance improvement diminishes with increasing number of stages.
  + <span style="color:tomato">***Pipeline processing issues***</span>
    + The pipeline processing stop is called "stall"
    + ![Highiperformance][00archi20]
    + A stall occurs when a subsequent instruction can not be processed without waiting for the completion of the preceding instruction in the pipeline.
    + The cause of pipeline stall is called "hazard".
      + <span style="color:MediumSeaGreen">***Branch hazard***</span> Hazard from jump processing
        + <span style="color:Chartreuse ">***Reason 1***</span>
          + Preceding instruction: Jump instruction
          + Subsequent instruction can not be fetched by IF until jump address is calculated by EX
          + A solution: Specially detect jump instruction in IF and calculate jump destination in D.
          + <span style="color:red">***Issue***</span>
            + In order to perform both instruction fetch and jump detection in IF, the instruction code must be easy to detect jumps.
            + Even if the jump destination is calculated in D, one cycle of stall remains.
        + <span style="color:Chartreuse ">***Reason 2***</span>
          + Preceding instruction: CMP
          + Subsequent instruction: Conditional branch instruction (BC)
          + The address of the next execution instruction can not be calculated until the CMP processing is completed in EX.
          + A solution: Branch prediction (Predicting whether or not the conditional branch instruction will take branch based on the history.)
          + <span style="color:red">***Issue***</span>
            + How to predict whether to branch.
            + How to recover when the prediction misses.
      + <span style="color:MediumSeaGreen">***Data hazard***</span> Hazard due to a subsequent instruction referencing data generated by a preceding instruction.
        + Preceding instruction: Load instruction
        + Until the data loading to the register is completed in MA, it is impossible to process the subsequent instruction that reads the data in EX.
        + One cycle stall for a cache hit, and a multiple cycle stall for a cache miss
        + A solution: Instruction overtaking (The subsequent instructions overtakes the instruction waiting for the data load.)
        + <span style="color:red">***Issue***</span>
          + Judgement method for the execution order change.
      + <span style="color:MediumSeaGreen">***Structure hazard***</span> Hazard due to multiple stages using the same operation resource (circuit)
        + Preceding instruction: Load/store
        + A solution: Separate instruction cache and data cache so that instruction fetch and data access can be executed in parallel.
+ <span style="color:tomato">***Performance improvement***</span>
  + <span style="color:MediumSeaGreen">***Increasing the number of stages***</span>
    + ![Performance improvement][00archi21]
    + Reduce the time taken to process one stage and increase the clock frequency.
    + Since there is tdff, there is a limit to the frequency improvement by multistage pipeline.
    + The number of stall cycles increases as the number of stages increases.
    + The number of stall cycles increases when a branch prediction misses
    + ![Performance improvement][00archi22]
    + ![Performance improvement][00archi23]
  + <span style="color:MediumSeaGreen">***Superscalar***</span>
    + Multiple instructions are processed in parallel in each stage of the pipeline.
      + ![Performance improvement][00archi24]
      + Instructions to be executed are fetched from one instruction sequence.
      + Multiple instructions can be completed in one cycle
      + The CPU hardware determines if the instructions can be processed in parallel
      + Due to data hazards and structural hazards, multiple instructions can not always be processed in parallel.
  + <span style="color:MediumSeaGreen">***Multithreading***</span>
    + In one superscalar pipeline, multiple instructions fetched from multiple instruction sequences "threads" are processed in parallel.
      + The instruction sequence of each thread is specified by the program.
      + Since different registers are allocated to each thread, data hazards of register reference do not occur between instructions of different threads.
      + <span style="color:Chartreuse ">***Important***</span> If a stall occurs in the processing of one thread, the stall cycles can be filled with the processing of another thread, therefore the possibility increases that multiple instructions can be processed in parallel.
  + <span style="color:MediumSeaGreen">***Multicore***</span>
    + Run multiple programs on multiple CPUs (multiple pipelines).
      + Operating system (OS) manages execution of multiple programs.
      + Various connection methods of multiple CPUs and memory systems.
+ <span style="color:MediumSpringGreen ">***Class 13: OS assist functions***</span>
  + <span style="color:tomato">***Role of OS***</span>
    + OS (Operating System) is a program.
    + OS is the program to be started first by power on and will continues until power off.
    + The OS manages simultaneous execution of multiple programs
      + <span style="color:Chartreuse ">***Important***</span> It is not completely simultaneous.
      + Running multiple programs while switching their execution
    + There are two types of triggers for switching from the execution of one program to the execution of another program
      + Since the current program has been executed for a certain period of time, the execution of that program is suspended and the next program is executed.《Time sharing》
      + Since it is necessary to wait for notification from an external device to continue program execution, another program is executed while waiting.《Event driven》
        + There was a key input on the keyboard
        + Email transmission to the network was accepted
  + <span style="color:tomato">***OS and tasks***</span>
    + ![OS][00archi25]
    + The OS manages execution of multiple programs
    + Two types of programs managed by the OS:
      + <span style="color:Chartreuse ">***TASK***</span>
        + A program that runs as a "task". (Application program started by the user)
        + The task code is called from the OS as in the case of a function call.
        + In the case of function calls, the function code is always executed from the beginning
        + In the case of task calls
          + In the first call, the task code is executed from the beginning.
          + From the next call, the task code is executed from the point where it was suspended previously.
        + ![TASK][00archi26]
      + <span style="color:Chartreuse ">***INTERRUPT HANDLER***</span>
        + A program that runs as an "interrupt handler". (Interrupt handlers are included in the OS code.)
  + <span style="color:tomato">***Multi tasking***</span>
    + ![TASK][00archi27]
    + ![TASK][00archi28]
    + When the OS suspends a task, the register values at that time are saved in the TCB.
    + When the OS resumes the task, the values saved in the TCB are restored to the registers and the CPU jumps to the resume address.
  + <span style="color:tomato">***Call interrupt handler***</span>
    + Hardware assistance is essential to simultaneously execute task code and detect an interrupt from an I/O device.
      + I/O devices operate in parallel with the CPU.
      + The "timer" measuring time is also one of the I/O devices.
    + <span style="color:MediumSpringGreen ">***How is interrupt detection implemented***</span>
      + Each I/O device sets the I/O interrupt signal to 1 when an event requiring an interrupt occurs.
      + The interrupt controller ORs the I/O interrupt signal and sends the result to the CPU as an external interrupt signal
      + When the external interrupt signal=1, the CPU jumps to a special “interrupt processing sequence” without continuing the instruction sequence  being executed.
      + ![interrupt][00archi29]
  + <span style="color:tomato">***Interrupt disable mode***</span>
    + The code of the interrupt processing sequence must be executed in interrupt disable mode.
      + If the interrupt is not disabled, the operation of interrupt detection starts again before the first instruction of the interrupt processing sequence is executed.
      + As a result, interrupt detection is repeated infinitely
      + ![interrupt][00archi30]
    + <span style="color:MediumSpringGreen">***The solution***</span>
      + Turn on the interrupt disable mode before jumping to the interrupt processing sequence
      + After processing the interrupt with the interrupt handler, reset the I/O interrupt signal to 0 and then turn off the interrupt disable mode
      + This operation avoids repeated interrupt detection for the same I/O interrupt.
    + <span style="color:MediumSpringGreen">***Interrupt detection in consideration of interrupt disable mode***</span>
      + Each I/O device sets the I/O interrupt signal to 1 when an event requiring an interrupt occurs
      + The interrupt controller ORs the I/O interrupt signal and sends the result to the CPU as an external interrupt signal.
      + When the interrupt disable ***mode=Off*** and the external interrupt ***signal=1***, the CPU sets the interrupt disable mode to On and jumps to the interrupt processing sequence.
      + ![interrupt][00archi31]
    + The interrupt disable mode is essential to process multiple I/O interrupts one by one.
    + If the interrupt disable period becomes long, an unhandled I/O interrupts occur.
    + <span style="color:MediumSpringGreen">***Shorten interrupt disable period***</span>
      + ![interrupt][00archi35]
      + The I/O processing code is divided into two parts. The part with high urgency (Ex: data reading) is executed immediately by an interrupt handler in the interrupt disable mode.
      + Other processing on the read data is performed by a normal task
        + ![interrupt][00archi36]
      + <span style="color:OrangeRed">As a result, time in disable mode is shorten. And also interrupts can be handled in order from high priority to low priority</span>
        + ![interrupt][00archi37]


[00archi1]: ./../image/00archi1.png
[00archi2]: ./../image/00archi2.png
[00archi3]: ./../image/00archi3.png
[00archi4]: ./../image/00archi4.png
[00archi5]: ./../image/00archi5.png
[00archi6]: ./../image/00archi6.png
[00archi7]: ./../image/00archi7.png
[00archi8]: ./../image/00archi8.png
[00archi9]: ./../image/00archi9.png
[00archi10]: ./../image/00archi10.png
[00archi11]: ./../image/00archi11.png
[00archi12]: ./../image/00archi12.png
[00archi13]: ./../image/00archi13.png
[00archi14]: ./../image/00archi14.png
[00archi15]: ./../image/00archi15.png
[00archi16]: ./../image/00archi16.png
[00archi17]: ./../image/00archi17.png
[00archi18]: ./../image/00archi18.png
[00archi19]: ./../image/00archi19.png
[00archi20]: ./../image/00archi20.png
[00archi21]: ./../image/00archi21.png
[00archi22]: ./../image/00archi22.png
[00archi23]: ./../image/00archi23.png
[00archi24]: ./../image/00archi24.png
[00archi25]: ./../image/00archi25.png
[00archi26]: ./../image/00archi26.png
[00archi27]: ./../image/00archi27.png
[00archi28]: ./../image/00archi28.png
[00archi29]: ./../image/00archi29.png
[00archi30]: ./../image/00archi30.png
[00archi31]: ./../image/00archi31.png
[00archi32]: ./../image/00archi32.png
[00archi33]: ./../image/00archi33.png
[00archi34]: ./../image/00archi34.png
[00archi35]: ./../image/00archi35.png
[00archi36]: ./../image/00archi36.png
[00archi37]: ./../image/00archi37.png
[00archi38]: ./../image/00archi38.png
[00archi39]: ./../image/00archi39.png
[00archi40]: ./../image/00archi40.png
[00archi41]: ./../image/00archi41.png
[00archi42]: ./../image/00archi42.png
[00archi43]: ./../image/00archi43.png
[00archi44]: ./../image/00archi44.png
[00archi45]: ./../image/00archi45.png
[00archi46]: ./../image/00archi46.png
[00archi47]: ./../image/00archi47.png
[00archi48]: ./../image/00archi48.png
[00archi49]: ./../image/00archi49.png

