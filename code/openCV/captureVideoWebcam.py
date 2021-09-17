import cv2

cap = cv2.VideoCapture(0)
cap.set(3, 640)  # Set width
cap.set(4, 480)  # Set height
cap.set(10, 100)  # Set brightness

while True:
    success, img = cap.read()
    if success:
        cv2.imshow('title', img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
