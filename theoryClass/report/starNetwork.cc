#include <iostream>
#include <fstream>
#include <string>
#include <unistd.h>

#include "ns3/core-module.h"
#include "ns3/network-module.h"
#include "ns3/internet-module.h"
#include "ns3/point-to-point-module.h"
#include "ns3/applications-module.h"
#include "ns3/netanim-module.h"
#include "ns3/tcp-header.h"
#include "ns3/udp-header.h"

#define NET_ADD1 "192.168.1.0"
#define NET_ADD2 "192.168.2.0"
#define NET_ADD3 "192.168.3.0"
#define NET_ADD4 "192.168.4.0"
#define NET_ADD5 "192.168.5.0"
#define NET_ADD6 "192.168.6.0"
#define NET_MASK "255.255.255.0"
#define FIRST_NO "0.0.0.1"

#define SIM_START 0.0
#define SIM_STOP 100.0
#define DATA_MBYTES 50
#define PORT 50000

#define PROG_DIR "scratch/"

using namespace ns3;

NS_LOG_COMPONENT_DEFINE("exp01-SimpleTCP");

int main(int argc, char *argv[])
{
    CommandLine cmd;
    std::string trace_socket = "False";
    cmd.AddValue("traceSocket", "True: trace source/sink sockets.", trace_socket);
    cmd.Parse(argc, argv);

    // LogComponentEnable("TcpSocketBase", LOG_LEVEL_INFO); // LOG_LEVEL_FUNCTION can be set

    Config::SetDefault("ns3::QueueBase::MaxSize", QueueSizeValue(QueueSize(QueueSizeUnit::PACKETS, 5)));

    // random seed
    SeedManager::SetSeed(1);
    SeedManager::SetRun(1);

    NS_LOG_DEBUG("Creating Topology");
    NodeContainer net1_nodes;
    net1_nodes.Create(2); // create n0, n1 nodes

    NodeContainer net2_nodes;
    net2_nodes.Add(net1_nodes.Get(0)); // n0 is set as shared node
    net2_nodes.Create(1);              // create n2 node

    NodeContainer net3_nodes;
    net3_nodes.Add(net1_nodes.Get(0)); // n0 is set as shared node
    net3_nodes.Create(1);              // create n3 node

    NodeContainer net4_nodes;
    net4_nodes.Add(net1_nodes.Get(0));
    net4_nodes.Create(1);

    NodeContainer net5_nodes;
    net5_nodes.Add(net1_nodes.Get(0));
    net5_nodes.Create(1);

    NodeContainer net6_nodes;
    net6_nodes.Add(net1_nodes.Get(0));
    net6_nodes.Create(1);

    // link assigned from source node (n0, n2) to router n1
    PointToPointHelper p2p1;
    p2p1.SetDeviceAttribute("DataRate", StringValue("100Mbps"));
    p2p1.SetChannelAttribute("Delay", StringValue("5ms"));
    p2p1.SetQueue("ns3::DropTailQueue");

    NetDeviceContainer devices1;
    devices1 = p2p1.Install(net1_nodes);

    NetDeviceContainer devices2;
    devices2 = p2p1.Install(net2_nodes);

    NetDeviceContainer devices3;
    devices3 = p2p1.Install(net3_nodes);

    NetDeviceContainer devices4;
    devices4 = p2p1.Install(net4_nodes);

    NetDeviceContainer devices5;
    devices5 = p2p1.Install(net5_nodes);

    NetDeviceContainer devices6;
    devices6 = p2p1.Install(net6_nodes);

    InternetStackHelper stack;
    stack.InstallAll();

    Ipv4AddressHelper address;

    address.SetBase(NET_ADD1, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs1 = address.Assign(devices1);
    address.SetBase(NET_ADD2, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs2 = address.Assign(devices2);
    address.SetBase(NET_ADD3, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs3 = address.Assign(devices3);
    address.SetBase(NET_ADD4, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs4 = address.Assign(devices4);
    address.SetBase(NET_ADD5, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs5 = address.Assign(devices5);
    address.SetBase(NET_ADD6, NET_MASK, FIRST_NO);
    Ipv4InterfaceContainer ifs6 = address.Assign(devices6);

    NS_LOG_INFO("Initialize Global Routing.");
    Ipv4GlobalRoutingHelper::PopulateRoutingTables();

    //address of Network 4's first node (i.e., n4) is set as remote address
    AddressValue remoteAddress4(InetSocketAddress(ifs4.GetAddress(1, 0), PORT));
    BulkSendHelper ftp4("ns3::TcpSocketFactory", Address());
    ftp4.SetAttribute("Remote", remoteAddress4);
    ftp4.SetAttribute("MaxBytes", UintegerValue(int(DATA_MBYTES * 1024 * 1024)));
    // attach ftp to source node n1
    ApplicationContainer sourceApp1 = ftp4.Install(net1_nodes.Get(1));
    sourceApp1.Start(Seconds(SIM_START));
    sourceApp1.Stop(Seconds(SIM_STOP));

    //address of Network 5's first node (i.e., n5) is set as remote address
    AddressValue remoteAddress5(InetSocketAddress(ifs5.GetAddress(1, 0), PORT));
    BulkSendHelper ftp5("ns3::TcpSocketFactory", Address());
    ftp5.SetAttribute("Remote", remoteAddress5);
    ftp5.SetAttribute("MaxBytes", UintegerValue(int(DATA_MBYTES * 1024 * 1024)));
    // attach ftp to source node n1
    ApplicationContainer sourceApp2 = ftp5.Install(net2_nodes.Get(1));
    sourceApp2.Start(Seconds(SIM_START));
    sourceApp2.Stop(Seconds(SIM_STOP));

    //address of Network 6's first node (i.e., n6) is set as remote address
    AddressValue remoteAddress6(InetSocketAddress(ifs6.GetAddress(1, 0), PORT));
    BulkSendHelper ftp6("ns3::TcpSocketFactory", Address());
    ftp6.SetAttribute("Remote", remoteAddress6);
    ftp6.SetAttribute("MaxBytes", UintegerValue(int(DATA_MBYTES * 1024 * 1024)));
    // attach ftp to source node n1
    ApplicationContainer sourceApp3 = ftp6.Install(net3_nodes.Get(1));
    sourceApp3.Start(Seconds(SIM_START));
    sourceApp3.Stop(Seconds(SIM_STOP));

    // configuration of sink node n3
    Address sinkAddress(InetSocketAddress(Ipv4Address::GetAny(), PORT));
    PacketSinkHelper sinkHelper("ns3::TcpSocketFactory", sinkAddress);
    ApplicationContainer sink_apps4 = sinkHelper.Install(net4_nodes.Get(1));
    sink_apps4.Start(Seconds(SIM_START));
    sink_apps4.Stop(Seconds(SIM_STOP));
    ApplicationContainer sink_apps5 = sinkHelper.Install(net5_nodes.Get(1));
    sink_apps5.Start(Seconds(SIM_START));
    sink_apps5.Stop(Seconds(SIM_STOP));
    ApplicationContainer sink_apps6 = sinkHelper.Install(net6_nodes.Get(1));
    sink_apps6.Start(Seconds(SIM_START));
    sink_apps6.Stop(Seconds(SIM_STOP));

    // for PCAP trace
    std::string pfname = std::string(PROG_DIR) + "startNetwork-";
    p2p1.EnablePcap(pfname + "node0", devices1.Get(0), true);
    p2p1.EnablePcap(pfname + "node1", devices1.Get(1), true);

    // Animation
    // AnimationInterface anim(std::string(PROG_DIR) + "simpleTCP-animation.xml");

    Simulator::Stop(Seconds(SIM_STOP));
    Simulator::Run();
    Simulator::Destroy();

    return 0;
}
