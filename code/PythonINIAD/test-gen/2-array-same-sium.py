import math
import random

def gen_arr(length, sum):
    arr = []
    for i in range(length-1):
        arr.append( random.randint(sum // (length-i) * 300 // 305, min(sum // (length-i), 1000000000)))
        sum -= arr[-1]
    arr.append(sum)
    return arr

def cal_sum(arr):
    sum = 0
    for num in arr:
        sum = sum + num
    return sum

TEST_COUNT = 100
SMALL_TEST = TEST_COUNT / 2
for test_id in range(TEST_COUNT):
    in_file = open('in/input{}.txt'.format(test_id),'w')
    out_file = open('out/output{}.txt'.format(test_id),'w')
    arr_length = 1000 if test_id < SMALL_TEST else 100000
    sum = 100000 * arr_length
    while True:
        arr_a = gen_arr(arr_length, sum)
        arr_b = gen_arr(arr_length, sum)
        # increase
        arr_a[-1] = arr_a[-1] + 500000000
        arr_b[-1] = arr_b[-1] + 500000000
        
        if arr_a[-1] > 1000000000 or arr_b[-1] > 1000000000 or cal_sum(arr_a) != cal_sum(arr_b):
            continue

        temp = arr_a[-1]
        arr_a[-1] = arr_b[-1]
        arr_b[-1] = temp

        # write file
        in_file.write(f"{arr_length} {arr_length}\n")
        for num in arr_a: in_file.write(f"{num} ")
        in_file.write("\n")
        for num in arr_b: in_file.write(f"{num} ")
        out_file.write(f"{arr_a[-1]} {arr_b[-1]}\n")
        in_file.close()
        out_file.close()
        break