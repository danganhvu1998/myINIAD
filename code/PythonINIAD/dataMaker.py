fhand = open("data.dat", "w")
for i in range(-100, 101):
    for j in range(-100, 101):
        fhand.write(str(i/20.0)+","+str(j/20.0)+"\n")