# Computer Network 2

## Important Keyword

+ CN: Core network
+ RAN: Radio Access Network
+ UE: User Equipment
+ BTS: Base Transceive Station 
+ ARP: Address Resolution Protocol
+ Link layer address: MAC address

## 01-1: Basic structures and mechanisms of networks

1. Structures of infomation communication network
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
            1. Host and router keep thier routing table
               1. Destination network and Next hop info
            2. Each time, search the routing table for the destination network that matchs then forward
            3. ![Error][00comnet11]




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
