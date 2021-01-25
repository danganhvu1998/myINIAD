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
        kanjiDict[ data[1].strip() ] = data[2].strip()
    return kanjiDict

KANJI_DICT = kanjiToVietnameseDict()

def kanjiToVietnamese(kanji):
    res = ''
    for char in kanji:
        res = res + ' ' + KANJI_DICT.get(char, char)
    print(res)
    return res

rows = cursor.execute("SELECT id, flds, sfld FROM notes WHERE tags LIKE '%Favorites%'").fetchall()
print(len(rows))
for row in rows:
    fields = row[1].split('\x1f')
    if( fields[2].startswith('vn') ): continue
    fields[2] = 'vn: {} <br> {}'.format(kanjiToVietnamese(row[2]), fields[2])
    res = ''
    for field in fields:
        res = res + field + '\x1f'
    cmd =  "update notes SET flds = `{}` where id={}".format(res, row[0]).replace('"', "").replace("'", "").replace("`", "'")

    print(cmd)
    cursor.execute(cmd)
connection.commit()
