def number_to_digits(num):
    revert_digits = []
    while(num>0):
        revert_digits.append( num % 10 )
        num /= 10
    digits = revert_digits[::-1]
    return digits

def nth_digit(pos, num):
    digits = number_to_digits(num)
    if( pos > len(digits) ): return 0
    return digits[pos]

def solve_this_one(num):
    best_digit = 0
    best_digit