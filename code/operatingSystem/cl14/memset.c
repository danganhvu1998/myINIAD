/*
 * Note: You need to compile this program with "-O3" option
 *   $ gcc -Wall -O3 memspeed.c -o memspeed
 */

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sched.h>
#include <stdint.h>
#include <time.h>

#define NBASE 100000000
#define STEP  (4096 + 64 + 1)

static inline uint64_t rdtsc()
{
    uint32_t hi, lo;
    asm volatile("rdtsc":"=a"(lo), "=d"(hi));
    return ((uint64_t)lo) | (((uint64_t)hi) << 32);
}

int main(int argc, char* argv[])
{
    register unsigned int wss, i, j, pos, n, sum = 0;
    volatile unsigned char* array;
    int er;
    cpu_set_t mask;
    double t;
    uint64_t start, end, elapsed;
    
    if (argc != 2) {
        fprintf(stderr, "Usage: memspeed <wss>\n");
        return 1;
    }

    wss = (unsigned int)atoi(argv[1]);
    if (wss < 1) {
        fprintf(stderr, "ERROR: wss < 1 specified\n");
        return 2;
    }

    /* Use CPU0 only */
    CPU_ZERO(&mask);
    CPU_SET(0, &mask);
    er = sched_setaffinity(0, sizeof(mask), &mask);
    if (er == -1) {
        fprintf(stderr, "ERROR: sched_setaffinity failed");
        return 4;
    }

    /* Allocate memory */
    array = (volatile unsigned char*)malloc(wss);
    if (!array) {
        fprintf(stderr, "ERROR: malloc failed");
        return 4;
    }
    memset((unsigned char*)array, 0xff, wss);

    n = NBASE / wss;
    if (n < 1) n = 1;

    pos = 0;
    
    /* Dry run */
    for (i = 0; i < n; i++) {
        for (j = 0; j < wss; j++, pos = (pos + STEP) % wss) {
            sum += array[pos]; /* READ access to array[j] */
        }
    }
    
    /* Measure the time for accessing array */
    start = rdtsc();
    for (i = 0; i < n; i++) {
        for (j = 0; j < wss; j++, pos = (pos + STEP) % wss) {
            sum += array[pos]; /* READ access to array[j] */
        }
    }
    end = rdtsc();

    /* Print results */
    printf("Working set size: %u [B]\n", wss);

    elapsed = end - start;
    printf("Total: %lu [clocks] for %u iterations\n", elapsed, n * wss);

    t = (double)elapsed / (double)wss / (double)n;
    printf("Single iteration time: %lf [clocks]\n", t);

    return 0;
}