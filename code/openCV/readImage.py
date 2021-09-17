import cv2

img = cv2.imread('./resources/lena.png')
cv2.imshow('title', img)
cv2.waitKey(0)
