#include <stdio.h>

void print_decimal(unsigned long a){
  printf("%ld\n", a);
}

void print_hexadecimal(unsigned long a){
  unsigned long current_divider = 268435456; //16^7
  printf("0x");
  while(current_divider>0){
    printf("%ld", a/current_divider);
    a = a%current_divider;
    current_divider/=16;
  }
  printf("\n");
}

void print_binary(unsigned long a){
  unsigned long current_divider = 128; //2^7
  printf("0x");
  while(current_divider>0){
    printf("%ld", a/current_divider);
    a = a%current_divider;
    current_divider/=2;
  }
  printf("\n");
}

int main(){
  print_decimal(129);
  // Shows `129` to stdout
  print_hexadecimal(129);
  // Shows `0x00000081` to stdout
  print_binary(129);
  // Shows `0b10000001` to stdout
}