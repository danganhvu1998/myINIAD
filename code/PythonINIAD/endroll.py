from time import sleep

def endroll(texts):
	while(1):
		for text in texts:
			print(text)
			sleep(1)

endroll(['Halo1','Halo2','Halo3'])