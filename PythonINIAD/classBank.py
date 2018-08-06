class Bank:
	def __init__(self, amounts):
		self.amounts = amounts.copy()
		self.record = {}
		for key in amounts:
			self.record[key] = 'Account of '+ key + ' is created\n'

	def recordFunc(self, sender, receiver, yen):
		self.record[receiver] += sender+ " sent " + receiver +" "+str(yen)+".\n\t Current money: "+str(self.amounts[receiver])+"\n"
		self.record[sender] += sender+ " sent " + receiver +" "+str(yen)+"\n\t Current money: "+str(self.amounts[sender])+"\n"

	def transfer(self, sender, receiver, yen):
		self.amounts[sender] -= yen
		self.amounts[receiver] += yen
		self.recordFunc(sender, receiver, yen)

	def charge(self, account, yen):
		self.amounts[account] += yen
		self.recordFunc(account, account, yen)

	def balance(self, account):
		print(self.amounts[account])

	def checkall(self):
		print(self.amounts)

	def getHistory(self,account):
		print(self.record[account].strip())

	def transferFrom(self, anoBank, anoBackAcc, account, yen):
		self.amounts[account]+=yen
		anoBank.amounts[anoBackAcc]-=yen

bankA = Bank({
	'enryo' : 500000,
	'aki' : 8000,
	'mike' : 900})

bankB = Bank({
	'toyo' : 100000,
	'iniad' : 10000
	})

bankA.transfer('enryo', 'aki', 10000)
bankA.transfer('aki', 'mike', 10000)
bankA.getHistory('enryo')
bankA.getHistory('aki')
bankA.getHistory('mike')