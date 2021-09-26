# Operating System

## x64 Architecture and its Instruction Set

+ 16 general purpose registers
  + r0 -> r7, alias names are given according to their special usages
    + ro = rax: accumulator
    + r1 = rcx: counter
    + r2 = rdx: data
    + r3 = rbx: base
    + r4 = rsp: stack pointer
    + r5 = rbp: base pointer
    + r6 = rsi: source index
    + r7 = rdi: destination index
  + We can add suffixes to access partial bits
    + d: double word: lower 32 bits
    + w: word: lower 16 bits
    + b: byte: lower 8 bits
    + Example
      + r0d = eax: Lower 32 bits of register r0
      + ![Example][00osys01]
      + ![Example][00osys02]

---------

+ How to write operands
  + Argument specified after instructions are called "operands":
    + **movl `$0x1`, `-0x10(%rbp)`**
    + %reg: value contained in register `reg`
    + $num: The number num itself
    + (%reg): value of memory content at address `%reg`
    + num(%reg): value of memory content at address `%reg+num`
    + num1(%reg1, %reg2, num2): value of memory content at address `%reg1 + %reg2*num2 + num1`
    + ![Example][00osys03]

---------

+ Function Call and Calling Convention
  + Function Call Example

    + ```c
        int fact(int n){
          if( n <= 1 ){
            return 1;
          }
          return n * fact(n-1);
        }
      ```

    + ![Example][00osys04]
      + n = %edi
      + If n <= 1
        + %eax = 1
      + Else
        + %edi = n - 1 ( %eax = n; %edi = %edx - 1 )
        + Call fact so that %eax = fact(n-1)
        + %eax *= n
      + Return %eax
  + Calling Convention: A rule of how arguments and return values are passed
    + Rules for passing integer/pointer arguments
      + First Argument: %rdi
      + Second Argument: %rsi
      + Third: %rdx
      + Fourth: %rcx
      + Fifth: %r8
      + Sixth: %r9
    + Rule for returning integer/pointer value: Use %rax
  + ***Stack Frame***
    + Have %rbp(base pointer) and %rsp(stack pointer)
      + ![Example][00osys05]
    + Stack Frame Operations
      + ![Example][00osys06]
      + ![Example][00osys07]
      + Explain:
        + First `pushq %rbp` to save **caller frame** base point
        + Then `movq %rsp, %rbp` to move %rbp to **new frame** base point
        + Then `subq $16, %rsp` to allocate 16 bytes for local variables
          + => All local variables will be store within %rbp and %rps, including caller frame's base pointer

---------

+ API and ABI of System Calls
  + API - Application Programming Interface
    + Interface used withn programming (OS kernel interface for humands)
    + Defines specifications for arguments and return values when programming
  + ABI - Application Binary Interface
    + Interface used by **programs** to access OS kernel functions (OS kernel interface for programs)
    + Define how arguments and return values are passed (%rax)

---------

+ Bitwise Operations in C
  + ">>" and "<<"
  + AND &
  + OR |
  + NOT ~
  + XOR ^
  + ![Example][00osys08]

---------

+ Different between `fopen` and `open` (C library and System Call)
  + ![Example][00osys09]

---------

+ Thread
  + Different of **Process** and **Thread**
    + ![Example][00osys10]
    + Process runs on different contexts(running environments), while threads run on same program environment
    + ![Example][00osys11]
    + => Thread runs with smaller reources, and also easier to colaborate
    + => Also tends to be the source of bugs
  + Race Condition and Mutex
    + A race condition or race hazard is the condition of an electronics, software, or other system where the system's substantive behavior is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when one or more of the possible behaviors is undesirable. 
    + ![Example][00osys12]
    + ![Example][00osys13]
    + **Solution: Synchronization Of Thread - Using Mutex**
    + ![Example][00osys14]
  + Conditional Wait using Condition Variable
    + ![Example][00osys15]
    + ![Example][00osys16]
    + ![Example][00osys17]
    + ![Example][00osys18]

---------

