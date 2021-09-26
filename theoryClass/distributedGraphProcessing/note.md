## Characteristic 
+ The size of the graph is very large – larger than the capacityof a single machine’s main memory.
+ Many small-sized random memory accesses over the wholegraph  instance  are  performed,  especially  during  neighbor-hood iterations and graph traversals
+ The  computation-to-communication  ratio  is  low  –  i.e.,  theamount of computation is small compared to the amount ofdata movement.
+ There is a large degree of inherent parallelism.

## Note

### Task Management

+ Whenever a task reads or writes graph data, it checks withthe Data Manager which knows the location of the data. If the dataresides in the current machine, the access is immediately resolved;otherwise,  the  Data  Manager  buffers  up  the  request  into  a  largerequest message.  In case of such a remote read access, the task isblocked – the worker thread moves to the next task in this case.
+ The blocked tasks are resumed when the response messagefor the corresponding request message comes back. This continua-tion mechanism will be discussed in the next subsection as well asin Section 4

### Data management

+ Whenever a task reads or writes graph data, it checks withthe Data Manager which knows the location of the data. If the dataresides in the current machine, the access is immediately resolved;otherwise,  the  Data  Manager  buffers  up  the  request  into  a  largerequest message.  In case of such a remote read access, the task isblocked – the worker thread moves to the next task in this case
+ The blocked tasks are resumed when the response messagefor the corresponding request message comes back
+ Edge PartitioningEdge Partitioning [21] is a graph partitioning strategy that assignsa similar number of edges to every machine instead of a similarnumber of nodes.
  + Note that the goal of this partitioning isnottoreduce the communication (i.e.   avoiding crossing edges),  but tobalance workloads between machine
+ Selective Ghost Node
  + Selective ghost node creation is a technique to choose a set ofhigh-degree vertices and to duplicateghost copiesof them on eachmachine  [26].   Consequently,  each  ghost  node  only  keeps  localedges  that  do  not  cross  machine  boundaries.   In  PGX.D,  ghostnodes are created at loading time – PGX.D computes the in-degreeand out-degree of each node and creates a ghost if either degree islarger than the specified threshold value.
+ Edge Chunking and Ghost Privatization