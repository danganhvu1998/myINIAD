import toposort

print(list(toposort.toposort({
	'D' : {'A'},
	'E' : {'B'},
	'F' : {'B', 'C'},
	'G' : {'D', 'E'},
	'H' : {'G', 'F'}
	})))