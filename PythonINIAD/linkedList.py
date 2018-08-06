class MyListUsingLinkedList:
	def __init__(self):
		self.link = None
		self.len = 0

	def pop(self,pos):
		prev = self
		for i in range(0,pos):
			prev = prev.link
		item = prev.link
		prev.link = item.link
		self.len -=1
		return item

	def insert(self,pos,v):
		prev = self
		for i in range(0,pos):
			prev = prev.link
		new_node = _ListEntry(v)
		new_node.link = prev.link
		prev.link = new_node;
		self.len+=1

	def __str__(self):
		node = self.link
		ret = 'HEAD-->'
		while node!= None:
			ret+=str(node.value)+'-->'
			node = node.link
		ret+='TAIL'
		return ret

class _ListEntry:
	def __init__(self,v):
		self.link = None
		self.value = v

x = MyListUsingLinkedList()
print(str(x))
for i in range(0,4):
	x.insert(0,i)
	print(str(x))

x.pop(2)
print(str(x))
x.insert(2,1)
print(str(x))