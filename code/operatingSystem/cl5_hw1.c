#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>

int main(int argc, char* argv[]){
  unsigned char buf[8192];
  int fr, fw, rlen, wlen;

  fr = open(argv[1], O_RDONLY);
  fw = open(argv[2], O_WRONLY);

  for(;;){
    rlen = read(fr, buf, sizeof(buf));
    if(rlen<0){
      return 1;
    } else if(rlen==0) {
      return 0;
    } else {
      for(int j=0; j<rlen;){
        wlen = write(fw, buf+j, rlen-j);
        if(wlen<0) return 1;
        j += wlen;
      }
    }
  }
  close(fr);
  close(fw);
  return 0;
}