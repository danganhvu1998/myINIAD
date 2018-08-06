# Calculate the area of a circle
import re

# Continues until integer-formatted string is inputted
while True:
  s = input("r=")
  if re.fullmatch("\d+", s)!=None:
    break
  print("Wrong input. Please try again")

r = int(s)
print("Area is", r * r * 3.14159)