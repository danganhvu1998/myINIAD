#include <stdio.h>
#include <stdlib.h>

struct fraction
{
    int number;
    int denom;
};

int UCLN(int a, int b){
    if(a<0) a=-a;
    if(b<0) b=-b;
    int c;
    while(a!=0 && b!=0){
        if(a>b){
            c = a;
            a = b;
            b = c;
        }
        b = b%a;
    }
    c = a+b;
    return c;
}

struct fraction* mul(struct fraction* a, struct fraction* b){
    struct fraction *c;
    int number, denom, ucln;
    c = (struct fraction*)malloc(sizeof(struct fraction));
    number = a->number*b->number;
    denom = a->denom*b->denom;
    //ucln = UCLN(number, denom);
    ucln = 1;
    number /= ucln;
    denom /= ucln;
    c->number = number;
    c->denom = denom;
    return c;
}

struct fraction* DIV(struct fraction* a, struct fraction* b){
    struct fraction *c;
    int number, denom, ucln;
    c = (struct fraction*)malloc(sizeof(struct fraction));
    number = a->number*b->denom;
    denom = a->denom*b->number;
    //ucln = UCLN(number, denom);
    ucln = 1;
    number /= ucln;
    denom /= ucln;
    c->number = number;
    c->denom = denom;
    return c;
}

struct fraction* add(struct fraction* a, struct fraction* b){
    struct fraction *c;
    int number, denom, ucln;
    c = (struct fraction*)malloc(sizeof(struct fraction));
    number = a->number*b->denom+b->number*a->denom;
    denom = a->denom*b->denom;
    ucln = UCLN(number, denom);
    //ucln = 1;
    number /= ucln;
    denom /= ucln;
    c->number = number;
    c->denom = denom;
    return c;
}

struct fraction* subs(struct fraction* a, struct fraction* b){
    struct fraction *c;
    int number, denom, ucln;
    c = (struct fraction*)malloc(sizeof(struct fraction));
    number = a->number*b->denom-b->number*a->denom;
    denom = a->denom*b->denom;
    ucln = UCLN(number, denom);
    //ucln = 1;
    number /= ucln;
    denom /= ucln;
    c->number = number;
    c->denom = denom;
    return c;
}

void print(struct fraction* a){
    printf("%d \\ %d\n", a->number, a->denom);
}

int main(){
    struct fraction a={10, 9}, b={5, 6}, *c;
    c = subs(&a, &b);
    print(c);
}