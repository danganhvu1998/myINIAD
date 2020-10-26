#include <stdio.h>
#include <string.h>
#include <mpi.h>

int main (int argc, char* argv[])
{
    /* main */
    const int maximum_message_length = 100;
    const int server_rank = 0;
    char message[maximum_message_length+1];
    MPI_Status status;
    int my_rank;
    int num_procs;
    int source;
    int destination;
    int tag = 0;
    int mpi_error_code;
    mpi_error_code = MPI_Init(&argc, &argv);
    mpi_error_code = MPI_Comm_rank(MPI_COMM_WORLD, &my_rank);
    mpi_error_code = MPI_Comm_size(MPI_COMM_WORLD, &num_procs);
    if(my_rank != server_rank) {
        sprintf(message, "Greetings from process #%d!", my_rank);
        destination = server_rank;
        mpi_error_code = MPI_Send(message, strlen(message) + 1, MPI_CHAR,
        destination, tag, MPI_COMM_WORLD);
    }
    else {
        for (source = 0; source < num_procs; source++) {
            if (source != server_rank) {
                mpi_error_code = MPI_Recv(message, maximum_message_length + 1,
                MPI_CHAR, MPI_ANY_SOURCE, tag, MPI_COMM_WORLD, &status);
                fprintf(stderr, "%s\n", message);
            }
        }
    }
    mpi_error_code = MPI_Finalize();
}