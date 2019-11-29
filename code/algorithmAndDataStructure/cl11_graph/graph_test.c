/* graph_test.c */

#include <stdio.h>
#include "list_graph.h"
//#include "matrix_graph.h"

void print_node(NodeType value) {
    printf(" %d ", value);
}

int main(int argc, char* argv[]) {
    Graph* graph = graph_construct();
    
    graph_set_value(graph, 0, 1);
    graph_set_value(graph, 1, 2);
    graph_set_value(graph, 2, 3);
    graph_set_value(graph, 3, 4);
    graph_set_value(graph, 4, 5);
    graph_set_value(graph, 5, 6);
    
    graph_add_edge(graph, 0, 1);
    graph_add_edge(graph, 0, 2);
    graph_add_edge(graph, 0, 3);
    graph_add_edge(graph, 1, 0);
    graph_add_edge(graph, 2, 5);
    graph_add_edge(graph, 3, 4);
    graph_add_edge(graph, 4, 1);
    graph_add_edge(graph, 4, 3);
    graph_add_edge(graph, 5, 4);
    
    printf("Depth first search:");
    graph_dfs(graph, 0, print_node);
    printf("\n");

    printf("Breadth first search:");
    graph_bfs(graph, 0, print_node);
    printf("\n");

    graph_free(graph);
}