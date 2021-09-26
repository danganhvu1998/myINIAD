#ifndef DEFINE_H_HARDWARE
#define DEFINE_H_HARDWARE

#include <stdint.h>
#include <setjmp.h>

typedef int64_t millis_t;
typedef jmp_buf context_t;

extern int save_context(context_t ctx);
extern void restore_context(context_t ctx) __attribute__((noreturn));

extern uint64_t current_time_milliseconds(void);

#define set_stack_pointer(sp) __asm__("mov %0, %%rsp"::"r"(sp))
#define get_stack_pointer(sp) __asm__("mov %%rsp, %0":"=r"(sp))

#endif /* DEFINE_H_HARDWARE */
