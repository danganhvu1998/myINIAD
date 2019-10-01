def list_upper(xs):
  result = []
  for x in xs:
    x = x.upper()
    result.append(x)
  return result

print(list_upper(['aaa','aaa']))