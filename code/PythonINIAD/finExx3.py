def count(s):
    result = 0;
    for c in s:  
        if(c=="e"): result+=1
    return result

print(count(""))
print(count("eeeeeeeeeeeeeee"))