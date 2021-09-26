# Load random module
import random

# Candidates for your meal
meals = ["curry", "ramen", "sushi"]

for m in range(1, 31):
  # Randomly select one from meals
  item = random.choice(meals)

  print("How about", item, "for April", m, "?")