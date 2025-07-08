import streamlit as st
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from nltk.stem.porter import PorterStemmer
import pickle

ps = PorterStemmer()
def stem(text):
    y = []
    for i in text.split():
        y.append(ps.stem(i))
    return ' '.join(y)

def unpack(l):
    L=[]
    for i in l:
        for j in i:
            L.append(j)
    return np.array(L)

df = pickle.load(open(r'C:\Users\lovku\OneDrive\Desktop\DSA\Project\item.pkl','rb'))
new_df = pickle.load(open(r'C:\Users\lovku\OneDrive\Desktop\DSA\Project\career.pkl','rb'))

qualification_list = set(unpack(df['Qualification'].values))
skill_list = set(unpack(df['Skills'].values))
interest_list = set(unpack(df['Interest'].values))
hobby_list = set(unpack(df['Hobby'].values))

st.title('Career Recomendation System')

selected_qualification = st.selectbox(
    'Enter your Qualification',
    qualification_list
)

selected_skill = st.selectbox(
    'Enter your Skill',
    skill_list
)

selected_interest = st.selectbox(
    'Enter your Interest',
    interest_list
)

selected_hobby = st.selectbox(
    'Enter your Hobby',
    hobby_list
)
tags = (selected_qualification + selected_skill + selected_interest + selected_hobby).lower()
new_df.loc[len(df)] = ['Fantacy' , 'abc' , tags]

new_df['Tags'] = new_df['Tags'].apply(stem)

cv = CountVectorizer(max_features = 200 ,stop_words = 'english')

vectors = cv.fit_transform(new_df['Tags']).toarray()

similarity = cosine_similarity(vectors)

def recomend():
    c_index = new_df[new_df['Career'] == 'Fantacy'].index[0]
    distance = similarity[c_index]
    c_list = sorted(list(enumerate(distance)),reverse=True,key=lambda x:x[1])[1:6]
    recomended_career=[]

    for i in c_list:
        recomended_career.append(new_df.iloc[i[0]].Career)
    return recomended_career

if st.button('Recomend Cource'):
    recommendations = recomend()
    for i in recommendations:
        st.write(i)