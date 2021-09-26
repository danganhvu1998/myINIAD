import math

while True:
  try:
    # Let's user input radius of a circle, allowing decimals
    r = float(input('radius='))

    # Shows the area of the circle
    print('The area of circle is', r * r * math.pi)
  except:
    # Shows an error message when radius is not inputted correctly
    print('Please input a radius correctly')