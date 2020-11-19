needFormat = """
E2	Sales
E5	Semiconductor
E6	Sales
"""

needFormat.strip()
needFormat = needFormat.splitlines()
for line in needFormat:
    if(len(line) == 0):
        continue
    print(tuple(line.split()))
