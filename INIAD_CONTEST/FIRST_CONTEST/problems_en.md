# INIAD VERY FIRST CONTEST

## <b style="color:MediumSpringGreen">STRING - 1 POINTS</b>

Time limit per test: 1 second \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output

Given a string S, your job is just print it. This problem is just for testing purpuse. 

Please note if you are using C language: You have to return 0 at the very end. Other wise the answer will not be accepted.
```C
#include <stdio.h>

int main(){
    // THIS CODE WILL GET FULL SCORE
    char S[5000];
    scanf("%s", S);
    printf("%s", S);
    return 0;
}
```

```C
#include <stdio.h>

int main(){
    // BUT THIS CODE WITH GET 0
    char S[5000];
    scanf("%s", S);
    printf("%s", S);
}
```

INPUT:
+ Fist line contain string S ( length < 1000 )

OUTPUT
+ Print string S

### SAMPLE INPUT
```
welcome to our first contest
```

### SAMPLE OUTPUT
```
welcome to our first contest
```

---
## <b style="color:MediumSpringGreen">MAGICSTICK - 50 POINTS</b>

Time limit per test: 2 second \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output


Recently Petya walked in the forest and found a magic stick.

Since Petya really likes numbers, the first thing he learned was spells for changing numbers. So far, he knows only two spells that can be applied to a positive integer:

1. If the chosen number a is even, then the spell will turn it into (3*a)/2;
2. If the chosen number a is greater than one, then the spell will turn it into a−1.

Note that if the number is even and greater than one, then Petya can choose which spell to apply.

Petya now has only one number x. He wants to know if his favorite number y can be obtained from x using the spells he knows. The spells can be used any number of times in any order. It is not required to use spells, Petya can leave x as it is.

INPUT

The first line contains single integer T (1 ≤ T ≤ 10<sup>4</sup>) — the number of test cases. Each test case consists of two lines.

The first line of each test case contains two integers x and y (1 ≤ x, y ≤ 10<sup>9</sup>) — the current number and the number that Petya wants to get.

OUTPUT

For the i-th test case print the answer on it — YES if Petya can get the number y from the number x using known spells, and NO otherwise.

### SAMPLE INPUT
```
7
2 3
1 1
3 6
6 8
1 2
4 1
31235 6578234
```

### SAMPLE OUTPUT
```
YES
YES
NO
YES
NO
YES
YES
```

---
## <b style="color:MediumSpringGreen">MINLCM - 100 POINTS</b>

Time limit per test: 2 second \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output

