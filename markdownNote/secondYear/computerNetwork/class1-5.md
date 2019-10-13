# Computer Networks I

## Class 1: Network Fundamentals

+ ***<span style="color:MediumSpringGreen">What is Computer Network; What is The Interne</span>***
  + ***Computer Network:*** A collection of computers connected by commuication media
  + ***The Internet:*** 
    + Global system of interconnected networks
    + Uses the internet protocol suite (TCP/IP suite)
      + TCP: a primary protocol used in the Internet to **reliably transfer** data from a program in the source computer to a program in another computer in order
      + IP: a primary communication protocol used in the Internet used for **relaying packets** between networks
+ ***<span style="color:MediumSpringGreen">Basic technology of the Internet</span>***
  + Packet switching
    + Transporting packets
    + Using shared communication line
    + No reservation steps => congestion / packets may be lost
    + Best effort: concentrating on delivering from A to B with a probability of 0% or more
      + Stable condition: average packet arrival rate < average packet processing
      + Congested condition: ave packet arrival rate >= average packet processing 
+ ***<span style="color:MediumSpringGreen">What is Protocol</span>***
  + ***Protocol***: a complete set of rules
    + Format
    + Order of messages sent and received among network entitiles
    + Actions taken on message transmission and receipt
  + ![Example][00comnet1]
