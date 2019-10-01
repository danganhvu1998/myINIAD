import requests
import os
import re

response = requests.get("http://zip.cgis.biz/csv/zip.php?zn=1150053")
#print(os.path.expanduser("~"))
os.makedirs(os.path.expanduser("~")+'/cs-exercise/6-3/', exist_ok = True)
fhand = open(os.path.expanduser("~")+'/cs-exercise/6-3/result.csv','w')
fhand.write( re.findall('=([0-9]{7})\"', response.text)[0] )
fhand.close()