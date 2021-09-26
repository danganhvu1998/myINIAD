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

/*
When running experiment on both computer with wss=100MB:
    + both computer need about 25 clocks time for a single iteration. 
    + Does not have any sign of thrashing. Memory acctully go up by about 100MB
    => No thrashing
When running experiment on both computer with wss=4GB:
    + 8GB RAM Computer
        + need about 50 clocks time for a single iteration. 2 times higher when wss=100MB
        + Memory acctully go up only about 2-3GB
        => Thrashing
    + 16GB RAM Computer
        + need about 37 clocks time for a single iteration. 1.5 times higher when wss=100MB
        + Memory acctully go up about 3.7GB (3.5->7.2)
        => No clear sign of Thrasing

Computer 1 - 8GB Ram
(base) kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ ./memspeed 4000000000
Working set size: 4000000000 [B]
Total: 216843395533 [clocks] for 4000000000 iterations
Single iteration time: 54.210849 [clocks]

(base) kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ ./memspeed 3705032704
Working set size: 3705032704 [B]
Total: 191857586775 [clocks] for 3705032704 iterations
Single iteration time: 51.782967 [clocks]

(base) kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ ./memspeed 100000000
Working set size: 100000000 [B]
Total: 2339483646 [clocks] for 100000000 iterations
Single iteration time: 23.394836 [clocks]

---
---
---

Computer 2 - 16GB Ram
kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ time ./memspeed 100000000
Working set size: 100000000 [B]
Total: 2395478466 [clocks] for 100000000 iterations
Single iteration time: 23.954785 [clocks]

real    0m1.454s
user    0m1.428s
sys     0m0.024s
kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ time ./memspeed 1000000000
Working set size: 1000000000 [B]
Total: 37706558110 [clocks] for 1000000000 iterations
Single iteration time: 37.706558 [clocks]

real    0m20.781s
user    0m20.565s
sys     0m0.200s
kyatod@kyatod:~/gitResource/myINIAD/code/operatingSystem/cl14$ time ./memspeed 4000000000
Working set size: 4000000000 [B]
Total: 136675624404 [clocks] for 4000000000 iterations
Single iteration time: 34.168906 [clocks]

real    1m24.407s
user    1m23.566s
sys     0m0.780s
*/