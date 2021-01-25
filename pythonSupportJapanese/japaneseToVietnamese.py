import sqlite3
connection = sqlite3.connect("collection.anki2")
cursor = connection.cursor()

def kanjiToVietnameseDict():
    kanjiDict = {}
    f = open("kanji.csv", "r")
    lines = f.readlines() 
    f.close()
    for line in lines:
        data = line.split(',')
        kanjiDict[ data[1].strip() ] = data[2].strip() + f"({data[1]}) "
    return kanjiDict

KANJI_DICT = kanjiToVietnameseDict()

def kanjiToVietnamese(kanji):
    res = ''
    for char in kanji:
        res = res + ' ' + KANJI_DICT.get(char, char)
    return res

japaneseTextFile = open("in.txt", "r")
japaneseText = japaneseTextFile.readlines()
japaneseTextFile.close
vietnameseText = ""
for line in japaneseText:
    line = line.strip()
    if not len(line): continue
    for character in line:
        vietnameseText += kanjiToVietnamese(character)
    vietnameseText += "\n" + line + "\n-------------------------------------\n"
vietnameseTextFile = open("out.txt", "w")
vietnameseTextFile.write(vietnameseText)
vietnameseTextFile.close()
