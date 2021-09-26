/*
 * Hardware API
 */

#undef _FORTIFY_SOURCE

#include <time.h>
#include <unistd.h>
#include <setjmp.h>
#include <stdio.h>

#include "hardware.h"

int save_context(context_t ctx)
{
    return sigsetjmp(ctx, 0);
}

void restore_context(context_t ctx) __attribute__((noreturn));

void restore_context(context_t ctx)
{
    siglongjmp(ctx, 1);
}

uint64_t current_time_milliseconds(void)
{
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);

    return ((uint64_t)ts.tv_sec) * 1000 + ((uint64_t)ts.tv_nsec) / 1000000;
}
