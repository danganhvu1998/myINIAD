needFormat = """
Suzuki	Semiconductor
Koyama	Sales
Tanaka	Semiconductor
Uesugi	Visual
Furuta	Semiconductor
"""

needFormat.strip()
needFormat = needFormat.splitlines()
for line in needFormat:
    if(len(line) == 0): continue
    print(tuple(line.split()))