#include <stdio.h>
#include <stdlib.h>
#include <mpi.h>

int main (int argc, char** argv) {
    /* main */
    const int server = 0;
    const int source = server;
    float* array = (float*)NULL;
    int length;
    int index;
    int num_procs, my_rank, mpi_error_code;

    mpi_error_code = MPI_Init(&argc, &argv);
    mpi_error_code = MPI_Comm_rank(MPI_COMM_WORLD, &my_rank);
    mpi_error_code = MPI_Comm_size(MPI_COMM_WORLD, &num_procs);

    if (my_rank == server) {
        scanf("%d", &length);
        array = (float*)malloc(sizeof(float) * length);
        for (index = 0; index < length; index++) {
            array[index] = 0.0;
        }
    }

    if (num_procs > 1) {
        mpi_error_code = MPI_Bcast(&length, 1, MPI_INTEGER, source, MPI_COMM_WORLD);
        if (my_rank != server) {
            array = (float*)malloc(sizeof(float) * length);
        }
        mpi_error_code = MPI_Bcast(array, length, MPI_INTEGER, source, MPI_COMM_WORLD);
        printf("My rank = :%d: broadcast length = %d\n", my_rank, length);
    }
    mpi_error_code = MPI_Finalize();
}
