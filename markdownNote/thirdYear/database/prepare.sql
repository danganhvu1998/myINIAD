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