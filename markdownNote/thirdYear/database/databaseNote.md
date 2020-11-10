# Symbol 

+ `⊆`: Subset
+ `∪`: Union
+ `∩`: Intersec
+ `-`: Different
  + {1, 2, 3, 4, 5} - {1, 3, 4, 6} = {2, 5}
+ `δ`: Rename
  + ![err][data00]
+ `σ`: Condition (WHERE)
  + ![err][data01]
+ `^`: And
+ `¬`: Not
+ `∨`: Or
+ `π`: Projection (SELECT)
  + ![err][data03]
+ `x`: Production (CROSS JOIN)
+ `⋈`: Natural Join
  + ![err][data02]
  + JOIN with conditon (ON)
    + ![err][data04] 
+ `÷`: Division
  + ![err][data05] 
+ SUMUP
  + ![err][data06] 
  + ![err][data07] 

# Note

+ Foreign Key
  + `grade.student_id` ⊆ `student.student_id`: `student_id` is `foreign key` of `grade`
  + `employee.boss` ⊆ `employee.employee_id`
+ Natual Join
  + When 2 table have same column, natual join can automatically happen
+ Create Table
  + ```sql
        CREATE TABLE "student" (
            "student_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
            "name"	TEXT NOT NULL,
            "city"	TEXT NOT NULL
        );
    ```
+ Insert
  + ```sql
        INSERT INTO student (student_id, name, city) VALUES (10, 'abc', 'cde')
    ```
+ Select + Join
  + ```sql
        SELECT [DISTINCT | ALL] [ATTRIBUTE_NAME] AS [DIFF_NAME]
        FROM [TABLE_NAME]
        JOIN [OTHER_TABLE_NAME] ON [JOIN CONDITION]
        WHERE [CONDITION];

        SELECT F.student_id, S.student_id
        FROM student as F
        JOIN student as S on F.city = S.city
            AND F.student_id < S.student_id
        WHERE F.city = 'Tokyo';
    ```
+ Union
  + ![err][data08] 
+ Intersection
  + ![err][data09] 
+ Difference
  + ![err][data10] 
+ Update
  + ```sql
        UPDATE student
        SET 'name'='ABC',
            'city'='CDE',
            'student_id'='student_id'*2
        WHERE student_id = 1;
    ```
+ Delete
  + ```sql
        DELETE FROM  student
        WHERE student_id = 1;
    ```
+ Subquery **IMPORTANT**
  + https://moocs.iniad.org/courses/2020/DS106/05/05-06
  + 

[data00]: ./../image/data00.png
[data01]: ./../image/data01.png
[data02]: ./../image/data02.png
[data03]: ./../image/data03.png
[data04]: ./../image/data04.png
[data05]: ./../image/data05.png
[data06]: ./../image/data06.png
[data07]: ./../image/data07.png
[data08]: ./../image/data08.png
[data09]: ./../image/data09.png
[data10]: ./../image/data10.png
[data11]: ./../image/data11.png
[data12]: ./../image/data12.png
[data13]: ./../image/data13.png
[data14]: ./../image/data14.png
[data15]: ./../image/data15.png
[data16]: ./../image/data16.png
[data17]: ./../image/data17.png
[data18]: ./../image/data18.png
[data19]: ./../image/data19.png
[data20]: ./../image/data20.png
[data21]: ./../image/data21.png
[data22]: ./../image/data22.png
[data23]: ./../image/data23.png
[data24]: ./../image/data24.png
[data25]: ./../image/data25.png
[data26]: ./../image/data26.png
[data27]: ./../image/data27.png
[data28]: ./../image/data28.png
[data29]: ./../image/data29.png
[data30]: ./../image/data30.png
[data31]: ./../image/data31.png
[data32]: ./../image/data32.png
[data33]: ./../image/data33.gif
[data34]: ./../image/data34.png
[data35]: ./../image/data35.png
[data36]: ./../image/data36.png
[data37]: ./../image/data37.png
[data38]: ./../image/data38.png
[data39]: ./../image/data39.png
[data40]: ./../image/data40.png
[data41]: ./../image/data41.png
[data42]: ./../image/data42.png
[data43]: ./../image/data43.png
[data44]: ./../image/data44.png
[data45]: ./../image/data45.png
[data46]: ./../image/data46.png
[data47]: ./../image/data47.png
[data48]: ./../image/data48.png
[data49]: ./../image/data49.png
[data50]: ./../image/data50.png
[data51]: ./../image/data51.png
[data52]: ./../image/data52.png
[data53]: ./../image/data53.png
[data54]: ./../image/data54.png
[data55]: ./../image/data55.png
[data56]: ./../image/data56.png
[data57]: ./../image/data57.png
[data58]: ./../image/data58.png
[data59]: ./../image/data59.png
[data60]: ./../image/data60.png
[data61]: ./../image/data61.png
[data62]: ./../image/data62.png
[data63]: ./../image/data63.png
[data64]: ./../image/data64.png
[data65]: ./../image/data65.png
[data66]: ./../image/data66.png
[data67]: ./../image/data67.png
[data68]: ./../image/data68.png
[data69]: ./../image/data69.png
[data70]: ./../image/data70.png
