#include <stdio.h>

long pr(long n) {
  long div = 1;
  for(long i=2; i < n; i++) {
    if (0 == n % i) {
      div = i;
      break;
    }
  }
  return div;
}

int main() {
  long n1 = 126206137;
  long n2 = 126206131;
  long div1 = pr(n1);
  printf("%s %ld\n", 1 == div1 ? "yes" : "no", div1);
  long div2 = pr(n2);
  printf("%s %ld\n", 1 == div2 ? "yes" : "no", div2);
}
