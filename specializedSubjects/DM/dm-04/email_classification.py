p_r_a = 2 / 10
p_sw_a = 2 / 10
p_so_a = 1 / 10
p_a = p_r_a * p_sw_a * p_so_a * 1/3
print('AP', p_a)
p_r_s = 2 / 10
p_sw_s = 3 / 10
p_so_s = 2 / 10
p_s = p_r_s * p_sw_s * p_so_s * 1/3
print('SB', p_s)
p_r_o = 1 / 10
p_sw_o = 2 / 10
p_so_o = 2 / 10
p_o = p_r_o * p_sw_o * p_so_o * 1/3
print('OR', p_o)
total = p_a + p_s + p_o
print('Apple', p_a / total)
print('Strawberry', p_s / total)
print('Orrage', p_o / total)
