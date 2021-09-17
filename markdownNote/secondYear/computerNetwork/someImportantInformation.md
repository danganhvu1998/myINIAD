Networking 6-12
==================================

## Abbreviation

+ MTU: Maximum Transmission Unit
+ MSS: Maximum Segment Size
  + In most case: MSS = MTU - 40
  + ![Example][01comnet1]
+ CWND: Congestion Windows
  + 

## Important Point

+ TCP Header
  + ![Example][01comnet2]

-------

+ Sequence Number (Seq.#) and Acknowledgement Number (ACK#)
  + Sequence Number (Seq.#): Byte stream "number" of first byte in segment's data
  + ACK# = Seq.# + TCP Segment Size
  + ![Example][01comnet3]

-------

+ Each TCP connection is identified by 4-tuple
  + Source IP Address
  + Source Port #
  + Destination IP Address
  + Destination Port #
  + ![Example][01comnet4]

-------

+ Socket
  + An abstraction of the mechanism by which an application transmits and receives data
  + Individual sockets are identified by socket descriptor
  + ![Example][01comnet5]
  + ![Example][01comnet6]
  + ![Example][01comnet7]

-------

+ Multiplexing and De-multiplexing
  + Multiplexing
    + On the sending side, even if there are many processes transmitting packets, TCP receives all these messages from different sockets distinguished by port number, adds the TCP header and then pass the segments to the network layer
    + Many to one
    + ![Example][01comnet8]
  + De-multiplexing
    + On the receiving side, after the TCP of the transport layer receives the datagram from the network layer and confirms the port number, the datagram is delivered to each socket and eventually to the connection process
    + One to many
    + ![Example][01comnet9]

-------

+ TCP connection
  + ![Example][01comnet10]
  + ![Example][01comnet11]
  + Detail in Tuan Note

-------

+ Flow Control
  + Sender tries to not overwhelm receiver
    + Use Windows Size field in TCP header

-------

+ Sliding Windows
  + Method for the sender sends multple segments based on the current available buffer size of reveiver.
  + ![Example][01comnet12]
  + ![Example][01comnet13]
  
-------

+ Delayed ACK
  + TCP can reduce ACK transmission frequency with Delayed ACK
  + The receiver uses a timer to measure the arrival interval of segments
  + Delayed ACK transmission can be delayed up to 0.5 sec (0.2 in general)
  + ![Example][01comnet14]

-------

+ ACK Retransmission
  + Tuan Note
  + ***TCP fast retransmission***
    + When there are three duplicate ACKs, it can be retransmitted without waiting for the retransmission timeout value by means of fast retransmission
    + ![Example][01comnet15]

-------

+ TCP Checksum
  + Repeat step 1 and 2 for each 16-bit segments, then finish the process with step 3
    1. Segments are sequentially added at the end of 16 bits
    2. When adding numbers, a carryout from the most significant bit needs to be added to the least significant bit
    3. Flip each bit (all 0’s are set to 1 and 1’s are clear to 0)
  + ![Example][01comnet16]
  + -> Not a perfect error detection
  + -> Data link layer already has more complicated error checking methods

-------

+ Congestion Control
  + Try to not overwhelming the network as a whole ( Defferent from flow control )
  + Tuan Note

-------

+ UDP - Tuan Note

-------

+ IP Header Field
  + ![Example][01comnet18]
-------

+ Routing Table
  + ![Example][01comnet17]

-------

+ Dijkstra's Algorithm
  + ![Example][01comnet19]
+ Distance Vector
  + ![Example][01comnet20]

-------

## Wireshark

+ Filter IP:
  + ip.addr
  + ip.dst
  + ip.src
+ Filter port
  + tcp.port eq 62337
+ AND condition
  + http&&ip.src==192.168.1.4
+ OR condition
  + http||arp
+ Open Flow Graph
  + ![Example][01comnet21]
  + Statistic => Flow Graph
    + Select TCP Flow

[01comnet1]: ./../image/01comnet1.png
[01comnet2]: ./../image/01comnet2.png
[01comnet3]: ./../image/01comnet3.png
[01comnet4]: ./../image/01comnet4.png
[01comnet5]: ./../image/01comnet5.png
[01comnet6]: ./../image/01comnet6.png
[01comnet7]: ./../image/01comnet7.png
[01comnet8]: ./../image/01comnet8.png
[01comnet9]: ./../image/01comnet9.png
[01comnet10]: ./../image/01comnet10.png
[01comnet11]: ./../image/01comnet11.png
[01comnet12]: ./../image/01comnet12.png
[01comnet13]: ./../image/01comnet13.png
[01comnet14]: ./../image/01comnet14.png
[01comnet15]: ./../image/01comnet15.png
[01comnet16]: ./../image/01comnet16.png
[01comnet17]: ./../image/01comnet17.png
[01comnet18]: ./../image/01comnet18.png
[01comnet19]: ./../image/01comnet19.png
[01comnet20]: ./../image/01comnet20.png
[01comnet21]: ./../image/01comnet21.png
[01comnet22]: ./../image/01comnet22.png
[01comnet23]: ./../image/01comnet23.png
[01comnet24]: ./../image/01comnet24.png
[01comnet25]: ./../image/01comnet25.png
[01comnet26]: ./../image/01comnet26.png
[01comnet27]: ./../image/01comnet27.png
[01comnet28]: ./../image/01comnet28.png
[01comnet29]: ./../image/01comnet29.png
[01comnet30]: ./../image/01comnet30.png
[01comnet31]: ./../image/01comnet31.png
[01comnet32]: ./../image/01comnet32.png
[01comnet33]: ./../image/01comnet33.png
[01comnet34]: ./../image/01comnet34.png
[01comnet35]: ./../image/01comnet35.png
[01comnet36]: ./../image/01comnet36.png
[01comnet37]: ./../image/01comnet37.png
[01comnet38]: ./../image/01comnet38.png
[01comnet39]: ./../image/01comnet39.png
[01comnet40]: ./../image/01comnet40.png
[01comnet41]: ./../image/01comnet41.png
[01comnet42]: ./../image/01comnet42.png
[01comnet43]: ./../image/01comnet43.png
[01comnet44]: ./../image/01comnet44.png
[01comnet45]: ./../image/01comnet45.png
[01comnet46]: ./../image/01comnet46.png
[01comnet47]: ./../image/01comnet47.png
[01comnet48]: ./../image/01comnet48.png
[01comnet49]: ./../image/01comnet49.png
[01comnet50]: ./../image/01comnet50.png
[01comnet51]: ./../image/01comnet51.png
[01comnet52]: ./../image/01comnet52.png
[01comnet53]: ./../image/01comnet53.png
[01comnet54]: ./../image/01comnet54.png
[01comnet55]: ./../image/01comnet55.png
[01comnet56]: ./../image/01comnet56.png
[01comnet57]: ./../image/01comnet57.png
[01comnet58]: ./../image/01comnet58.png
[01comnet59]: ./../image/01comnet59.png
[01comnet60]: ./../image/01comnet60.png
[01comnet61]: ./../image/01comnet61.png
[01comnet62]: ./../image/01comnet62.png
[01comnet63]: ./../image/01comnet63.png
[01comnet64]: ./../image/01comnet64.png
[01comnet65]: ./../image/01comnet65.png
[01comnet66]: ./../image/01comnet66.png
[01comnet67]: ./../image/01comnet67.png
[01comnet68]: ./../image/01comnet68.png
[01comnet69]: ./../image/01comnet69.png
[01comnet70]: ./../image/01comnet70.png
