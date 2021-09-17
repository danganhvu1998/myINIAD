	.file	"password.c"
	.text
	.section	.rodata
.LC0:
	.string	"input password: "
.LC1:
	.string	"ERROR\n"
	.align 8
.LC2:
	.string	"Congratulations! You have found the password!"
	.align 8
.LC3:
	.string	"Password is not correct. Try again!"
	.text
	.globl	main
	.type	main, @function
main:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$288, %rsp
	movq	%fs:40, %rax
	movq	%rax, -8(%rbp)
	xorl	%eax, %eax
	movabsq	$7597125501272551017, %rax
	movabsq	$28254603122926689, %rdx
	movq	%rax, -144(%rbp)
	movq	%rdx, -136(%rbp)
	leaq	-128(%rbp), %rdx
	movl	$0, %eax
	movl	$14, %ecx
	movq	%rdx, %rdi
	rep stosq
	leaq	.LC0(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	stdin(%rip), %rdx
	leaq	-272(%rbp), %rax
	movl	$128, %esi
	movq	%rax, %rdi
	call	fgets@PLT
	testq	%rax, %rax
	jne	.L2
	movq	stderr(%rip), %rax
	movq	%rax, %rcx
	movl	$6, %edx
	movl	$1, %esi
	leaq	.LC1(%rip), %rdi
	call	fwrite@PLT
	movl	$1, %eax
	jmp	.L9
.L2:
	leaq	-272(%rbp), %rax
	movq	%rax, %rdi
	call	strlen@PLT
	movl	%eax, -276(%rbp)
	cmpl	$0, -276(%rbp)
	js	.L4
	movl	-276(%rbp), %eax
	subl	$1, %eax
	cltq
	movzbl	-272(%rbp,%rax), %eax
	cmpb	$10, %al
	jne	.L4
	movl	-276(%rbp), %eax
	subl	$1, %eax
	cltq
	movb	$0, -272(%rbp,%rax)
.L4:
	leaq	-144(%rbp), %rax
	movq	%rax, %rdi
	call	strlen@PLT
	movl	%eax, -276(%rbp)
	movl	$0, -280(%rbp)
	jmp	.L5
.L6:
	movl	-280(%rbp), %eax
	cltq
	movzbl	-144(%rbp,%rax), %eax
	movl	%eax, %edx
	movl	-280(%rbp), %eax
	addl	%edx, %eax
	movl	%eax, %edx
	movl	-280(%rbp), %eax
	cltq
	movb	%dl, -144(%rbp,%rax)
	addl	$1, -280(%rbp)
.L5:
	movl	-280(%rbp), %eax
	cmpl	-276(%rbp), %eax
	jl	.L6
	leaq	-144(%rbp), %rdx
	leaq	-272(%rbp), %rax
	movq	%rdx, %rsi
	movq	%rax, %rdi
	call	strcmp@PLT
	testl	%eax, %eax
	jne	.L7
	leaq	.LC2(%rip), %rdi
	call	puts@PLT
	jmp	.L8
.L7:
	leaq	.LC3(%rip), %rdi
	call	puts@PLT
.L8:
	movl	$0, %eax
.L9:
	movq	-8(%rbp), %rcx
	xorq	%fs:40, %rcx
	je	.L10
	call	__stack_chk_fail@PLT
.L10:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 7.3.0-27ubuntu1~18.04) 7.3.0"
	.section	.note.GNU-stack,"",@progbits