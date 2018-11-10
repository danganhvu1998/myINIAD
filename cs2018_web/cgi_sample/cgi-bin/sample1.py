#!/usr/bin/env python
# -*- coding: utf-8 -*-

import datetime
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

t = datetime.datetime.today()

html = '<!DOCTYPE html>\n'
html += '<html>\n'
html += '<head>\n'
html += '<meta charset="UTF-8">\n'
html += '<title>CGI Sample 1</title>\n'
html += '</head>\n'
html += '<body>\n'
html += '<h1>CGI Sample 1</h1>\n'
html += '<p>LOL tin nguoi vkl</p>'
html += '<p>Current time:' + str(t.hour) + ':' + str(t.minute) + ':' + str(t.second) + '</p>\n'
html += '</body>\n'
html += '</html>\n'

print('Content-type: text/html; charset=UTF-8\n')
print(html)
