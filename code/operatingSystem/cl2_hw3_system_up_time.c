#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]){
  FILE *uptime_file;
  double up_time_in_second_float;
  int up_time_in_second_int;
  uptime_file = fopen("/proc/uptime", "r");
  if( fscanf(uptime_file, "%lf", &up_time_in_second_float)==1 ){
    up_time_in_second_int = up_time_in_second_float;
    printf("Up Time: %dh %dm %lfs", up_time_in_second_int/3600, up_time_in_second_int%3600/60, up_time_in_second_float-up_time_in_second_int/60*60);
  }

}