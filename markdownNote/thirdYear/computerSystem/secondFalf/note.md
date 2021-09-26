# System Security

## Common Key Cryptography
![Error][01comsys1]

+ Example:
  + DES [Page 41](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)
  + 3DES [Page 46](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)
  + AES [Page 47](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)
  + RC4 [Page 48](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)
  + Block Chain [Page 49](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)

## Puclic Key Cryptography
![Error][01comsys2]

+ Example
  + RSA [WIKI](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) or [Slice Page 53](https://moocs.iniad.org/courses/2020/CS113/Week09/09-3)

## Key Exchange Algorithms

+ Diffie Hellman key exchange algorithm
  + ![Error][01comsys3]
  + ![Error][01comsys4]

# P2P and DHT

## P2P
![Error][01comsys8]

### Hybrid P2P model
![Error][01comsys5]

### Pure P2P model
![Error][01comsys6]

+ File accquisition procedures
  + When `peer 2` want to obtain file `P`, it sends a search query to adjacent node `peer 3`
  + `peer 3` does not have the file, it sends search query to next node `peer 4`
  + `peer 4` haves the file, so it sends metadata to `peer 2`
  + `peer 2` receives the response information from `peer 4`, a direct link between `peer 2` and `peer 4` will be established. File `P` will be transferred directly between `peer 2` and `peer 4`

### Super-node model
![Error][01comsys7]

Same as Hybrid P2P, but super-node will be choosen depend on processing capacity

## Overlay Network
![Error][01comsys9]

+ flooding: 
  + ![Error][01comsys10]
  + To find sth, node send find request to adjacent node, then adjacent node also forward it, and so on.
+ rendezvous: a way for P2P network participants to find each other

## DHT Structure Overlay [Page 38](https://moocs.iniad.org/courses/2020/CS113/Week11/11-2)

### Chord: Search algo in DHT

+ Important Note:
  + node `successor(k)` will keep the information about file `k`
    + ![Error][01comsys11]
  + Search for file O(log(N))
    + [Page 54](https://moocs.iniad.org/courses/2020/CS113/Week11/11-2)

# Bitcoin and Block Chain

LOL WHAT?

# CDN and ICN

[01comsys1]: ../../image/01comsys1.png
[01comsys2]: ../../image/01comsys2.png
[01comsys3]: ../../image/01comsys3.png
[01comsys4]: ../../image/01comsys4.png
[01comsys5]: ../../image/01comsys5.png
[01comsys6]: ../../image/01comsys6.png
[01comsys7]: ../../image/01comsys7.png
[01comsys8]: ../../image/01comsys8.png
[01comsys9]: ../../image/01comsys9.png
[01comsys10]: ../../image/01comsys10.png
[01comsys11]: ../../image/01comsys11.png
[01comsys12]: ../../image/01comsys12.png
[01comsys13]: ../../image/01comsys13.png
[01comsys14]: ../../image/01comsys14.png
[01comsys15]: ../../image/01comsys15.png
[01comsys16]: ../../image/01comsys16.png
[01comsys17]: ../../image/01comsys17.png
[01comsys18]: ../../image/01comsys18.png
[01comsys19]: ../../image/01comsys19.png
[01comsys20]: ../../image/01comsys20.png
[01comsys21]: ../../image/01comsys21.png
[01comsys22]: ../../image/01comsys22.png
[01comsys23]: ../../image/01comsys23.png
[01comsys24]: ../../image/01comsys24.png
[01comsys25]: ../../image/01comsys25.png
[01comsys26]: ../../image/01comsys26.png
[01comsys27]: ../../image/01comsys27.png
[01comsys28]: ../../image/01comsys28.png
[01comsys29]: ../../image/01comsys29.png
[01comsys30]: ../../image/01comsys30.png
[01comsys31]: ../../image/01comsys31.png
[01comsys32]: ../../image/01comsys32.png
[01comsys33]: ../../image/01comsys33.gif
[01comsys34]: ../../image/01comsys34.png
[01comsys35]: ../../image/01comsys35.png
[01comsys36]: ../../image/01comsys36.png
[01comsys37]: ../../image/01comsys37.png
[01comsys38]: ../../image/01comsys38.png
[01comsys39]: ../../image/01comsys39.png
[01comsys40]: ../../image/01comsys40.png
[01comsys41]: ../../image/01comsys41.png
[01comsys42]: ../../image/01comsys42.png
[01comsys43]: ../../image/01comsys43.png
[01comsys44]: ../../image/01comsys44.png
[01comsys45]: ../../image/01comsys45.png
[01comsys46]: ../../image/01comsys46.png
[01comsys47]: ../../image/01comsys47.png
[01comsys48]: ../../image/01comsys48.png
[01comsys49]: ../../image/01comsys49.png
[01comsys50]: ../../image/01comsys50.png
[01comsys51]: ../../image/01comsys51.png
[01comsys52]: ../../image/01comsys52.png
[01comsys53]: ../../image/01comsys53.png
[01comsys54]: ../../image/01comsys54.png
[01comsys55]: ../../image/01comsys55.png
[01comsys56]: ../../image/01comsys56.png
[01comsys57]: ../../image/01comsys57.png
[01comsys58]: ../../image/01comsys58.png
[01comsys59]: ../../image/01comsys59.png
[01comsys60]: ../../image/01comsys60.png
[01comsys61]: ../../image/01comsys61.png
[01comsys62]: ../../image/01comsys62.png
[01comsys63]: ../../image/01comsys63.png
[01comsys64]: ../../image/01comsys64.png
[01comsys65]: ../../image/01comsys65.png
[01comsys66]: ../../image/01comsys66.png
[01comsys67]: ../../image/01comsys67.png
[01comsys68]: ../../image/01comsys68.png
[01comsys69]: ../../image/01comsys69.png
[01comsys70]: ../../image/01comsys70.png