+ ***<span style="color:MediumSpringGreen">Layered Communication Model</span>***
  + Layered Communication Model:
    + Breakdown complex and various tasks into separate layers for simplicity
    + Each layer uses functions and services of only lower-level layers
    + Each layer provide functions and service only to upper level layers
    + Simplified and clear interface: inputs and outputs only to/from adjacent layer
    + ![Example][00comnet2]
  + ***<span style="color:tomato">OSI Model</span>***
    + Developed by Open Systems Interconnect (OSI)
    + Provide a reference for mapping the Internet functionality
    + ![Example][00comnet3]
    + Consists of 7 layers
      + ***<span style="color:Chartreuse ">Application Layer</span>***
        + Provide network services to users
        + Abstraction layer that specifies the shared protocols and interface methods used by hosts in a communication network
        + Eliminate the need for each application program to include code for every service 
        + Data Unit: Data
        + Example: HTTP, SMTP, FTP
      + ***<span style="color:Chartreuse ">Presentation Layer</span>***
        + Provide a common representation of data transferred between peer application layer entities on different stations
        + Convert machine dependent data to machine independent data
        + Encryption and decryption
        + Data Unit: Data
        + Example: HTTP, XML
      + ***<span style="color:Chartreuse ">Session Layer</span>***
        + Inter-host communication
        + Opening, closing, managing a session between application processes
        + Data: Data
        + Example: Remote Procedure Call (RPC)
      + ***<span style="color:Chartreuse ">Transport Layer</span>***
        + Provide reliable delivery of segments between points on a network
        + Data: Segments
        + Expamle: TCP (Transmission Control Protocol), UDP (User Datagram Protocol)
      + ***<span style="color:Chartreuse ">Network Layer</span>***
        + Addressing, routing, and reliable delivery of datagrams between points on a network
        + Responsible for packet forwarding including routing through intermediate routers
        + Data: Packet / Datagram
        + Example: IP (Internet Protocol)
      + ***<span style="color:Chartreuse ">Data Link Layer</span>***
        + Provide a reliable direct point-to-point data connection
        + Data: Bit/Frame
        + IEEE 802.11, IEEE 802.3
      + ***<span style="color:Chartreuse ">Physical Layer</span>***
        + Provide direct point-to-point data connection
        + Defines the electrical, mechanical, functional and procedural specifications for hardware that connects a device to the network 
        + Data: Bit
        + Example: Connector's size and shape, number of pins, signals that can be used, IEEE 802.3, IEEE 802.11
  + ***<span style="color:tomato">TCP/IP Model</span>***
    + OSI Model: focuses on the standard than implementation
    + TCP/IP model: focuses on actual implementation by heterogeneous network
    + ![Example][00comnet4]
    + The Internet is based on TCP/IP model
      + ![Example][00comnet5]
    + Encapsulation and Unwrapping
      + ![Example][00comnet6]
      + **Encapsulation**: Wrapping up a block of information with protocol header
      + **Unwrapping**: Unwrapping of a block of information for use by above layer
    + Packet
      + ![Example][00comnet7]
      + A unit of information travelling in the Internet is called packet
      + Packets are called differently at each layer: message, segment, datagram, frame
    + Segmentation
      + ![Example][00comnet8]
      + ***<span style="color:Chartreuse ">Sender</span>***
        + The maximum value of data that can be handled by the **data link** layer is MTU(Maximum Transmitsson Unit)
        + All of the application data must fit in the MTU
        + The size of the data(Application Data) that the transport layer can handle is less than or equal to MSS (Maximum Segment Size)
        + Application data larger than MSS is divided into multiple segments and transmitted as packets
        + MSS = MTU - 40 (20 Byte for TCP + 20 Byte IP)
        + ![Example][00comnet9]
        + TCP divides the data into smaller segments so each segment size is at most MSS
        + The sequence number (Seg. #) is the number assigned to each segment segmented
        + **A random number is given as a sequence number if the first segment**
        + ![Example][00comnet10]
      + ***<span style="color:Chartreuse ">Receiver</span>***
        + ![Example][00comnet11]
+ ***<span style="color:MediumSpringGreen">Inside The Internet</span>***
  + ![Example][00comnet12]
  + Step 1: DHCP - acquire own IP address (Dynamic Host Configuration Protocol)
  + Step 2: DNS - Find out webserver's IP address (Domain Name System)
  + Step 3: ARP - Find out necessary MAC address (Address Resolution Protocol)
  + Step 4: TCP three-way handshake
  + Step 5: HTTP
  + Step 6 ~ N-1:
    + Routing & Forwarding
    + Retransmission
    + Flow control
    + Congestion control
  + Step N: TCP FIN (TCP connection close)

## Class 2: Network Fundamentals II

+ ***<span style="color:MediumSpringGreen">Network Topology</span>***
  + ![Example][00comnet13]
+ ***<span style="color:MediumSpringGreen">Internet Structure</span>***
  + ![Example][00comnet14]
  + Core of the Internet is Tier 1 internet service provides (ISPs)
    + Tier 1 ISP does not purchase any transit service
    + It keeps peering relationship with other Tier 1 ISP to maintain global reachability
  + Tier 2 ISPs wrap around the Internet core
  + Tier 3 ISPs (local ISPs) wrap around Tier 2 ISPs
  + Multi-homed network
    + ![Example][00comnet18]
    + Multihoming is the practice of connecting a host or a computer network to more than one network
+ ***<span style="color:MediumSpringGreen">Network Performance</span>***
  + ***<span style="color:tomato">Per-hop Deley</span>***
    + ![Example][00comnet15]
    + Processing Delay
    + Queueing Delay
    + Propagation Delay
      + = Link distance / Propagation Speed
    + Transmission Delay
      + = Packet size / Transmission Rate of link
    + ![Example][00comnet16]
  + ***<span style="color:tomato">End to End delay</span>***
    + ![Example][00comnet17]
  + ***<span style="color:tomato">Packet Loss Rate</span>***
    + ![Example][00comnet19]
  + ***<span style="color:tomato">Jitter</span>***
    + ![Example][00comnet20]
  + ***<span style="color:tomato">Throughput</span>***
    + ![Example][00comnet21]

## Class 3: HTTP Protocol

+ HTTP Protocol
  + Web protocol between client web browser and web server
  + Client sends HTTP request message
  + Server replies to the request message via HTTP response message
  + Requires TCP connection
    + ![Example][00comnet22]
  + Most of the Web pages are composed of basic HTML files containing multiple reference objects
  + Each object is recognized by a Universal Resource Locator
  + URL is a host name followed by a path name
    + ![Example][00comnet23]
  + HTTP Protocol is based on REST architecture
    + CRUD (Create, Read, Update, Delete) operation on resource
    + REST: Representation State Transfer
  + HTTP server is stateless in essence
    + Server does not keep any state information regarding what service was asked and provided to clients including the very recent inquiry
    + Client has to make a clear inquiry every time
  + HTTP is Persistent or Non-persistent
    + Non-persistent
      + Establish of TCP connection is required for each HTTP request/response set
      + HTTP v1.0 default
      + Set `connection` field in HTTP header to `close`
      + ![Example][00comnet24]
    + Persistent
      + Multiple requests\responses are possible for each TCP connection -> Better efficiency
      + ![Example][00comnet25]
      + HTTP v1.1 default
      + Set `connection` field in HTTP header to `keep-alive`
  + ***<span style="color:MediumSpringGreen">HTTP Request</span>***
    + HTTP Request contains Request-Line, Request-header fields, HTTP body 
    + ![Example][00comnet26]
      + ***<span style="color:tomato">HTTP Request Line</span>***
        + Consists of HTTP method, Requested-URI, and HTTP version
          + Method
            + GET
            + PUT
            + POST
            + etc
          + URL
          + HTTP-Version
            + HTTP/09 (1991~)
            + HTTP.1.0 (RFC 1945 (1996~))
            + HTTP/1.1 (RFC 2068 (1997~), RFC 2616, RFC 7239~7240)
            + HTTP/2 (RFC 7540 (2015~)) 
          + Example ```HTTP GET ~temp/my_pic.jpg HTTP/1.1```
      + ***<span style="color:tomato">HTTP Request Header</span>***
        + Define the oparating parameters of an HTTP transaction
        + Colon-separated name-value pairs in clear-text string format
        + Some fields and how to read
          + Accept: Certain media types are acceptable for the response. If no Accept header is presented, server assume that client accepts all media types. A comma-separated list of entries, and a optional parameters are separated by semicolons to represents a relative preference ranges from 0 to 1(with 1 means the most preferred optin):q
            + Accept: text/plain; q=0.5, text/html, text/x-dvi; q=0.8
              + -> text/html > text/x-dvi > text/plain
          + Accept-Encoding: compress; q=0.5, gzip; q=1.0
        + Example

          + ```html-request-header
            Host: www.metro.tokyo.jp
            User-Agent: Firefox/21.0
            Connection: keep-alive
            Accept: text/html
            Accept-Encoding: compress; q=0.5, gzip; q=1.0
            Accept-Language: en-US
            ```

  + ***<span style="color:MediumSpringGreen">HTTP Response</span>***
    + HTTP Response contains of Status line, Response-header fields, Entity body field
    + ![Example][00comnet27]
      + Status line
        + Protocol version
        + Status Code and Status Phrase
          + ![Example][00comnet28]
      + Response-header fields

        + ```html-request-header
          Date: Sun, 29 ...\r\n
          Last-Modified: Sat, ...\r\n
            Content-Length: 18640\r\n
          Content-Type: text/html\r\n
          \r\n
          ```

      + Entity body field
  + ***<span style="color:MediumSpringGreen">Cookies</span>***
    + HTTP has stateless propersies for the sake of service scalability. But it is possible for the server to improve the service by maintaining a small amount of indo and shareing the ID associated with it with the client. That the idea of `Cookies`
      + `Session Cookie` is kept only until the end of the session
      + `Persistent Cookie` is maintained until the expiration data
    + How Cookies work:
      + User sends HTTP request
      + The server creates a file that stores the data, assigns it to a unique ID
      + The user saves a unique ID for each service in the database
      + The server passes the ID from the client to the back-end database, and the servr considers the data corresponding to the user and provides the service more suitable for the user
      + ![Example][00comnet29]
      + ![Example][00comnet30]
    + Inaccurate Identify in Cookies
      + Use of multiple browsers
      + Shared environment
  + ***<span style="color:MediumSpringGreen">Caching</span>***
    + To avoid retransmisson of the same content by accessing the cached(saved) content
    + ***<span style="color:tomato">Time-based Caching</span>***
      + For a given request from client, the server sends the content infomation as the value of `Last-Modified` response header field
      + For subsequent request, the cliet checks for the latest content change by including the cached content information as an `If-Modified-Since` request header field value
      + Server sends the content only if it has the newer update
      + ![Example][00comnet31]
    + ***<span style="color:tomato">Content-based Caching</span>***
      + The server sends the signature associated with the content as the Etag response header field value
      + For subsequent request, the cliet checks for the latest content change by including the cached content information as an `If-None-Match` request header field value
      + Server sends the content only if it has the newer update
      + ![Example][00comnet32]
    + ***<span style="color:tomato">Caching Location</span>***
      + ***<span style="color:SlateGray">Private Cache</span>***
        + Browser's private cache
        + Offline displace of cached content is possible
        + Cache-Control: private
        + ![Example][00comnet33]
      + ***<span style="color:SlateGray">Shared Cache</span>***
        + Shared cache locally installed to reduce network traffic and latency
        + Cache-Control: public
        + ![Example][00comnet34]

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
