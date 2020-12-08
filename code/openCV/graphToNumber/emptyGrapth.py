import cv2
import numpy as np


graph = []
graph.append(cv2.imread('../resources/graphs/pattern1.png'))
graph.append(cv2.imread('../resources/graphs/pattern2.png'))
graph.append(cv2.imread('../resources/graphs/pattern3.png'))
graph.append(cv2.imread('../resources/graphs/pattern4.png'))
graph.append(cv2.imread('../resources/graphs/pattern5.png'))
graph.append(cv2.imread('../resources/graphs/pattern6.png'))
graph.append(cv2.imread('../resources/graphs/pattern7.png'))

height = graph[0].shape[0]
width = graph[0].shape[1]
length = len(graph)

for i in range(length):
    print(i, graph[i].shape)

emptyGraph = np.zeros((height, width, 3), np.uint8)
for i in range(height):
    for j in range(width):
        for iImageIndex in range(length):
            for jImageIndex in range(length):
                if(iImageIndex == jImageIndex):
                    continue
                comp1 = graph[iImageIndex][i][j] == graph[jImageIndex][i][j]
                if(comp1.all()):
                    emptyGraph[i][j] = graph[iImageIndex][i][j]
                    break
cv2.imwrite('./emptyGrapth.png', emptyGraph)
cv2.imshow('emptyGraph', emptyGraph)
cv2.waitKey(0)
