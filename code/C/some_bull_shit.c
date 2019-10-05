#include <stdio.h>

float per_hop_delay(float proc_delay, float queue_delay, float link_distance, float propagation_speed, float pkt_len, float transmission_rate) {
  return proc_delay + queue_delay + link_distance/propagation_speed*1000 + pkt_len*8/transmission_rate*1000;
}

int main(){
  float proc_delay, queue_delay, link_distance, propagation_speed, pkt_len, transmission_rate;
  proc_delay = 0.1;
  queue_delay = 20;
  link_distance = 200000;
  propagation_speed = 300000000;
  pkt_len = 1500*8;
  transmission_rate = 100*1000000;
  printf("%f", per_hop_delay(proc_delay, queue_delay, link_distance, propagation_speed, pkt_len, transmission_rate));
}