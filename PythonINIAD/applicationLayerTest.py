import urllib.request as ur

url = "http://www.metro.tokyo.jp/index.html"
conn = ur.urlopen(url)
print(conn)
data = conn.read()
#print(data)
print("\nStep 6")
print(conn.getcode())
print("\nStep 7")
print(conn.getheader("Content-type"))
print("\nStep 8")
for key, value in conn.getheaders():
    print(key+":", value)