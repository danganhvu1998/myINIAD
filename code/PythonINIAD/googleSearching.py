import webbrowser

def google(str):
	str = "https://www.google.com?q="+str
	webbrowser.open(str)	


#webbrowser.open("https://www.google.com/")
google("python")