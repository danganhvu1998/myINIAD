# First Round
p_pos_ill = 0.7
p_neg_nill = 0.99
p_ill = 1 / 200
p_nill = 1 - p_ill
p_pos = p_ill * p_pos_ill + ( 1 - p_neg_nill ) * p_nill
p_neg = 1 - p_pos
p_ill_and_pos = p_ill * p_pos_ill
p_ill_pos = p_ill_and_pos / p_pos
print('Possitve then ill:', p_ill_pos)
p_nill_and_neg = p_nill * p_neg_nill
p_nill_neg = p_nill_and_neg / p_neg
print('Negative then not ill:', p_nill_neg)

# Second Round
p_pos_ill = 0.7
p_neg_nill = 0.99
p_ill = 1 - p_nill_neg
p_nill = 1 - p_ill
p_pos = p_ill * p_pos_ill + ( 1 - p_neg_nill ) * p_nill
p_neg = 1 - p_pos
p_ill_and_pos = p_ill * p_pos_ill
p_ill_pos = p_ill_and_pos / p_pos
p_nill_and_neg = p_nill * p_neg_nill
p_nill_neg = p_nill_and_neg / p_neg
print('Negative then not ill:', p_nill_neg)