+ Problems Related to Thread Synchronization
  + Mutex on Multiple Shared Resources
    + ![Example][00osys20]
    + ![Example][00osys21]
    + ![Example][00osys22]
  + Dining Philosophers Problem: Deadlock: The situation where multiple threads/processes are waiting for each other to rease resource and thus cannot proceed
    + ![Example][00osys19]
    + Essential conditions for deadlock to occur
      + Mutial exclusion: Only one thread can access resource at the same time
      + Hold and Wait: Thread that acquired resource is waiting for another resource
      + No preemption: Resource can be released only when currenly using thread finish critical section
      + Circular wait: T1's resource is wating by T2, T2's resource is waiting by T3, T3 by T4, ..., and TN's resource is wating by T1
  + Producer-Comsumer Problems
    + The producer–consumer problem (also known as the bounded-buffer problem) is a classic example of a multi-process synchronization problem. The problem describes two processes, the producer and the consumer, who share a common, fixed-size buffer used as a queue. The producer's job is to generate data, put it into the buffer, and start again. At the same time, the consumer is consuming the data (i.e., removing it from the buffer), one piece at a time. The problem is to make sure that the producer won't try to add data into the buffer if it's full and that the consumer won't try to remove data from an empty buffer.
    + ![Example][00osys23]
  + Reader-Writer Problem
    + Situations in which many threadstry to access the same shared resource at one time. Some threads may read and some may write, with the constraint that no thread may access the shared resource for either reading or writing while another thread is in the act of writing to it. In particular, we want to prevent more than one thread modifying the shared resource simultaneously and allow for two or more readers to access the shared resource at the same time.
    + Solution: Using mutex and condition variables with care
      + Not to create **Resource Stavation**: When a thread is reading, and a thread is waiting to write. But other reading thread enter critical sections that might make writing thread wait for too long => Should set writing thead higher priority

---------

+ Scheduling and Dispatch (**Need better detail about all scheduling algorithms**)
  + Scheduling Algorithms
    + Non-preemptive multitasking
      + Currently Not Using
      + Only switch to another thread when current running thead paused by itself
    + Preemptive multitasking
      + Currently Using
      + Threads are switch regardless of status
  + Criteria for evaluating scheduling
    + Maximum CPU usage rate
    + Maximum throughout (processes as much process as possible)
    + Minimum turnaround time
    + Minimum waiting time
    + Minimum response time (Important for interactive system and real-time system)
  + Scheduling Algorithm
    + Traditional
      + First-come, first-served
      + Shortest Job First
      + Priority scheduling
      + Round-robin scheduling
    + CFS - Completely Fair Scheduling

---------

+ Real-Time Systems
  + Computer systems are said to be `read-time` if they can keep the deadline (different from fast)
  + Some definition:
    + Turnaround time is the amount of time taken to complete a process or fulfill a request
    + Waiting time is amount of time a process has been waiting in the ready queue
  + Soft real-time
    + Means that the deadlines are kept must of the time
  + Hard real-time
    + Means that the deadlines are kept all the time
    + Embedded systems are hard real-time
    + Scheduling Algorithm: E
      + DFS - Earliest Deadline First Scheduling
      + RMS - Rate Monotonic Scheduling

---------

+ Memory Management based on Virtual Memory
  + What is Virtual Memory?
    + By virtualizing memory, mutiple independent memories are realised.
    + ![Example][00osys24]
    + How virtual memory can be implemented
      + ![Example][00osys25]
      + Paging
      + ![Example][00osys26]

---------


+ Paging mechanism
  + By using `pages table`, OS kernel manages conversion table of logical address to phisical address in memory.
  + ![Example][00osys27]
  + ![Example][00osys28]
    + V flag(valid): Does the page actually exist on physical memory?
    + P flag(permission): Read only? Write only? Read and Write?
    + D flag(dirty): Does the page modified or not (detail after this)

---------

+ Realizing Virtual Memory based on Paging - Problem: Too Slow => Solution
  + **MMU: Memory Management Unit** (principle is just like cache, but to convert logical address to physical address)
    + ![Example][00osys30]
    + ![Example][00osys31]
  + **Demand Paging**: A technique to procrastinate preparation of phisical memory until the memory content are actuall needed
    + V flag of the page is initialized to 0; and prepare the physical memory and page table entry when a page fault has occurs
      + => Process startup faster, and memory usage is conserved
      + ![Example][00osys32]
  + **Copy on Write**
    + ![Example][00osys33]
  + **Shared library**
    + ![Example][00osys34]

---------

