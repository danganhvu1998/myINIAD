	.text
	.globl	print_string
	.type	print_string, @function
print_string:
        mov     %rdi, %rsi
        lea     .L1(%rip), %rdi
        mov     $0, %rax
        call    printf
	ret
.L1:
        .string "%s"

	.text
	.globl	print_int
	.type	print_int, @function
print_int:
        mov     %rdi, %rsi
        lea     .L2(%rip), %rdi
        mov     $0, %rax
        call    printf
	ret
.L2:
        .string "%d"
