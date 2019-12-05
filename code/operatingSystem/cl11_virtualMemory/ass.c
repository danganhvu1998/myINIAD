#include <sys/mman.h>
#include <sys/fcntl.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdio.h>

int main(int argc, char* argv[])
{
    int er, i, count, fd = -1;
    int endlineList[1005];
    struct stat fileinfo;
    char* map = NULL;
    char* endStart = NULL;
    int numLastLineNeeded = 0;

    if (argc != 4) {
        fprintf(stderr, "Usage: linecount <file>\n");
        return 1;
    }
    numLastLineNeeded = atoi(argv[2]);
    fd = open(argv[3], O_RDONLY);
    if (fd < 0) goto error;

    er = fstat(fd, &fileinfo);
    if (er < 0) goto error;

    /* Map the whole file onto memory address
       (fileinfo->st_size contains the file size) */
    map = (char*)mmap(NULL, fileinfo.st_size, PROT_READ, MAP_PRIVATE, fd, 0);
    if (map == NULL) goto error;
    endStart = map;

    for (i = fileinfo.st_size - 2; i>=0; i--) {
        if (map[i] == '\n') {
          count++;

        }
        if(count >= numLastLineNeeded) {
          endStart = map + i + 1;
          break;
        }
    }

    //printf("line count: %d - %d\n", count + 1, numLastLineNeeded);
    printf("%s", endStart);

    munmap(map, fileinfo.st_size);
    close(fd);
    
    return 0;

 error:
    if (map) munmap(map, fileinfo.st_size);
    if (fd >= 0) close(fd);
    fprintf(stderr, "ERROR\n");
    return 1;
}