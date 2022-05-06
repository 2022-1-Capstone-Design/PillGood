import sys
import base64
import io
import json
import numpy as np
import pandas as pd
'''
pill_train = pd.read_csv('MinMax_Pill_data.csv', header=0, index_col=0, encoding='cp949')

def distance(x, y):
    x= x.to_numpy()
    a = np.linalg.norm(x-y)
    return a

A1 = [0, 0, 2.25, 1.43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

distance_list = []

for i in range(len(pill_train)):
    v = distance(pill_train.iloc[i], A1)
    distance_list.append(v)
'''

if __name__ == "__main__":
    
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')
    vString = sys.argv[1]
    vJson = json.loads(vString)
    print("dict = ", vJson)
    