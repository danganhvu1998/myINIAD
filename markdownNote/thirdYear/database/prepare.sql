CREATE TABLE "abc" (
    "employee_id"	INTEGER NOT NULL,
    "department_id"	INTEGER NOT NULL,
    "score"	INTEGER DEFAULT 0,
    PRIMARY KEY("employee_id","department_id")
    FOREIGN KEY ("employee_id") REFERENCES employee
    FOREIGN KEY ("department_id") REFERENCES department
);

CREATE TABLE affiliation (
	employee_id	VARCHAR(10) NOT NULL,
	year INTEGER NOT NULL, 
	department_id	VARCHAR(10) NOT NULL,
	PRIMARY KEY(employee_id, year),
	FOREIGN KEY(employee_id) REFERENCES employee ON DELETE CASCADE ON UPDATE NO ACTION,
	FOREIGN KEY(department_id) REFERENCES department ON DELETE CASCADE ON UPDATE NO ACTION 
);

CREATE TABLE department (
	department_id	VARCHAR(10) NOT NULL,
	department_name	VARCHAR(30),
	city	VARCHAR(30),
	PRIMARY KEY(department_id)
);

CREATE TABLE employee (
	employee_id	VARCHAR(10) NOT NULL,
	name	VARCHAR(50) NOT NULL,
	birth	INTEGER,
	salary	INTEGER,
	PRIMARY KEY(employee_id)
);

SELECT name, department_name
FROM employee 
    NATURAL JOIN affiliation 
    NATURAL JOIN department
WHERE affiliation.year = 2015;

SELECT department_name FROM department WHERE city IN ('Nagano', 'Yokohama');

INSERT INTO affiliation
SELECT employee_id, 2018, department_id
FROM affiliation WHERE year = 2017;

SELECT name, salary FROM employee WHERE birth < 1985 AND salary > 600;

SELECT employee_id, department_name 
FROM affiliation
    NATURAL JOIN department
WHERE year=2017 AND city=Osaka

SELECT name, salary
FROM employee
WHERE birth >= 1996 AND salary < 300;

UPDATE affiliation
SET department_id = 'D5'
WHERE year = 2017 AND department_id = 'D3';

SELECT name, department_name
FROM employee NATURAL JOIN affiliation NATURAL JOIN department
WHERE city = 'Tokyo' AND year = 2015

SELECT name, salary
FROM employee
WHERE 2018 - birth >= 30;

-- 4-2
SELECT DISTINCT employee_id
FROM affiliation
WHERE year IN (2015, 2016)
    AND department_id NOT IN (
        SELECT department_id FROM affiliation WHERE year=2017
    )


SELECT E1.employee_id, E2.employee_id
FROM affiliation as E1 JOIN affiliation as E2 on E1.department_id = E2.department_id
WHERE E1.employee_id > E2.employee_id AND E1.year = 2015 AND E2.year = 2015