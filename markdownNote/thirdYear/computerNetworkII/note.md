# Computer Network 2

## Important Keyword

+ CN: Core network
+ RAN: Radio Access Network
+ UE: User Equipment
+ BTS: Base Transceiver Station
+ ARP: Address Resolution Protocol
+ Link layer address: MAC address
+ SDN: Software Defined Networking
+ NFV: Network Functions Virtualization
+ ONF: Open Networking Foundation
+ SDN: Software defined network
+ NFV: Network Functions Virtualization 
+ AS: Autonomous System: An autonomous system (AS) is a collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators on behalf of a single administrative entity or domain that presents a common, clearly defined routing policy to the internet
+ EGP: Routing protocol between AS
+ IGP: Routing protocol inside AS
+ TLS: Transport Layer Security
+ QoS: Quality of Service

## Basic structures and mechanisms of networks

1. Structures of information communication network
   1. Fixed telephone network
      1. ![Error][00comnet1]
   2. Mobile communication network
      1. Core Network that handles overall connection processing and user data routing. and Radio Access Network exchanges radio waves directly with user terminal
      2. Base Station: UE will transmits and receive radio signals via the antenna to the base station nearby
      3. Cell: The range that a BTS can transmit and receive radio signal
      4. Paging Area: ![Error][00comnet5]
      5. ![Error][00comnet3]
      6. ![Error][00comnet4]
   3. Internet
      1. End-to-end transfer sectional view ![Error][00comnet2]
         1. Note: Switch is layer 2 relay device, router is layer 3 relay device
      2. End-to-end transfer plan view ![Error][00comnet6]
      3. How to transfer
         1. ![Error][00comnet7]
         2. Direct transfer: When 2 devices are in the same network -> reach destination by layer 2 devices(switch)
            1. ![Error][00comnet8]
         3. Indirect transfer: When 2 devices are in different network -> transfer via router
            1. ![Error][00comnet9]
            2. **Note**: Source does not need to know destination's MAC address. It just need to know MAC address of its network router, them forward packet to router. Then that router keep forwarding in the same way using its own ARP table to another router, then another router, and finally destination.
      4. ARP - Address Resolution Protocol
         1. Protocol to discover link layer address(like MAC address) by internet layer address (like IPv4 or IPv6)
         2. From IP address -> MAC address
            1. broadcasting ARP request
               1. ![Error][00comnet12]
            2. Retrive MAC address and keep it in ARP table with corresponding IP address (consists a list of IP address and its corresponding MAC address)
         3. ARP will be used to contact associated device in future.
         4. ![Error][00comnet10]
      5. Routing
         1. Hop-by-hop routing by using routing table
            1. Host and router keep their routing table
               1. Destination network and Next hop info
            2. Each time, search the routing table for the destination network that matches then forward
            3. ![Error][00comnet11]

## SDN: Software defined network

