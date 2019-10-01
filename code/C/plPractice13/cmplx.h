#include <stdio.h>

#ifndef INCLUDE_CMPLX_H
#define INCLUDE_CMPLX_H

typedef struct cmplx{
  double real;
  double imag;
} cmplx;



cmplx add_cmplx( cmplx a, cmplx b ){
  cmplx c;
  c.real = a.real+b.real;
  c.imag = a.imag+b.imag;	
  #ifdef DEBUG
    printf("%lf %lf",c.real,c.imag);
  #endif
  return c;
}

cmplx mul_cmplx( cmplx a, cmplx b ){
  cmplx c;
  c.real = a.real*b.real - a.imag*b.imag;
  c.imag = a.real*b.imag + a.imag*b.real;
  #ifdef DEBUG
    printf("%lf %lf",c.real,c.imag);
  #endif
  return c;
}

#endif