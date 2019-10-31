/* sort.h */
typedef void* T;
typedef int (*Comparefn) (T a, T b);
void sort(T *list, int length, Comparefn compare);