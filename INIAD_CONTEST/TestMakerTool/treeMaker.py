from random import randint
import os

NUM_TEST = 20
PROBLEMS_NAME = "LONGEST"
FOLDER_URL = "./TestContainer/" + PROBLEMS_NAME + "/"
try: os.mkdir(FOLDER_URL)
except: print( "Existing", FOLDER_URL )

def main():
    for i in range(NUM_TEST):
        if i<10: testFolder = "0"+str(i)
        else: testFolder = str(i)
        testFolder = FOLDER_URL + "TEST" + testFolder + "/"
        try: os.mkdir(testFolder)
        except: print( "Existing", testFolder )
        fl = open( testFolder+PROBLEMS_NAME+".inp", "w" )
        ######
        # MAKING TEST INP HERE
        N = 0
        if i<=10: N = 1000
        else: N = 1000000
        fl.write(str(N)+"\n")
        for i in range(1, N):
            fl.write("{} {}\n".format(randint(1, i), i+1))
        ######
        fl.close()

main()
        