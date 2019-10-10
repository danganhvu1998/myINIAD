cl3_hw3_sum.o:     file format elf64-x86-64


Disassembly of section .text:

0000000000000000 <sum>:
   0:   55                      push   %rbp
   1:   48 89 e5                mov    %rsp,%rbp
   4:   89 7d ec                mov    %edi,-0x14(%rbp)
   7:   89 75 e8                mov    %esi,-0x18(%rbp)
   a:   c7 45 fc 00 00 00 00    movl   $0x0,-0x4(%rbp)
  11:   eb 0a                   jmp    1d <sum+0x1d>
  13:   8b 45 ec                mov    -0x14(%rbp),%eax
  16:   01 45 fc                add    %eax,-0x4(%rbp)
  19:   83 45 ec 01             addl   $0x1,-0x14(%rbp)
  1d:   8b 45 ec                mov    -0x14(%rbp),%eax
  20:   3b 45 e8                cmp    -0x18(%rbp),%eax
  23:   7e ee                   jle    13 <sum+0x13>
  25:   8b 45 fc                mov    -0x4(%rbp),%eax
  28:   5d                      pop    %rbp
  29:   c3 