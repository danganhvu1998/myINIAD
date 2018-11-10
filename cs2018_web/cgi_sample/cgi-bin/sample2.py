#!/usr/bin/env python
# -*- coding: utf-8 -*-

import cgi
import sqlite3
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

form = cgi.FieldStorage()
title = form.getvalue('title','')
author = form.getvalue('author','')
text = form.getvalue('text','')

dbname = 'cgi-bin/sample.db'
sql = 'insert into content(title, author, text) values("' + title + '","' + author + '","' + text + '")'
conn = sqlite3.connect(dbname)
c = conn.cursor()
c.execute(sql)
conn.commit()
conn.close()

html = '<!DOCTYPE html>\n'
html += '<html>\n'
html += '<head>\n'
html += '<meta charset="UTF-8">\n'
html += '<title>CGI Sample 2</title>\n'
html += '</head>\n'
html += '<body>\n'
html += '<h1>CGI Sample 2</h1>\n'
html += '<table>\n'
html += '<tr>\n'
html += '<th>Title</th>\n'
html += '<td>' + title + '</td>\n'
html += '</tr>\n'
html += '<tr>\n'
html += '<th>Author</th>\n'
html += '<td>' + author + '</td>\n'
html += '</tr>\n'
html += '<tr>\n'
html += '<th>Text</th>\n'
html += '<td>' + text + '</td>\n'
html += '</tr>\n'
html += '</table>\n'
html += '</body>\n'
html += '</html>\n'

print('Content-type: text/html; charset=UTF-8\r\n')
print(html)
