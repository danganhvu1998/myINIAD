# average number of arrival packets per unit time  (pps)
Lambda = int(input("Average number of arrival packets per unit time: "))
# average packet length (bytes)
average_packet_length = int(input("Average packet length: "))
# link capacity (bytes)
link_capacity = int(input("Link capacity: "))

# average service time (1/u)
average_service_time = float(8 * average_packet_length)/float(link_capacity*1000000)
# u = 1/average_service_time
print("average service time: " + str(average_service_time))

p = Lambda * average_service_time
print("p: " + str(p))

# mean delay time (M/M/1)
T =  average_service_time/(1-p)
print("T: " + str(T))
