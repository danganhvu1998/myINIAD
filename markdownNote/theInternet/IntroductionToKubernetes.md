# What are containers

+ `Containers`: are application-centric methods to deliver high-performing, scalable applications on any infrastructure of your choice. Containers are best suited to deliver microservices by providing portable, isolated virtual environments for applications to run without interference from other running applications.
+ `Microservices` are lightweight applications written in various modern programming languages, with specific dependencies, libraries and environmental requirements. To ensure that an application has everything it needs to run successfully it is packaged together with its dependencies.
+ Containers encapsulate microservices and their dependencies but ***do not run them directly***. **Containers run container images.**
+ A `container image` bundles the application along with its runtime and dependencies, and a container is deployed from the container image offering an isolated executable environment for the application. Containers can be deployed from a specific image on many platforms, such as workstations, Virtual Machines, public cloud, etc

# What Is Container Orchestration?

+ In Development (Dev) environments, running containers on a single host for development and testing of applications may be an option. However, when migrating to Quality Assurance (QA) and Production (Prod) environments, that is no longer a viable option because the applications and services need to meet specific requirements:
  + Fault-tolerance
  + On-demand scalability
  + Optimal resource usage
  + Auto-discovery to automatically discover and communicate with each other
  + Accessibility from the outside world
  + Seamless updates/rollbacks without any downtime.
+ `Container orchestrators` are tools which group systems together to form clusters where containers' deployment and management is automated at scale while meeting the requirements mentioned above.

# Kubernetes Features

+ Automatic bin packing
  + Kubernetes automatically schedules containers based on resource needs and constraints, to maximize utilization without sacrificing availability.
+ Self-healing
  + Kubernetes automatically replaces and reschedules containers from failed nodes. It kills and restarts containers unresponsive to health checks, based on existing rules/policy. It also prevents traffic from being routed to unresponsive containers.
+ Horizontal scaling
  + With Kubernetes applications are scaled manually or automatically based on CPU or custom metrics utilization.
+ Service discovery and Load balancing
  + Containers receive their own IP addresses from Kubernetes, while it assigns a single Domain Name System (DNS) name to a set of containers to aid in load-balancing requests across the containers of the set.
+ Automated rollouts and rollbacks
  + Kubernetes seamlessly rolls out and rolls back application updates and configuration changes, constantly monitoring the application's health to prevent any downtime.
+ Secret and configuration management
  + Kubernetes manages secrets and configuration details for an application separately from the container image, in order to avoid a re-build of the respective image. Secrets consist of confidential information passed to the application without revealing the sensitive content to the stack configuration, like on GitHub.
+ Storage orchestration
  + Kubernetes automatically mounts software-defined storage (SDS) solutions to containers from local storage, external cloud providers, or network storage systems.
+ Batch execution
  + Kubernetes supports batch execution, long-running jobs, and replaces failed containers.
