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
from sklearn.model_selection import train_test_split
from sklearn import svm
import numpy as np
from collections import Counter

'''

<<<<<<< HEAD
df = pd.read_csv('2014.csv')
df2 = pd.read_csv('2016.csv')
=======

<<<<<<< HEAD
df = pd.read_csv('2012.csv')
>>>>>>> e302a07ec82d03939234f3972aacd63b1b221402

=======
df = pd.read_csv('data2012.csv')

'''

df_game = pd.DataFrame()

k = 0
'''
df['W/L'] = (df['W/L'] == 'W').astype(int)
df['MATCHUP']

for i in df.index:
    a = df.loc[i,'MATCHUP']
    b = df.loc[i, 'DATE']

    for j in df.index:
       
       match = df.loc[j,'MATCHUP']
       date = df.loc[j, 'DATE']
       
       if(b == date):
           if(a[0:2] == match[6:8]):
               
               
               df_game.loc[k, 'MATCHUP'] = df.loc[j, 'MATCHUP']
               df_game.loc[k,'PTS'] = df.loc[j, 'PTS'] - df.loc[i, 'PTS']
               df_game.loc[k,'FG%'] = df.loc[j, 'FG%'] - df.loc[i, 'FG%']
               df_game.loc[k,'3P%'] = df.loc[j, '3P%'] - df.loc[i, '3P%']
               df_game.loc[k,'FT%'] = df.loc[j, 'FT%'] - df.loc[i, 'FT%']
               df_game.loc[k,'OREB'] = df.loc[j, 'OREB'] - df.loc[i, 'OREB']
               df_game.loc[k,'DREB'] = df.loc[j, 'DREB'] - df.loc[i, 'DREB']
               df_game.loc[k,'AST'] = df.loc[j, 'AST'] - df.loc[i, 'AST']
               df_game.loc[k,'OREB'] = df.loc[j, 'OREB'] - df.loc[i, 'OREB']
               df_game.loc[k,'DREB'] = df.loc[j, 'DREB'] - df.loc[i, 'DREB']
               df_game.loc[k,'AST'] = df.loc[j, 'AST'] - df.loc[i, 'AST']
               df_game.loc[k,'STL'] = df.loc[j, 'STL'] - df.loc[i, 'STL']
               df_game.loc[k,'BLK'] = df.loc[j, 'BLK'] - df.loc[i, 'BLK']
               df_game.loc[k,'TOV'] = df.loc[j, 'TOV'] - df.loc[i, 'TOV']
               df_game.loc[k,'PF'] = df.loc[j, 'PF'] - df.loc[i, 'PF']
               
               k += 1
               
               df_game.loc[k, 'MATCHUP'] = df.loc[i, 'MATCHUP']
               df_game.loc[k,'PTS'] = df.loc[i, 'PTS'] - df.loc[j, 'PTS']
               df_game.loc[k,'FG%'] = df.loc[i, 'FG%'] - df.loc[j, 'FG%']
               df_game.loc[k,'3P%'] = df.loc[i, '3P%'] - df.loc[j, '3P%']
               df_game.loc[k,'FT%'] = df.loc[i, 'FT%'] - df.loc[j, 'FT%']
               df_game.loc[k,'OREB'] = df.loc[i, 'OREB'] - df.loc[j, 'OREB']
               df_game.loc[k,'DREB'] = df.loc[i, 'DREB'] - df.loc[j, 'DREB']
               df_game.loc[k,'AST'] = df.loc[i, 'AST'] - df.loc[j, 'AST']
               df_game.loc[k,'OREB'] = df.loc[i, 'OREB'] - df.loc[j, 'OREB']
               df_game.loc[k,'DREB'] = df.loc[i, 'DREB'] - df.loc[j, 'DREB']
               df_game.loc[k,'AST'] = df.loc[i, 'AST'] - df.loc[j, 'AST']
               df_game.loc[k,'STL'] = df.loc[i, 'STL'] - df.loc[j, 'STL']
               df_game.loc[k,'BLK'] = df.loc[i, 'BLK'] - df.loc[j, 'BLK']
               df_game.loc[k,'TOV'] = df.loc[i, 'TOV'] - df.loc[j, 'TOV']
               df_game.loc[k,'PF'] = df.loc[i, 'PF'] - df.loc[j, 'PF']
               

               k += 1
              
                
df_game.to_csv('data2014.csv')

         
    
<<<<<<< HEAD
''''

df = pd.read_csv('data2015.csv')

myList = []
myDict = dict(Counter(df['MATCHUP']))
for key in myDict:
     myList.append(key)
#print(myList)
myList = list(set(myList))
for i in df.index:
                
     df.loc[i, 'MATCHUP'] = myList.index(df.loc[i, 'MATCHUP'])
     










