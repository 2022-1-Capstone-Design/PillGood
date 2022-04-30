import pandas as pd
import numpy as np


train = pd.read_csv('backend\MinMax_Pill_data.csv', header=0, index_col=0, encoding='cp949')

print(train)

def distance(x, y):
    x = x.to_numpy()
    a = np.linalg.norm(x - y)
    return a

A1 = [0, 0, 2.25, 1.43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
A2 = [0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
A4 = [0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

distance_list = []

for i in range(len(train)):
    v = distance(train.iloc[i], A1)
    distance_list.append(v)
    print(i, v)

set_distance_list = set(distance_list)
list_distance_list = list(set_distance_list)
sort_distance_list = sorted(list_distance_list)

print("")

for i in range(3):
    
    print(distance_list.index(sort_distance_list[i]), sort_distance_list[i])