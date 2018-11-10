#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random
import io,sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

html = '<!DOCTYPE html>\n'
html += '<html>\n'
html += '<head>\n'
html += '<meta charset="UTF-8">\n'
html += '<title>CGI Sample 4</title>\n'
html += '</head>\n'
html += '<body>\n'
#
#
html += '<p>Random: '+str(random.randint(0,9))+'</p>'
html += '</body>\n'
html += '</html>\n'

print('Content-type: text/html; charset=UTF-8\n')
print(html)
