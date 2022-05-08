import pandas as pd
import numpy as np


def calc(vJson):
    pill_train = pd.read_csv('Final_Pill_Standardization_Content_Dataset.csv', header=0, index_col=0, encoding='cp949')
    food_train = pd.read_csv('MinMax_food_data.csv', header=0, index_col=0, encoding='cp949')
    food_train = food_train.drop(['NAME'], axis=1)

    dict_key = []
    dict_key += vJson['세부'].keys()
    print(dict_key)
    AA = np.array([0 for i in range(26)])
    BB = list(vJson['공통'].values())
    
    A = vJson['세부'].keys()
    B = [[] for i in range(len(A))]
    new_B = np.array(B)

    CC = list(vJson['세부'].values())
    
    for i in range(len(vJson['세부'].values())):
        testlist = np.array([0 for i in range(26)])
        for j in range(len(CC[i])):
            new_CC = np.array(CC[i][j])
            testlist += CC[i][j]
        B[i].append(testlist)
        

    for i in range(len(vJson['공통'].values())):
        for j in range(len(BB[i])):
            new_BB = np.array(BB[i][j])
            AA += BB[i][j]

    dist = [[] for i in range(len(vJson['세부'].values()))]

    for i in range(len(vJson['세부'].values())):
        for j in range(len(B[i])):
            dist[i].append(0.7 * (1.3 ** np.array(B[i][j] + AA)))

    def distance(x, y):
        x = x.to_numpy()
        a = np.linalg.norm(x - y)
        return a


    vJson.pop('공통')

    final_list = []
    
    for i in range(len(dist)):
        A2 = list(dist[i][0])
        pill_distance_list = []
        food_distance_list = []

        for j in range(len(pill_train)):
            v = distance(pill_train.iloc[j], A2)
            pill_distance_list.append(v)

        for k in range(len(food_train)):
            v = distance(food_train.iloc[k], A2)
            food_distance_list.append(v)

        set_pill_distance_list = set(pill_distance_list)
        list_pill_distance_list = list(set_pill_distance_list)
        sort_pill_distance_list = sorted(list_pill_distance_list)

        set_food_distance_list = set(food_distance_list)
        list_food_distance_list = list(set_food_distance_list)
        sort_food_distance_list = sorted(list_food_distance_list)

        total_list = []

        for x in range(3):
            total_list.append(pill_distance_list.index(sort_pill_distance_list[x]))

        for y in range(3):
            total_list.append(food_distance_list.index(sort_food_distance_list[y]))

        final_list.append(total_list)
    
    count = 0
    
    for i in dict_key:
        vJson['세부'][i] = final_list[count]
        count += 1
    
    return vJson