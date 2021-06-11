import sys
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from matplotlib.colors import ListedColormap

def plot_classification_results(X, y, classifier, test_idx=None, n=100, margin=0.05, 
                                contour_alpha=0.3, marker_alpha=0.8, test_marker_size=100):

    # markers and colors
    # https://matplotlib.org/api/markers_api.html
    markers = ('s', 'x', 'o', '^', 'v', '<', '>', 'D')
    colors = ('red', 'blue', 'lightgreen', 'gray', 'cyan', 'magenta', 'orange', 'yellow')
    cmap = ListedColormap(colors[:len(np.unique(y))]) #Generate my own colormap
    
    # X surface
    x1_w = X[:, 0].max() - X[:, 0].min()
    x2_w = X[:, 1].max() - X[:, 1].min()
    x1_min, x1_max = X[:, 0].min() - x1_w*margin, X[:, 0].max() + x1_w*margin
    x2_min, x2_max = X[:, 1].min() - x2_w*margin, X[:, 1].max() + x2_w*margin
    xx1, xx2 = np.meshgrid(np.linspace(x1_min, x1_max, n),
                           np.linspace(x2_min, x2_max, n))

    Z = classifier.predict(np.array([xx1.ravel(), xx2.ravel()]).T)
    Z = Z.reshape(xx1.shape)
    plt.contourf(xx1, xx2, Z, alpha=contour_alpha, cmap=cmap)
    plt.xlim(xx1.min(), xx1.max())
    plt.ylim(xx2.min(), xx2.max())

    # data points
    cls = np.unique(y)
    for idx, cl in enumerate(cls):
        plt.scatter(x=X[y == cl, 0], 
                    y=X[y == cl, 1],
                    alpha=marker_alpha, 
                    marker=markers[idx],
                    c=colors[idx],
                    label=cl,
                    edgecolor='black')

    # highlight test set
    if test_idx:
        X_test, y_test = X[test_idx, :], y[test_idx]
        plt.scatter(X_test[:, 0],
                    X_test[:, 1],
                    edgecolor='black',
                    alpha=1.0,
                    linewidth=1,
                    marker='o',
                    c='',
                    s=test_marker_size, 
                    label='test set')

        
# visualization of Support Vectors
def plot_margin_and_sv(X, y, svc, n=100, margin=0.05, 
                       contour_alpha=0.1, marker_alpha=1.0, test_marker_size=100):

    # markers and colors
    markers = ('s', 'x', 'o', '^', 'v', '<', '>', 'D')
    colors = ('red', 'blue')
    
    # Only support n_cls==2
    cls = np.unique(y)
    if len(cls) != 2:
        raise Exception('{}: n_cls({}) error!'.format(sys._getframe().f_code.co_name,len(cls)))
        
    # X surface
    x1_w = X[:, 0].max() - X[:, 0].min()
    x2_w = X[:, 1].max() - X[:, 1].min()
    x1_min, x1_max = X[:, 0].min() - x1_w*margin, X[:, 0].max() + x1_w*margin
    x2_min, x2_max = X[:, 1].min() - x2_w*margin, X[:, 1].max() + x2_w*margin
    xx1, xx2 = np.meshgrid(np.linspace(x1_min, x1_max, n),
                           np.linspace(x2_min, x2_max, n))

    Z = svc.decision_function(np.array([xx1.ravel(), xx2.ravel()]).T)   
    Z = Z.reshape(xx1.shape)
    #print(Z[:10])
    plt.contourf(xx1, xx2, Z, alpha=contour_alpha/2, cmap=cm.jet)
    plt.contourf(xx1, xx2, Z, alpha=contour_alpha, colors='black',
                 levels=[-1,0,1], linestyles=['dashed','solid','dashed'])
    plt.xlim(xx1.min(), xx1.max())
    plt.ylim(xx2.min(), xx2.max())

    # data points
    for idx, cl in enumerate(cls):
        plt.scatter(x=X[y == cl, 0], 
                    y=X[y == cl, 1],
                    alpha=marker_alpha, 
                    marker=markers[idx],
                    color=colors[idx],
                    label=cl,
                    edgecolor='black')
        
    # highlight support vectors
    x_sv = svc.support_vectors_[:, 0]
    y_sv = svc.support_vectors_[:, 1]
    plt.scatter(x_sv, y_sv,
                edgecolor='black',
                facecolor='none',
                alpha=1.0,
                linewidth=1,
                marker='o',
                s=test_marker_size, 
                label='SV')

    
if __name__ == '__main__':
    X=np.array([[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]])
    y=np.array([0,1,2,3,4,5])
    plot_classification_results(X, y)
    plt.show()
