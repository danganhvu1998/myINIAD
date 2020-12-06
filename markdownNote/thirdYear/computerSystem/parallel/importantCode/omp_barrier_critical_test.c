#include <stdio.h>
#include <stdlib.h>
#include <omp.h>
#include <time.h>

const int RUN_TIME = 1e7;
/* Bank account */
typedef struct {
    char* name;    /* name */
    int   balance; /* amount of money deposited */
} Account;

/* Transfers the specified amount of money from sender to receiver */
static void transfer(Account* sender, Account* receiver, int amount) {
    if (sender->balance < amount) return;
    sender->balance -= amount;
    receiver->balance += amount;
}

static void transferCritical(Account* sender, Account* receiver, int amount) {
    if (sender->balance < amount) return;
    #pragma omp critical
    sender->balance -= amount;
    #pragma omp critical
    receiver->balance += amount;
}

static void transferCriticalAcceptMinus(Account* sender, Account* receiver, int amount) {
    #pragma omp critical
    sender->balance -= amount;
    #pragma omp critical
    receiver->balance += amount;
}

int test0() {
    // Barrier LOL
	Account alice = {
        .name = "Alice",
        .balance = 1000,
    };
    Account bob = {
        .name = "Bob",
        .balance = 2000,
    };

	for(int i=0; i<RUN_TIME; i++){
        transfer(&alice, &bob, 300); /* Alice sends 300 yen to Bob */
        transfer(&bob, &alice, 300); /* Bob sends 300 yen to Alice */
	}
    printf("Alice: %d yen, Bob: %d yen\n", alice.balance, bob.balance);
    return 0;
}

int test1() {
    // No critical
	Account alice = {
        .name = "Alice",
        .balance = 1000,
    };
    Account bob = {
        .name = "Bob",
        .balance = 2000,
    };

    # pragma omp parallel for
	for(int i=0; i<RUN_TIME; i++){
        transfer(&alice, &bob, 300); /* Alice sends 300 yen to Bob */
        transfer(&bob, &alice, 300); /* Bob sends 300 yen to Alice */
	}
    printf("Alice: %d yen, Bob: %d yen\n", alice.balance, bob.balance);
    return 0;
}

int test2() {
    // Critical
	Account alice = {
        .name = "Alice",
        .balance = 1000,
    };
    Account bob = {
        .name = "Bob",
        .balance = 2000,
    };

    # pragma omp parallel for
	for(int i=0; i<RUN_TIME; i++){
        transferCritical(&alice, &bob, 300); /* Alice sends 300 yen to Bob */
        transferCritical(&bob, &alice, 300); /* Bob sends 300 yen to Alice */
	}
    printf("Alice: %d yen, Bob: %d yen\n", alice.balance, bob.balance);
    return 0;
}

int test3() {
    // Critical
	Account alice = {
        .name = "Alice",
        .balance = 1000,
    };
    Account bob = {
        .name = "Bob",
        .balance = 2000,
    };

    # pragma omp parallel for
	for(int i=0; i<RUN_TIME; i++){
        transferCriticalAcceptMinus(&alice, &bob, 300); /* Alice sends 300 yen to Bob */
        transferCriticalAcceptMinus(&bob, &alice, 300); /* Bob sends 300 yen to Alice */
	}
    printf("Alice: %d yen, Bob: %d yen\n", alice.balance, bob.balance);
    return 0;
}

int main(){
    double start, end;
    clock_t startClock, endClock;
    start = omp_get_wtime(); 
    startClock = clock();
    test0();
    end = omp_get_wtime();
    endClock = clock();
    printf("Work took %f seconds, in %ld clock\n\n\n", end - start, endClock - startClock);
    start = omp_get_wtime(); 
    startClock = clock();
    test1();
    end = omp_get_wtime();
    endClock = clock();
    printf("Work took %f seconds, in %ld clock\n\n\n", end - start, endClock - startClock);
    start = omp_get_wtime(); 
    startClock = clock();
    test2();
    end = omp_get_wtime();
    endClock = clock();
    printf("Work took %f seconds, in %ld clock\n\n\n", end - start, endClock - startClock);
    start = omp_get_wtime(); 
    startClock = clock();
    test3();
    end = omp_get_wtime();
    endClock = clock();
    printf("Work took %f seconds, in %ld clock\n\n\n", end - start, endClock - startClock);
}