+ Without SDN: Software defined network
  + Lack of network overall optimization. But easy to implement
  + packet will be sent according to `routing table` inside each router only. Each router could use it own way to get information about the network then using some algorithms
    + RIP: Using bellman-ford algorithm. It do not need to send its information to all router in the network but only adjacent one. 
      + Belong to IGP ( Routing protocol inside AS ) 
      + Represent the distance to the destination by 1->16
        + metric: number of hops
        + 16 means infinity. Unreachable
      + If in 180 seconds with no message, it assumed tha the link to that router has gone
      + Advantage: Easy to implement
      + Disadvantage: Route information traffic every 30s. Route convergence is slow. Metric up to 16 only
      + [Demonstration Slide 28->29](https://moocs.iniad.org/courses/2020/CS114/02-1/02)
    + OSPF: Using dijkstra. All routers need to send its information to all others routers and calculate routing table on its own. 
      + Belong to IGP ( Routing protocol inside AS )
      + [Demonstration Slide 33->37](https://moocs.iniad.org/courses/2020/CS114/02-1/02)
    + BGP: Each time router received information, it add its own AS number then forward it. So all routes can know which is the way will be used, not just which router it should forward to.
      + Belong to EGP ( Routing protocol between AS )
      + [Demonstration Slide 39](https://moocs.iniad.org/courses/2020/CS114/02-1/02)
  
## OpenFlow: 

+ Wiki Definition: OpenFlow is a communications protocol that gives access to the [forwarding plane](https://en.wikipedia.org/wiki/Forwarding_plane) of a network switch or router over the network.
+ OpenFlow add the `OpenFlow Controller` into the network, allow program to control network switches or routers over the network, increase overall performance.
+ OpenFlow's merits
  + Easy to automatize, and cooperate between systems
  + Easy to conduct centralized control over the network traffic, make overall optimization be possible
  + Can implement new function to OpenFlow easily (Since it is software)
+ Some points to pay attention when developing OpenFlow
  + Pay attention to scalability when the number os switches increase
  + Too many information then flow table might collapse
  + In a closed environment (WAN, data center), traffic is normally known in advance. Depend on that, we can design OpenFlow algorithms to have maximum benefit(minimum number of packets go up to `OpenFlow Controller`)

### **Important: What can be done with OpenFlow**

+ All ability of OpenFlow can be done with the following functions:
  + Forward packets
  + Check flow rate
  + Rewrite packet
  + Branch
  + For example of using OpenFlow function:
    + Using `forward` with `check flow rate`:
      + With `forward`, OpenFlow devices are able to function like a normal switch. The switch looks at the destination MAC address the forward packets to the corresponding port.
      + With `check flow rate`, OpenFlow switches are able to collect information about the traffic (how many packets, how many bytes, average flow rate, etc)
    + Using `rewrite` with `forward packets`: OpenFlow device are able to function like a normal router.
    + Using `rewrite`, `forward packets` and `Check flow rate`, OpenFlow devices can functions like a [load balancer: distributing a set of tasks over a set of resources (computing units), with the aim of making their overall processing more efficient](https://en.wikipedia.org/wiki/Load_balancing_(computing))
      + Multiple routes from source to destination are established, increase overall speed, especially large data such as CallOfDuty_Installer. ![Error][00comnet13]
    + `Forward packets` with `Branch`, Broadcasting become possible.

### **Important: Mechanism of OpenFlow**

+ Mainly defines as 2 of the following protocol
  + Communication protocol between `controller` and `switch (switch, router, load balancer)`
  + Switch behavior ( configured on `flow table` )
  
#### Exchange between switch(Open Flow devices) and controller

+ Switch and controller will using a secure channel connection
  + TCP connection
  + Or TLS (Transport Layer Security)
+ Exchange Packet Types:
  + `Packet In`: When switch detects communication not yet registered in `flow table`, `switch` send `packet in` to `controller` to inform about the packet ![Error][00comnet14]
  + `Flow Mod`: Controller send instruction to `switch` about how to update `flow table` 
    + There are 2 kinds of `life time` can be include into `flow mod`
      + `Idle timeout`: After a certain amount of time unreferencing, `flow entry` from `flow table` will be deleted
      + `Hard timeout`: After a certain amount of time, `flow entry` from `flow table` will be deleted, whether ir bit referenced
      + If `timeout` is set to be 0, it will never be removed, unless explicitly .
  + `Packet Out`: After `flow mod`, controller send `packet out` to `switch`, the packet caused `Packet in` now is able to be sent to correct destination. ![Error][00comnet15]
    + Detail: The controller has the ability to inject packets into the data plane of a particular switch. it does this with the PacketOut message, which can either carry a raw packet to inject into the switch, or indicate a local buffer on the switch containing a raw packet to release. Packets injected into the data plane of a switch using this method are not treated the same as packets that arrive on standard ports. The packet jumps to the action set application stage in the standard packet processing pipeline. If the action set indicates table processing is necessary then the input port id is used as the arrival port of the raw packet.
  + `Flow Removed`: When `switch` removes a `flow entry`, it inform `controller` by sending `flow removed` message
  + More exchange packet: [Slide 25 + 26](https://moocs.iniad.org/courses/2020/CS114/02-2/02#)

#### `Flow Entry` 

+ Matching rule: Condition that determine which `action` occurs when `OpenFlow` `switch` receives a packet
  + `Exact match`
  + `Wildcard Match`
  + Example: 192.168.1.0/24 matches IP address within range of 192.168.1.0/24
  + ![Error][00comnet16]
  + ***Small Note That I Have No Idea Why The Fuck It's Here***: `VLAN`
    + Wiki: A virtual LAN (VLAN) is any broadcast domain that is partitioned and isolated in a computer network at the data link layer
    + ![Error][00comnet17]
+ `Action`
  + `Forward`: Contain some of following fields:![Error][00comnet19]
  + `Modify-Field`: ![Error][00comnet20]
    + ![Error][00comnet21]
      + **Note**: Source does not need to know destination's MAC address. It just need to know MAC address of its network router, them forward packet to router. Then that router keep forwarding in the same way to another router, then another router, and finally destination. (Class 1)
    + ![Error][00comnet22]
  + `Drop`
  + `Enqueue`: Input into the queue of the switch specified for each port. For `QoS control(Quality of Service Control)`:
    + `QoS`: To perform control/priority control according to type of packet.  ![Error][00comnet18]
      + Ex: priority Queue: Voice packets are sensitive to delay and lost, so it could be set with higher priority
      + Ex: FIFO



[00comnet1]: ./../image/00comnet1.png
[00comnet2]: ./../image/00comnet2.png
[00comnet3]: ./../image/00comnet3.png
[00comnet4]: ./../image/00comnet4.png
[00comnet5]: ./../image/00comnet5.png
[00comnet6]: ./../image/00comnet6.png
[00comnet7]: ./../image/00comnet7.png
[00comnet8]: ./../image/00comnet8.png
[00comnet9]: ./../image/00comnet9.png
[00comnet10]: ./../image/00comnet10.png
[00comnet11]: ./../image/00comnet11.png
[00comnet12]: ./../image/00comnet12.png
[00comnet13]: ./../image/00comnet13.png
[00comnet14]: ./../image/00comnet14.png
[00comnet15]: ./../image/00comnet15.png
[00comnet16]: ./../image/00comnet16.png
[00comnet17]: ./../image/00comnet17.png
[00comnet18]: ./../image/00comnet18.png
[00comnet19]: ./../image/00comnet19.png
[00comnet20]: ./../image/00comnet20.png
[00comnet21]: ./../image/00comnet21.png
[00comnet22]: ./../image/00comnet22.png
[00comnet23]: ./../image/00comnet23.png
[00comnet24]: ./../image/00comnet24.png
[00comnet25]: ./../image/00comnet25.png
[00comnet26]: ./../image/00comnet26.png
[00comnet27]: ./../image/00comnet27.png
[00comnet28]: ./../image/00comnet28.png
[00comnet29]: ./../image/00comnet29.png
[00comnet30]: ./../image/00comnet30.png
[00comnet31]: ./../image/00comnet31.png
[00comnet32]: ./../image/00comnet32.png
[00comnet33]: ./../image/00comnet33.png
[00comnet34]: ./../image/00comnet34.png
[00comnet35]: ./../image/00comnet35.png
[00comnet36]: ./../image/00comnet36.png
[00comnet37]: ./../image/00comnet37.png
[00comnet38]: ./../image/00comnet38.png
[00comnet39]: ./../image/00comnet39.png
[00comnet40]: ./../image/00comnet40.png
[00comnet41]: ./../image/00comnet41.png
[00comnet42]: ./../image/00comnet42.png
[00comnet43]: ./../image/00comnet43.png
[00comnet44]: ./../image/00comnet44.png
[00comnet45]: ./../image/00comnet45.png
[00comnet46]: ./../image/00comnet46.png
[00comnet47]: ./../image/00comnet47.png
[00comnet48]: ./../image/00comnet48.png
[00comnet49]: ./../image/00comnet49.png
[00comnet50]: ./../image/00comnet50.png
[00comnet51]: ./../image/00comnet51.png
[00comnet52]: ./../image/00comnet52.png
[00comnet53]: ./../image/00comnet53.png
[00comnet54]: ./../image/00comnet54.png
[00comnet55]: ./../image/00comnet55.png
[00comnet56]: ./../image/00comnet56.png
[00comnet57]: ./../image/00comnet57.png
[00comnet58]: ./../image/00comnet58.png
[00comnet59]: ./../image/00comnet59.png
[00comnet60]: ./../image/00comnet60.png
[00comnet61]: ./../image/00comnet61.png
[00comnet62]: ./../image/00comnet62.png
[00comnet63]: ./../image/00comnet63.png
[00comnet64]: ./../image/00comnet64.png
[00comnet65]: ./../image/00comnet65.png
[00comnet66]: ./../image/00comnet66.png
[00comnet67]: ./../image/00comnet67.png
[00comnet68]: ./../image/00comnet68.png
[00comnet69]: ./../image/00comnet69.png
[00comnet70]: ./../image/00comnet70.png
