#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sqlite3
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

dbname = 'cgi-bin/sample.db'
sql = 'select * from content'
conn = sqlite3.connect(dbname)
c = conn.cursor()
c.execute(sql)
result = c.fetchall()
conn.close()

html = '<!DOCTYPE html>\n'
html += '<html>\n'
html += '<head>\n'
html += '<meta charset="UTF-8">\n'
html += '<title>CGI Sample 3</title>\n'
html += '</head>\n'
html += '<body>\n'
html += '<h1>CGI Sample 3</h1>\n'
html += '<table>\n'
html += '<tr>\n'
html += '<th>Title</th>\n'
html += '<th>Author</th>\n'
html += '<th>Text</th>\n'
html += '</tr>\n'

for row in result:
    html += '<tr>\n'
    html += '<td>' + row[1] + '</td>\n'
    html += '<td>' + row[2] + '</td>\n'
    html += '<td>' + row[3] + '</td>\n'
    html += '</tr>'

html += '</table>\n'
html += '</body>\n'
html += '</html>\n'

print('Content-type: text/html; charset=UTF-8\r\n')
print(html)
