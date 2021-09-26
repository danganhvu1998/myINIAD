import requests
import os
import re
import csv

response = requests.get("http://zip.cgis.biz/csv/zip.php?zn=1150053")
print( response.text )
lol = csv.reader(response.text)
for row in lol:
	for element in row:
		if(!len(element)): continue
		