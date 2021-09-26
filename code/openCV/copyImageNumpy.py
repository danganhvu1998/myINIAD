import cv2
import numpy as np

img = cv2.imread('./resources/lena.png')
height = img.shape[0]
width = img.shape[1]
copyImg = np.zeros((height, width, 3), np.uint8)
for i in range(height):
    for j in range(width):
        copyImg[i, j] = img[i, j]
cv2.imshow('origin', img)
cv2.imshow('copy', copyImg)
cv2.waitKey(0)
