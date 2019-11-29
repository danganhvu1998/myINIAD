/* list_grpah.c */

#include <stdlib.h>
#include "list_graph.h"
#include "array_queue.h"

Graph* graph_construct() {
    Node* nodes = (Node*)malloc(sizeof(Node) * SIZE);
    for(int i = 0; i < SIZE; i++) {
        nodes[i].value = 0;
        nodes[i].edges = NULL;
    }
    return nodes;
}

void graph_free_edge(Edge* edge) {
    if(edge != NULL) {
        graph_free_edge(edge->next);
        free(edge);
    }
}

void graph_free(Graph* graph) {
    Node* nodes = graph;
    for(int i = 0; i < SIZE; i++) {
        graph_free_edge(nodes[i].edges);
    }
    free(nodes);
}

void graph_set_value(Graph* graph, int index, NodeType value) {
    Node* nodes = graph;
    nodes[index].value = value;
}

void graph_add_edge(Graph* graph, int from, int to) {
    Node* nodes = graph;
    Edge* edge = (Edge*)malloc(sizeof(Edge));
    edge->next = NULL;
    edge->node = &nodes[to];
    if(nodes[from].edges == NULL) {
        nodes[from].edges = edge;
    } else {
        Edge* tail = nodes[from].edges;
        while(tail->next != NULL) {
            tail = tail->next;
        }
        tail->next = edge;
    }
}

void graph_dfs_inner(Node* node, Visitfn f) {
    node->visited = 1;
    f(node->value);
    Edge* edge = node->edges;
    while(edge != NULL) {
        if(! edge->node->visited) {
            graph_dfs_inner(edge->node, f);
        }
        edge = edge->next;
    }
}

void graph_dfs(Graph* graph, int start, Visitfn f) {
    Node* nodes = graph;
    for(int i = 0; i < SIZE; i++) {
        nodes[i].visited = 0;
    }

    graph_dfs_inner(&nodes[start], f);
}

void graph_bfs(Graph* graph, int start, Visitfn f) {
    Node* nodes = graph;
    for(int i = 0; i < SIZE; i++) {
        nodes[i].visited = 0;
    }

    QUEUE queue = queue_construct();

    Node* node = &nodes[start];
    node->visited = 1;
    f(node->value);
    queue_enqueue(queue, node);
    while(! queue_empty(queue)) {
        node = (Node*)queue_dequeue(queue);

        Edge* edge = node->edges;
        while(edge != NULL) {
            if(! edge->node->visited) {
                queue_enqueue(queue, edge->node);
                edge->node->visited = 1;
                f(edge->node->value);
            }
            edge = edge->next;
        }
    }
    
    queue_free(queue);
}