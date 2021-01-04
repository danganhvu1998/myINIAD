#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int valCount[260];

void printArr(int arr_len, int * arr) {
    int i;
    printf("Array dump [%2d]: ", arr_len);
    for (i = 0 ; i < arr_len; i++) {
        printf("[%2d] %2d  ", i, arr[i]);
    }
    printf("\n");
}

int nextVal(int val){
    while(1){
        ++ val;
        if( valCount[val] ) return val;
    };
}

int lastVal(int val){
    while(1){
        -- val;
        if( valCount[val] ) return val;
    };
}

int warningsCount(int measurement_count, int* measurement, int d) {
    int ret = 0;
    const int halfD = d / 2;
    const int mediumPos = halfD + 1;
    const int isHardCase = !(d%2);
    int valAtMediumPos = 0;
    int numberSmallerThanLastMediumCount = 0;
    for(int i=0; i<260; i++){
        valCount[ i ] = 0;
    }
    for(int i=0; i<d; i++){
        ++valCount[ measurement[i] ];
    }
    printf("HARD CASE %d\n", isHardCase);
    for(int i=d; i<measurement_count;i++){
        // Calculate real medium
        int tempCount = 0;
        for(int i=1; i<=255; i++){
            if( tempCount + valCount[i] >= halfD ){
                valAtMediumPos = i;
                break;
            }
            tempCount += valCount[i];
        }
        int doubleMedium = valAtMediumPos * 2;
        if( measurement[i] >= doubleMedium ) {
            ++ret;
        }
        // Update medium
        const int leaveVal = measurement[i-d], enterVal = measurement[i];
        --valCount[leaveVal];
        ++valCount[enterVal];
    }
    return ret;
}


int main(int argc, char *argv[])
{
    
    FILE *fptr = NULL;
    int measurement_count;
    int d;
    int* measurement;   
    int i;    
    int result;
    
    // if (argc <= 1) {
    //     printf("Usage: %s INPUT.TXT\n", argv[0]);
    //     printf("INPUT is the input sequence\n");
    //     exit(EXIT_FAILURE);
    // }
 
    // fptr = fopen(argv[1], "r");
    fptr = fopen("test.txt", "r");
    
    fscanf(fptr, "%d", &measurement_count);
    fscanf(fptr, "%d", &d);
    
    measurement = (int*) malloc(measurement_count * sizeof(int));

    for (i = 0; i < measurement_count; i++) {
        fscanf(fptr, "%d", measurement + i);
    }
    
    result = warningsCount(measurement_count, measurement, d);

    printf("%d\n", result);

    fclose(fptr);

    return 0;
}