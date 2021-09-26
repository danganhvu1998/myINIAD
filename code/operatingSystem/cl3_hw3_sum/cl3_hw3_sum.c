#include <stdio.h>

int sum(int n, int m){
  int result = 0;
  for(; n<=m; n++){
    result += n;
  }
  return result;
}