+ Memory Hierarchy and Swapping
  + Memory Hierarchy ![Example][00osys35]
  + It could happen that multiple applications run at the same time, and physical address is not enough
    + => OS will try to save the page block onto disk(swap out), and then restore page block when requited(swap in)
    + ![Example][00osys36]
  + Swapping
    + Swap Out
      + ![Example][00osys37]
    + Swap In
      + ![Example][00osys38]
  + From application perspective
    + ![Example][00osys39]
    + But disks are extremely slow compare to memory => Reduce as much swapping as posible
  + Page replacement Algorithm
    + ![Example][00osys40]
    + OPT: Optimal Page Replacement Algorithm
      + ![Example][00osys41]
      + Problem: Imposible to know what page will be used in future => Imposible to implement  
    + FIFO - First In First Serve
      + ![Example][00osys42]
      + Problem: More page frames causes more swapping ![Example][00osys43]
    + LRU - Least Recently Used
      + ![Example][00osys44]
      + Problem: Heavy calculation ![Example][00osys45]
    + LRU approximation
      + ![Example][00osys46]

---------

+ Thrashing and Working Set
  + Thrashing: In computer science, thrashing occurs when a computer's virtual memory resources are overused, leading to a constant state of paging and page faults, inhibiting most application-level processing. This causes the performance of the computer to degrade or collapse. The situation can continue indefinitely until either the user closes some running applications or the active processes free up additional virtual memory resources.
  + ![Example][00osys47]
  + ![Example][00osys48]
  
---------

+ Memory-mapped file
  + ![Example][00osys49]

[00osys01]: ./../image/00osys01.png
[00osys02]: ./../image/00osys02.png
[00osys03]: ./../image/00osys03.png
[00osys04]: ./../image/00osys04.png
[00osys05]: ./../image/00osys05.png
[00osys06]: ./../image/00osys06.png
[00osys07]: ./../image/00osys07.png
[00osys08]: ./../image/00osys08.png
[00osys09]: ./../image/00osys09.png
[00osys10]: ./../image/00osys10.png
[00osys11]: ./../image/00osys11.png
[00osys12]: ./../image/00osys12.png
[00osys13]: ./../image/00osys13.png
[00osys14]: ./../image/00osys14.png
[00osys15]: ./../image/00osys15.png
[00osys16]: ./../image/00osys16.png
[00osys17]: ./../image/00osys17.png
[00osys18]: ./../image/00osys18.png
[00osys19]: ./../image/00osys19.png
[00osys20]: ./../image/00osys20.png
[00osys21]: ./../image/00osys21.png
[00osys22]: ./../image/00osys22.png
[00osys23]: ./../image/00osys23.png
[00osys24]: ./../image/00osys24.png
[00osys25]: ./../image/00osys25.png
[00osys26]: ./../image/00osys26.png
[00osys27]: ./../image/00osys27.png
[00osys28]: ./../image/00osys28.png
[00osys29]: ./../image/00osys29.png
[00osys30]: ./../image/00osys30.png
[00osys31]: ./../image/00osys31.png
[00osys32]: ./../image/00osys32.png
[00osys33]: ./../image/00osys33.png
[00osys34]: ./../image/00osys34.png
[00osys35]: ./../image/00osys35.png
[00osys36]: ./../image/00osys36.png
[00osys37]: ./../image/00osys37.png
[00osys38]: ./../image/00osys38.png
[00osys39]: ./../image/00osys39.png
[00osys40]: ./../image/00osys40.png
[00osys41]: ./../image/00osys41.png
[00osys42]: ./../image/00osys42.png
[00osys43]: ./../image/00osys43.png
[00osys44]: ./../image/00osys44.png
[00osys45]: ./../image/00osys45.png
[00osys46]: ./../image/00osys46.png
[00osys47]: ./../image/00osys47.png
[00osys48]: ./../image/00osys48.png
[00osys49]: ./../image/00osys49.png
[00osys50]: ./../image/00osys50.png
[00osys51]: ./../image/00osys51.png
[00osys52]: ./../image/00osys52.png
[00osys53]: ./../image/00osys53.png
[00osys54]: ./../image/00osys54.png
[00osys55]: ./../image/00osys55.png
[00osys56]: ./../image/00osys56.png
[00osys57]: ./../image/00osys57.png
[00osys58]: ./../image/00osys58.png
[00osys59]: ./../image/00osys59.png
[00osys60]: ./../image/00osys60.png
[00osys61]: ./../image/00osys61.png
[00osys62]: ./../image/00osys62.png
[00osys63]: ./../image/00osys63.png
[00osys64]: ./../image/00osys64.png
[00osys65]: ./../image/00osys65.png
[00osys66]: ./../image/00osys66.png
[00osys67]: ./../image/00osys67.png
[00osys68]: ./../image/00osys68.png
[00osys69]: ./../image/00osys69.png
[00osys70]: ./../image/00osys70.png
