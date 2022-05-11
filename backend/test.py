import pandas as pd
import numpy as np

pill_data = pd.read_csv('Final_Pill_Standardization_Content_Dataset.csv', header=0, index_col=0, encoding='cp949')
food_data = pd.read_csv('MinMax_food_data.csv', header=0, index_col=0, encoding='cp949')
food_data = food_data.drop(['NAME'], axis=1)

# 어린이 전용 영양제 인덱스
child_pill_index = [2,33,40,50,63,69,85,87,89,106,129,142,143,148,161,164,
166,168,182,188,191,200,210,225,232,235,237,238,245,246,258,265,266,
269,271,274,296,304,308,315,343,348,350,353,376,383,386,394,395,397,
413,423,424,428,430,435,440,455,457,484,488,493,502,536,539,544,545,
594,604,614,617,621,624,639,647,648,649,665,678,679,684,701,712,725,
731,747,749,750,791,804,811,821,849,850,851,868,879,888,897,901,912,
921,933,937,946,962,974,999,1026,1030,1039,1040,1044,1061,1079,1086,
1095,1106,1107,1113,1118,1122,1126,1140,1144,1147,1173,1174,1176,1192,
1193,1195,1204,1212,1237,1240,1242,1245,1251,1258,1260,1266,1278,1281,
1286]

# 제외할 영양제 인덱스
except_list_index = [51,52,53,54,55,56,64,507,553,554,954]

# BMI 판별 메소드
def bmicalc(x):
    
    if x < 18.5:
        y = "저체중"
    elif 18.5 <= x < 23:
        y = "정상 체중"
    elif 23 <= x < 25:
        y = "과체중"
    elif 25 <= x < 35:
        y = "경도 비만"
    else:
        y = "고도 비만"
    return y

# 거리 계산 메소드
def distance(x, y):
        x = x.to_numpy()
        a = np.linalg.norm(x - y)
        return a

# 추천 메소드
def calc(vJson):
    
    # 키, 몸무게, 나이
    height = vJson['height']
    height = int(height)/100
    weight = vJson['weight']
    weight = int(weight)
    age = vJson['age']
    age = int(age)
    
    
    dict_key = []
    dict_key += vJson['세부'].keys()
    common_list_sum = np.array([0 for i in range(26)])
    BB = list(vJson['공통'].values())
    
    A = vJson['세부'].keys()
    B = [[] for i in range(len(A))]
    new_B = np.array(B)

    CC = list(vJson['세부'].values())
    
    for i in range(len(vJson['세부'].values())):
        testlist = np.array([0 for i in range(26)])
        for j in range(len(CC[i])):
            # new_CC = np.array(CC[i][j])
            testlist += CC[i][j]
        B[i].append(testlist)
        

    for i in range(len(vJson['공통'].values())):
        for j in range(len(BB[i])):
            # new_BB = np.array(BB[i][j])
            common_list_sum += BB[i][j]

    dist = [[] for i in range(len(vJson['세부'].values()))]
    
    for i in range(len(vJson['세부'].values())):
        for j in range(len(B[i])):
            dist[i].append(0.8 * (1.2 ** np.array(B[i][j] + common_list_sum)))
    # print(dist)
    vJson.pop('공통')
    
    final_list = []
    
    for i in range(len(dist)):
        A2 = list(dist[i][0])
        pill_distance_list = []
        food_distance_list = []
        A3 = list(pill_data)
        remove_list = []
        for a in range(len(A2)):
            if A2[a] == 0.8:
                remove_list.append(a)
        remove_col_name = []        

        for idx in sorted(remove_list, reverse=True):
            del A2[idx]
            remove_col_name.append(A3[idx])
            del A3[idx]
        
        new_pill_train = pill_data.drop(remove_col_name, axis=1)
        new_food_train = food_data.drop(remove_col_name, axis=1)

        # 영양제, 음식 거리 계산
        for j in range(len(pill_data)):
            v = distance(new_pill_train.iloc[j], A2)
            pill_distance_list.append(v)

        for k in range(len(food_data)):
            v = distance(new_food_train.iloc[k], A2)
            food_distance_list.append(v)
            
        # 각 영양제 거리 중복 제거 및 정렬
        set_pill_distance_list = set(pill_distance_list)
        list_pill_distance_list = list(set_pill_distance_list)
        sort_pill_distance_list = sorted(list_pill_distance_list)

        # 각 음식 거리 중복 제거 및 정렬
        set_food_distance_list = set(food_distance_list)
        list_food_distance_list = list(set_food_distance_list)
        sort_food_distance_list = sorted(list_food_distance_list)

        total_list = [] # 추천할 영양제, 음식 인덱스 리스트
        
        # 영양제 추천 부분
        if age > 20:
            for x in range(len(pill_distance_list)):
                if pill_distance_list.index(sort_pill_distance_list[x]) not in child_pill_index:
                    total_list.append(pill_distance_list.index(sort_pill_distance_list[x]))
                    
                else:
                    continue
                if len(total_list) == 3:
                    break
        else:
            for x in range(len(pill_distance_list)):
                if pill_distance_list.index(sort_pill_distance_list[x]) in child_pill_index:
                    total_list.append(pill_distance_list.index(sort_pill_distance_list[x]))
                    
                else:
                    continue
                if len(total_list) == 3:
                    break
                
        # 음식 추천 부분
        if age > 20:
            for y in range(len(food_distance_list)):
                if food_distance_list.index(sort_food_distance_list[y]) not in child_pill_index:
                    total_list.append(food_distance_list.index(sort_food_distance_list[y]))
                    
                else:
                    continue
                if len(total_list) == 6:
                    break
        else:
            for y in range(len(food_distance_list)):
                if food_distance_list.index(sort_food_distance_list[y]) in child_pill_index:
                    total_list.append(food_distance_list.index(sort_food_distance_list[y]))
                    
                else:
                    continue
                if len(total_list) == 6:
                    break
                
        final_list.append(total_list)
    
    # 각 카테고리 별 영양제 인덱스 전달
    count = 0
    for i in dict_key:
        vJson['세부'][i] = final_list[count]
        count += 1
        
    # BMI 계산 후 딕셔너리 추가    
    BMI = weight / (height * height)
    bmi_list = []
    bmi_string = bmicalc(BMI)
    bmi_list.append(BMI)
    bmi_list.append(bmi_string)
    vJson['세부']['BMI'] = bmi_list
    
    return vJson['세부']
