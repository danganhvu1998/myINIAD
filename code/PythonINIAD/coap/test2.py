from coapthon.client.helperclient import HelperClient
from coapthon import defines
import time

host = "127.0.0.1"
port = 5683
path ="light"

is_success = True

for color in ["green", "blue", "white", "red", "off", "errorcase"]:
    client = HelperClient(server=(host, port))
    response = client.put(path, color)
    print(response.pretty_print())
    if (color != "errorcase" and response.code != defines.Codes.CHANGED.number):
        is_success = False
    elif (color == "errorcase" and response.code != defines.Codes.BAD_REQUEST.number):
        is_success = False

    client.stop()
    time.sleep(1)

if(is_success):
    print("It passed all the test cases.")
else:
    print("There seems to be a failed test case.")
