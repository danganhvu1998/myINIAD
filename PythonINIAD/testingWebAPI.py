import requests
import os
import re

response = requests.get("https://en.wikipedia.org/wiki/Deviation")
fhand = open("testingWebAPI.html",'w')
fhand.write(response.text)
fhand.close()