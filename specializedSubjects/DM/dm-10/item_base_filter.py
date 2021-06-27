import numpy as np
import pandas as pd

csv_in = '/home/anhvu/gitRepo/myINIAD/specializedSubjects/DM/dm-10/sushi_corr-min4.csv'
min_common_items = 4
similarity = "pearson2"
df = pd.read_csv(csv_in, delimiter=',', skiprows=0, header=0)
df.index = df.columns
print(df.shape)
print(df.info())
if similarity == "pearson2":
    df = (df + 1) / 2
print(df.shape)
print(df.info())

def predict_scores(df_sim, ser_target):
    ret = {}
    for item1 in df_sim.index:  # not yet rated by the target user
        v1 = df_sim.loc[item1]
        #if v1.isnull().sum() > 0:  # debug
        #    print('v1:',v1)  # debug
        if v1.notnull().sum() < min_common_items: continue
        v11 = v1[ v1.notnull() ]
        t11 = ser_target[ v1.notnull() ]
        pred1 = (v11 * t11).sum() / np.abs(v11).sum()
        # print('v11:',v11)  # debug
        # print('t11:',t11)  # debug
        # print('pred1:',pred1)  # debug
        ret[item1] = pred1
    
    ser_ret = pd.Series(ret)
    
    return ser_ret.sort_values(ascending=False)
def get_recomm_by_item_sim(df, target_dic):
    ser_target = pd.Series(target_dic)
    #print(target_dic)  # debug
    print(ser_target)  # debug
    # make dataframe with columns included in target_dic
    #print(df.shape)  # debug
    df_scores = df[ ser_target.index ]
    # print(df_scores.shape)  # debug
    # drop rows included in target_dic (already rated)
    df_scores = df_scores.drop(index=ser_target.index)
    print(df_scores.shape)  # debug
    recomm = predict_scores(df_scores, ser_target)
    
    return recomm

recomm = get_recomm_by_item_sim(df,
                                {'maguro':1, 'ika':1, 'uni':3,
                                 'awabi':4, 'hirame':4, 'aoyagi':4})
print('Number of items calculated:', len(recomm))
print('Recommendation:')
print(recomm.head())

recomm = get_recomm_by_item_sim(df,
                                {'anago': 3, 'maguro': 4, 'ikura': 3,
                                 'hamachi': 4, 'samon': 4, 'unagi': 3,
                                 'suzuki': 2, 'hamo': 1, 'nasu': 1,
                                 'shiso_maki': 2})
print('Number of items calculated:', len(recomm))
print('Recommendation:')
print(recomm.head())



