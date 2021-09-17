import cv2
import numpy as np

cap = cv2.VideoCapture(0)
cap.set(3, 320)  # Set width
cap.set(4, 240)  # Set height
cap.set(10, 100)  # Set brightness

kernel = np.ones((5, 5), np.uint8)
while True:
    success, img = cap.read()
    if success:
        imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        imgBlur = cv2.GaussianBlur(imgGray, (31, 31), 0)
        imgCanny = cv2.Canny(img, 100, 100)
        imgDialation = cv2.dilate(imgCanny, kernel, iterations=1)
        imgEroded = cv2.erode(imgDialation, kernel, iterations=1)
        cv2.imshow('img', img)
        cv2.imshow("Gray Image", imgGray)
        cv2.imshow("Blur Image", imgBlur)
        cv2.imshow("Canny Image", imgCanny)
        cv2.imshow("Dialation Image", imgDialation)
        cv2.imshow("Eroded Image", imgEroded)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
