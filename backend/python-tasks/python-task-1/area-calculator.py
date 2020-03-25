from math import pi

userInput = float(input("Please enter the radius of the circle "))

def circleArea(radius):
  return radius * radius * pi

print(f"The area of the circle with radius {userInput} is {circleArea(userInput)}")
