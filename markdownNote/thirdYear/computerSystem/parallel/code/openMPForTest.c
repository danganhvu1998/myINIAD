#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

int main()
{
	int number_of_threads, this_thread, iteration;

	number_of_threads = omp_get_max_threads();
	fprintf(stderr, "%2d threads\n", number_of_threads);

    # pragma omp parallel for
	for(iteration = 0; iteration < number_of_threads*5; iteration++){
		this_thread = omp_get_thread_num();
		fprintf(stderr, "Iteration %2d, thread %2d: Hello, world!\n", iteration, this_thread);	
	}
}