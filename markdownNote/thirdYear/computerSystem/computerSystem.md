# Computer Systems Classification

## Hardware Classification

### Size

+ `General Purpose Computer` and `Special Purpose Computer`
+ Size ( Mini, Personal, Supercomputer)
+ `Centralized System` and `Distributed System`
+ Distributed System:
  + A collection of independent computers that appears to user as a single coherent system
  + ![Error][00comsys1]

### CPU Architecture Classification

+ `Single core` vs `Many cores`
  + `Single Core`: asingle chip with a single CPU
  + `Many Core`:
    + Improve processing speed by operating many CPUs on 1 chip at the same time. Also has other benefit for example power saving
    + Generally, many-core CPU is homogeneous configuration (have same config). A device with many core but uses a heterogeneous configuratuin is not a  `many core`
+ `CISC` vs `RISC`
  + `CISC: Complex Intruction Set Computer`
    + 1 intruction code tale multiple clocks tp process (Computer Architecture Class)
    + CPU is complicate to make (Intruction code is not in a fixed size; Take multiple step to finish; etc)
  + `RISC: Reduced Intruction Set Computer`
    + Enables high-speed processing by simplifying the intructions set. Each intruction set do exacly 1 thing, and have fixed length.
  + For example: To add 1 to number in memory address 100. `CISC` need only 1 intruction. But `RISC` need 3:
    + Get the value in address 100
    + Add 1 to it
    + Write it back to address 100
  + So compiler plays a bigger roles in `RISC`
+ `Scalar Computer` vs `Vector Computer`
  + ![Error][00comsys3]
+ `Instruction parallelism` vs `Data Parallelism`
  + ![Error][00comsys2]
+ `Single Processor`, `Multiprocessor`, `Multicomputers`
  + `Single Processor`: ![Error][00comsys4]
  + `Multiprocessor` and `Multicomputers`
    + ![Error][00comsys5]
      + `Multiprocessor`
        + System with shared memory
        + If 1 CPU writes 1000 to address y. Other CPU can read 1000 from address y
        + `Bus-based`
          + Since the bus will be overloaded with about 4 CPUs. For maintaining the memory's coherent, `cache memory` is introduced between the `CPU` and the `bus`
          + However, the coherent property can be lost due to `cache memory` aswell since it is quite the same as a private memory.
          + ![Error][00comsys6]
        + `Switch-based`
          + There are individual wire from machine to machine with many different wiring partterns to use: ![Error][00comsys7]
          + Message moves along the wires, with an explicit switching decision made at each step to route the message along one of the outgoing wires
      + `Multicomputers`
        + System without shared memory
        + Even after any CPU writes 1000 to address y. Other CPU still get the value before writing.
        + There are homogeneous and heterogeneous multicomputer systems
          + ![Error][00comsys9] ![Error][00comsys8]

## Software Classification

Different system is managed by different type of software

### Operating System (OS)

+ Resource manager: Allow users and applications an easy way to share resoure such as CPU, main memory, disk, peripheral device
+ Support `kernel mode` and `user mode`
  + `kernel mode`
    + All intruction are permitted to be executed
    + Whole memory and collection of all registers is accessible during execution
  + `user mode`
    + Memory and register access is restricted
  + Switching from `user mode` to `kernel mode` via `system call` (?)
+ `Uniprocessor OS`: ![Error][00comsys10]

### Distributed Operating System (DOS): Tightly-coupled OS

