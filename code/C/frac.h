#include <stdlib.h>

struct fraction
{
    int number;
    int denom;
};

struct fraction* mul(struct fraction* a, struct fraction* b);

struct fraction* div(struct fraction* a, struct fraction* b);

struct fraction* add(struct fraction* a, struct fraction* b);

struct faction* subs(struct fraction* a, struct fraction* b);