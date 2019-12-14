#!/usr/bin/python3

#
# This program is vulnerable; do not use it in real!
#

from flask import Flask, request
from subprocess import Popen, PIPE

app = Flask(__name__)

@app.route("/")
def fortune():
    cmd = "/usr/games/fortune"
    if request.args.get('q'):
        cmd += " -m {}".format(request.args.get('q'))
    print(cmd)
    html = "<html><head><title>test</title></head><body><pre>{}</pre></body></html>"
    p = Popen(cmd, shell=True, stdout=PIPE, stderr=PIPE)
    out, err = p.communicate()
    return html.format(out.decode('utf-8'))

app.run(host='127.0.0.1')