+ Functionality is essentially the same. Main different is the ability to handle multiple CPUs
+ There are 2 types of DOS
  + `Multiprocessor OS`
    + Data in shared memory are accessible by multiple processors (best way to communicate). Anything the OS need to manage the hardware are placed into shared memory
    + The data are accessible by all processor, so have to have mechanism to ensure consistency
    + Many OS cannot handle multiple CPUs as they are designed as monolithic programs that can execure only 1 thread at a time
    + Modern OS are designed to be able to handle multiple processor (By having multiple thread running sequently)
    + Multiprocessor OS aim to support high performance through multiple CPUs by making the number of CPUs transparent to the applications
    + All communication is done by changing data at shared memory. We have to protect data against simultaneous access (ex: 2 thread add 1 to var at location y. But the result might be that value only increase by 1). To do that, we can use [semaphore](https://en.wikipedia.org/wiki/Semaphore_(programming)) and monitors
  + `Multicomputer OS`
    + Only way to communicate is though message passing ![Error][00comsys11]
    + Best way is to emulate(giả lập) a shared memory on multicomputers
    + One approach to use virtual memory is `page-based distributed share momory DSM`
      + ![Error][00comsys12]
      + Note: pay attendtion to different when CPU 1 want to read & write page 10, and when it want to read only.
      + ![Error][00comsys13]

### Netowrk Operating System (NOS): Loosely-coupled OS

+ In contrast to `DOS`, `NOS` does not assume that underlying hardware is homogeneous, and that it shoule be able to manage all of them as a single system ![Error][00comsys14]

### Middleware: Additional layer on top of NOS

+ Sits in the middle of applications and the network operating system to simplify development in tntegration of distributed application.
  + ![Error][00comsys15]
+ Most middleware us based on some model, or paradigm, for describing everything as a file

## SUM UP

![Error][00comsys17]
![Error][00comsys16]

[00comsys1]: ./../image/00comsys1.png
[00comsys2]: ./../image/00comsys2.png
[00comsys3]: ./../image/00comsys3.png
[00comsys4]: ./../image/00comsys4.png
[00comsys5]: ./../image/00comsys5.png
[00comsys6]: ./../image/00comsys6.png
[00comsys7]: ./../image/00comsys7.png
[00comsys8]: ./../image/00comsys8.png
[00comsys9]: ./../image/00comsys9.png
[00comsys10]: ./../image/00comsys10.png
[00comsys11]: ./../image/00comsys11.png
[00comsys12]: ./../image/00comsys12.png
[00comsys13]: ./../image/00comsys13.png
[00comsys14]: ./../image/00comsys14.png
[00comsys15]: ./../image/00comsys15.png
[00comsys16]: ./../image/00comsys16.png
[00comsys17]: ./../image/00comsys17.png
[00comsys18]: ./../image/00comsys18.png
[00comsys19]: ./../image/00comsys19.png
[00comsys20]: ./../image/00comsys20.png
[00comsys21]: ./../image/00comsys21.png
[00comsys22]: ./../image/00comsys22.png
[00comsys23]: ./../image/00comsys23.png
[00comsys24]: ./../image/00comsys24.png
[00comsys25]: ./../image/00comsys25.png
[00comsys26]: ./../image/00comsys26.png
[00comsys27]: ./../image/00comsys27.png
[00comsys28]: ./../image/00comsys28.png
[00comsys29]: ./../image/00comsys29.png
[00comsys30]: ./../image/00comsys30.png
[00comsys31]: ./../image/00comsys31.png
[00comsys32]: ./../image/00comsys32.png
[00comsys33]: ./../image/00comsys33.gif
[00comsys34]: ./../image/00comsys34.png
[00comsys35]: ./../image/00comsys35.png
[00comsys36]: ./../image/00comsys36.png
[00comsys37]: ./../image/00comsys37.png
[00comsys38]: ./../image/00comsys38.png
[00comsys39]: ./../image/00comsys39.png
[00comsys40]: ./../image/00comsys40.png
[00comsys41]: ./../image/00comsys41.png
[00comsys42]: ./../image/00comsys42.png
[00comsys43]: ./../image/00comsys43.png
[00comsys44]: ./../image/00comsys44.png
[00comsys45]: ./../image/00comsys45.png
[00comsys46]: ./../image/00comsys46.png
[00comsys47]: ./../image/00comsys47.png
[00comsys48]: ./../image/00comsys48.png
[00comsys49]: ./../image/00comsys49.png
[00comsys50]: ./../image/00comsys50.png
[00comsys51]: ./../image/00comsys51.png
[00comsys52]: ./../image/00comsys52.png
[00comsys53]: ./../image/00comsys53.png
[00comsys54]: ./../image/00comsys54.png
[00comsys55]: ./../image/00comsys55.png
[00comsys56]: ./../image/00comsys56.png
[00comsys57]: ./../image/00comsys57.png
[00comsys58]: ./../image/00comsys58.png
[00comsys59]: ./../image/00comsys59.png
[00comsys60]: ./../image/00comsys60.png
[00comsys61]: ./../image/00comsys61.png
[00comsys62]: ./../image/00comsys62.png
[00comsys63]: ./../image/00comsys63.png
[00comsys64]: ./../image/00comsys64.png
[00comsys65]: ./../image/00comsys65.png
[00comsys66]: ./../image/00comsys66.png
[00comsys67]: ./../image/00comsys67.png
[00comsys68]: ./../image/00comsys68.png
[00comsys69]: ./../image/00comsys69.png
[00comsys70]: ./../image/00comsys70.png