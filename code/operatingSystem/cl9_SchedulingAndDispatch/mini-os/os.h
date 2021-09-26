#ifndef DEFINE_H_OS
#define DEFINE_H_OS

int add_task(void (*fn)(), char* stack);
int sleep_task(int milliseconds);
void schedule_and_dispatch();

#endif
