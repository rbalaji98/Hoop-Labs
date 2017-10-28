# -*- coding: utf-8 -*-
"""
Created on Sat Oct 28 12:40:24 2017

@author: rohan
"""


import pandas as pd
from sklearn import tree
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import mean_squared_error
from sklearn.externals.six import StringIO
from sklearn import svm
import numpy as np



df = pd.read_csv('ncaa_games_2016.csv')
df2 = pd.read_csv('ncaa_games_2015.csv')

df['location'] = (df['location'] == 'Home').astype(int)
df['w/l'] = (df['team_score']>df['opponent_score']).astype(int)
'''
df = df.drop('team_name', 1)
df = df.drop('opponent_name', 1)
df = df.drop('game_date',1)
df = df.drop('attendance',1)
df =  df.drop('game_length',1)
'''

df2['location'] = (df2['location'] == 'Home').astype(int)
df2['w/l'] = (df2['team_score']>df2['opponent_score']).astype(int)
'''
df2 = df2.drop('team_name', 1)
df2 = df2.drop('opponent_name', 1)
df2 = df2.drop('game_date',1)
df2 =  df2.drop('attendance',1)
df2 =  df2.drop('game_length',1)
'''


#df = df.dropna()
#df2 = df2.dropna()

df = df[['team_name','opponent_name','team_score','opponent_score','w/l']]
df2 = df2[['team_name','opponent_name','team_score','opponent_score','w/l']]

teamlist = set([])


for i in range(len(df['team_name'])):
    teamlist.add(df['team_name'][i])  
for i in range(len(df2['team_name'])):
    teamlist.add(df2['team_name'][i])
for i in range(len(df['opponent_name'])):
    teamlist.add(df['opponent_name'][i])  
for i in range(len(df2['opponent_name'])):
    teamlist.add(df2['opponent_name'][i])  
    
teamlist = list(teamlist)

teamid = []
teamid2= []

for i in range(len(df['team_name'])):
    teamid.append(teamlist.index(df['team_name'][i]))
    
for i in range(len(df2['team_name'])):
    teamid2.append(teamlist.index(df2['team_name'][i]))
    
df['team_id'] = teamid
df2['team_id'] = teamid2

oppid = []
oppid2= []

for i in range(len(df['opponent_name'])):
    oppid.append(teamlist.index(df['opponent_name'][i]))
    
for i in range(len(df2['opponent_name'])):
    oppid2.append(teamlist.index(df2['opponent_name'][i]))
    
df['opponent_id'] = oppid
df2['opponent_id'] = oppid2



print(len(teamlist))

print(df['team_id'])

print(df2['team_id'])
'''
df_X = np.asarray(df)
df_Y = np.asarray(df['w/l'])


df_XT = np.asarray(df2)
df_YT = np.asarray(df2['w/l'])



score_array = []

for _ in range(5):
    ols_har = LinearRegression()
    ols_har.fit(df_X, df_Y)
    score_array.append(ols_har.score(df_XT, df_YT))

score_average = np.array(score_array).mean()
print('Linear Regression Accuracy: ' + str(score_average))


har_tree = tree.DecisionTreeClassifier()
har_tree = har_tree.fit(df_X, df_Y)

print('Decision Tree Accuracy: '+str(har_tree.score(df_XT, df_YT)))

with open("decision_tree_depth2.dot", 'w') as f:
       f = tree.export_graphviz(har_tree, out_file=f)


har_RF = RandomForestClassifier(n_jobs = 2)
har_RF = har_RF.fit(df_X , df_Y.ravel())

print('Random Forest Accuracy :' + str(har_RF.score(df_XT, df_YT)))
'''





