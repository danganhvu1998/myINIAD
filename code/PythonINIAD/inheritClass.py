class myStr(str):
    def first(self):
        return self[0]

string = myStr("haha")
print(string.first())

