Todo list
====

## Work to do

### Implementation

- [ ] Setup a working version of page rank algorithm between multiple `workers` run in same computer, using `edge partition` as it is proved to be than `node partition`
  - [ ] edge partition 
  - [x] page rank algo
  - [ ] Communication between `node workers` (using c socket?) [Currently working on]
  - [ ] Implement some ultilize method mentioned from paper (optional later)
    - [ ] Ghost node
    - [ ] Merge multiple request into a bigger one to save internet bandwidth
- [ ] Allow exchange node between `workers`
- [ ] Allow new node join the work

### Ec2 Setup for testing
- [ ] Dockerization and script to able to setup to EC2 in one command
- [ ] Read doc to findout how to use `EC2 on demand` service: [link](https://aws.amazon.com/ec2/pricing/on-demand/)

## Facing problems