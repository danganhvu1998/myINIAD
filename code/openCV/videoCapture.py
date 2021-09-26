import cv2

cap = cv2.VideoCapture('./resources/test.mp4')

while True:
    success, img = cap.read()
    if success:
        cv2.imshow('title', img)
        cv2.waitKey(0)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
