/* matrix_graph.c */

#include <stdlib.h>
#include "matrix_graph.h"
#include "array_queue.h"

Graph* graph_construct() {
    Graph* graph = (Graph*)malloc(sizeof(Graph));
    for(int i = 0; i < SIZE; i++) {
        graph->values[i] = 0;
        for(int j = 0; j < SIZE; j++) {
            graph->matrix[i][j] = 0;
        }
    }
    return graph;
}

void graph_free(Graph* graph) {
    free(graph);
}

void graph_set_value(Graph* graph, int index, NodeType value) {
    graph->values[index] = value;
}

void graph_add_edge(Graph* graph, int from, int to) {
    graph->matrix[from][to] = 1;
}

void graph_dfs_inner(Graph* graph, int index, Visitfn f) {
    
}

void graph_dfs(Graph* graph, int start, Visitfn f) {
    for(int i = 0; i < SIZE; i++) {
        graph->visited[i] = 0;
    }

    graph_dfs_inner(graph, start, f);
}

void graph_bfs(Graph* graph, int start, Visitfn f) {
    for(int i = 0; i < SIZE; i++) {
        graph->visited[i] = 0;
    }

    QUEUE queue = queue_construct();

    
    
    queue_free(queue);
}