#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h> // for usleep
#include <mpi.h>

int const serverRank = 0;
int const maximumMessageLength = 100;
int myRank;
int source;

void doTask(int taskId, int processRank){
    int taskExecuteTime = rand() % 1000000;
    for(int i=0; i<processRank; i++) taskExecuteTime /= 4;
    printf("Process %d: Do task %d need %d ms\n",processRank, taskId, taskExecuteTime);
    usleep( taskExecuteTime);
}

void sendMessageMpi(int* message, int length, int destination){
    int mpiErrorCode;
    int tag = 0;
    mpiErrorCode = MPI_Send(message, length, MPI_INT, destination, tag, MPI_COMM_WORLD);
}

int main (int argc, char* argv[]){
    /* main */
    int numProcesses;
    int mpiErrorCode;
    int message[maximumMessageLength+1];
    MPI_Status status;
    mpiErrorCode = MPI_Init(&argc, &argv);
    mpiErrorCode = MPI_Comm_rank(MPI_COMM_WORLD, &myRank);
    mpiErrorCode = MPI_Comm_size(MPI_COMM_WORLD, &numProcesses);
    printf("%d of %d: Hello :>\n",myRank, numProcesses);
    if( myRank == serverRank ){
        // Server
        int taskRunTime[1005];
        int taskCount[100];
        int currTask = 0;
        for(int i=0; i<numProcesses; i++) taskCount[i] = 0;
        while(1){
            MPI_Recv(message, maximumMessageLength + 1, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_TAG, MPI_COMM_WORLD, &status);
            if( message[1] == -1 ){
                // client ask for task
                int const clientRank = message[0];
                int nextTask[] = {currTask};
                sendMessageMpi( nextTask, 1, clientRank);
                ++taskCount[clientRank];
                if( currTask == 1003 ) break;
                ++currTask;
            } else {
                taskRunTime[ message[1] ] = message[2];
            }
        }
        for(int i=0; i<numProcesses; i++){
            printf("process %d do %d tasks\n", i, taskCount[i]);
            /**
                process 0 do 0 tasks
                process 1 do 48 tasks
                process 2 do 185 tasks
                process 3 do 771 tasks 
            **/
        }
    } else {
        // Client
        int addTaskMessage[] = {myRank, -1, -1}; 
        while(1){
            sendMessageMpi(addTaskMessage, 3, serverRank);
            MPI_Recv(message, maximumMessageLength + 1, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_TAG, MPI_COMM_WORLD, &status);
            int const nextTask = message[0];
            if(nextTask>1000) break;
            doTask(nextTask, myRank);
        }
    }
    mpiErrorCode = MPI_Finalize();
}