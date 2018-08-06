CREATE TABLE subject (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	subject TEXT NOT NULL,
	prof_id INTEGER NOT NULL UNIQUE,
	FOREIGN KEY(prof_id) REFERENCES profs(id)
);

INSERT INTO subject(subject, prof_id) VALUES("Math", 2)
INSERT INTO subject(subject, prof_id) VALUES("English", 5)
INSERT INTO subject(subject, prof_id) VALUES("Physics", 3)

UPDATE subject SET subject="化学" WHERE id=3

DELETE FROM subject WHERE prof_id=5

SELECT class_id, count(id) FROM students GROUP BY class_id
SELECT class_id, count(id) FROM students GROUP BY class_id HAVING class_id>=3

select * from profs inner join classes on profs.id = classes.prof_id
select profs.id, profs.name, classes.id from profs inner join classes on profs.id = classes.prof_id
select profs.id, profs.name, classes.id from profs left outer join classes on profs.id = classes.prof_id



