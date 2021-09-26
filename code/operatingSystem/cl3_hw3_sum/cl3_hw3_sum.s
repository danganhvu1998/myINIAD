/*
        sigma(n) = 1 + 2 + 3 + ... + n
 */
        
        .text
        .globl  sum
sum:
        push    %rbp
        mov     %rsp, %rbp
        mov     $0, %eax
        mov     %edi, %ecx
        
.loop:
        cmp     %esi, %ecx
        jg     .end            /* jump if greater */
        add     %ecx, %eax
        add     $1, %ecx
        jmp     .loop
.end:
        leave
        ret


        