Given number X (X ≤ 10<sup>12</sup>). Find two number A and B that:
+ A ≤ B
+ LCM(A, B) == X ([LCM Wiki Definition](https://en.wikipedia.org/wiki/Least_common_multiple))
+ B is minimum possible

It is guaranteed that:
+ 50% of test X ≤ 10<sup>6</sup>
+ 100% of Test X ≤ 10<sup>12</sup>

INPUT
+ The first line of the input contains only integers X ( 1≤X≤10<sup>12</sup> )
+ It is guaranteed that:
    + 50% of test X ≤ 10<sup>6</sup>
    + 100% of Test X ≤ 10<sup>12</sup>

OUTPUT
+ Output number A and B

### SAMPLE INPUT 1
```
4
```

### SAMPLE OUTPUT 1
```
1 4
```
### SAMPLE INPUT 2
```
100
```

### SAMPLE OUTPUT 2
```
4 25
```

---
## <b style="color:MediumSpringGreen">ROAD - 150 POINTS</b>

Time limit per test: 4 second \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output

Given a map, count the minimum steps on the fastest path from S to E.
From a position, you can go into 4 positions: Up, Down, Left, Right. Specifically, from [m,n] you can move to [m-1,n], [m+1,n], [m,n-1], [m,n+1]. Note that there is some points that you can not move into and we will call them rocks.

Below is the example: 
 rocks('*'), paths ('.'). The shortest path will be those ‘m’.

           Map               Shortest path
        1 2 3 4 5 6  <-col      1 2 3 4 5 6  <-col
      1 E . . . * .           1 E m m m * .
      2 . . * . . .           2 . . * m m m
      3 . * * . * .           3 . * * . * m
      4 . . * * * .           4 . . * * * m
      5 * . . * . S           5 * . . * . m

INPUT
+ Line 1: 2 integers R and C (1 <= R,C <= 100)
+ Line 2..R+1: Line i+1 describe line i-th with C characters.

OUTPUT
+  An integer that is the steps of the shortest path.

### SAMPLE INPUT
```
5 6
E...*.
..*...
.**.*.
..***.
*..*.S
```

### SAMPLE OUTPUT
```
9
```
## <b style="color:MediumSpringGreen">WATER - 175 POINTS</b>

Time limit per test: 4 second \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output

Given  _n_  non-negative integers  _a1_,  _a2_, ...,  _an_ , where each represents a point at coordinate (_i_,  _ai_).  _n_  vertical lines are drawn such that the two endpoints of line  _i_  is at (_i_,  _ai_) and (_i_, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 **Note:** You may not slant the container and  _n_  is at least 2.
  

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

INPUT
+ Line 1: integer n (2 <= n <= 10<sup>6</sup>)
+ Line 2: n intergers.

OUTPUT
+ An integer that shows the result of the problem.

### SAMPLE INPUT
```
9
1 8 6 2 5 4 8 3 7
```

### SAMPLE OUTPUT
```
49
```
---
## <b style="color:MediumSpringGreen">TREE - 200 POINTS</b>

Time limit per test: 4 seconds \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output 


You are given a rooted tree consisting of n vertices numbered from 1 to n. The root of the tree is a vertex number 1.

A tree is a connected undirected graph with n−1 edges.

You are given m queries. The i-th query consists of the set of ki distinct vertices vi[1],vi[2],…,vi[ki]. Your task is to say if there is a path from the root to some vertex u such that each of the given k vertices is either belongs to this path or has the distance 1 to some vertex of this path.

INPUT

The first line of the input contains two integers n and m (2 ≤ n ≤ 2⋅10<sup>5</sup>, 1 ≤ m ≤ 2⋅10<sup>5</sup>) — the number of vertices in the tree and the number of queries.

Each of the next n−1 lines describes an edge of the tree. Edge i is denoted by two integers ui and vi, the labels of vertices it connects (1 ≤ ui, vi ≤ n, ui ≠ vi).

It is guaranteed that the given edges form a tree.

The next m lines describe queries. The i-th line describes the i-th query and starts with the integer ki (1 ≤ ki ≤ n) — the number of vertices in the current query. Then ki integers follow: vi[1],vi[2],…,vi[ki] (1 ≤ vi[j] ≤ n), where vi[j] is the j-th vertex of the i-th query.

It is guaranteed that all vertices in a single query are distinct.

It is guaranteed that the sum of ki does not exceed 2⋅10<sup>5</sup> 

OUTPUT

For each query, print the answer — "YES", if there is a path from the root to some vertex u such that each of the given k vertices is either belongs to this path or has the distance 1 to some vertex of this path and "NO" otherwise.

### SAMPLE INPUT
```
10 6
1 2
1 3
1 4
2 5
2 6
3 7
7 8
7 9
9 10
4 3 8 9 10
3 2 4 6
3 2 1 5
3 4 8 2
2 6 10
3 5 4 7
```
### SAMPLE OUTPUT
```
YES
YES
YES
YES
NO
NO 
```

**Note**\
The picture corresponding to the example:\
![alt text](https://user-images.githubusercontent.com/16334391/77981162-58e2b400-7333-11ea-9cee-2d7968aec7ae.png) \
Consider the queries.

The first query is [3,8,9,10]. The answer is "YES" as you can choose the path from the root 1 to the vertex u=10. Then vertices [3,9,10] belong to the path from 1 to 10 and the vertex 8 has distance 1 to the vertex 7 which also belongs to this path.

The second query is [2,4,6]. The answer is "YES" as you can choose the path to the vertex u=2. Then the vertex 4 has distance 1 to the vertex 1 which belongs to this path and the vertex 6 has distance 1 to the vertex 2 which belongs to this path.

The third query is [2,1,5]. The answer is "YES" as you can choose the path to the vertex u=5 and all vertices of the query belong to this path.

The fourth query is [4,8,2]. The answer is "YES" as you can choose the path to the  vertex u=9 so vertices 2 and 4 both have distance 1 to the vertex 1 which belongs to this path and the vertex 8 has distance 1 to the vertex 7 which belongs to this path.

The fifth and the sixth queries both have answer "NO" because you cannot choose suitable vertex u.
## <b style="color:MediumSpringGreen">LONGEST - 250 POINTS</b>

Time limit per test: 4 seconds \
Memory limit per test: 256 megabytes \
Input: standard input \
Output: standard output 

Given a tree. Find the longest distance between two vertices of the tree. 

INPUT
+ The first line of the input contains only integers N(2≤N≤10<sup>6</sup>) — the number of vertices in the tree and the number of queries.
+ Each of the next N−1 lines describes an edge of the tree. Edge i is denoted by two integers u_i and v_i, the labels of vertices it connects (1 ≤ u_i, v_i ≤ n, u_i ≠ v_i).
+ It is guaranteed that the given edges form a tree.
+ It is guaranteed that:
    + 50% of test N ≤ 10<sup>3</sup>
    + 100% of Test N ≤ 10<sup>6</sup>

Output:
+ Longest distance between two vertices of the tree.

### SAMPLE INPUT
```
10
1 2
2 3
4 5
2 5
2 6
6 7
6 8
6 9
9 10
```

### SAMPLE OUTPUT
```
5
```

### NOTE
Longest distance is between 10 and 4: 10 - 9 - 6 - 2 - 5 - 4

![Graph](./image/LONGEST.png)

---