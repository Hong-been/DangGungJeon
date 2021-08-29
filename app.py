from flask import Flask, render_template, jsonify

from pymongo import MongoClient
client = MongoClient('mongodb://test:test@3.35.235.141', 27017)
db = client.dbDGJ

app = Flask(__name__)

# <<<<<<< HEAD
<<<<<<< HEAD

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient

client = MongoClient('mongodb://test:test@13.125.33.170', 27017)
db = client.dbDGJ

# =======
from pymongo import MongoClient
client = MongoClient('mongodb://test:test@13.125.33.170', 27017)
db = client.dbDGJ

=======
# 여기
import requests
from bs4 import BeautifulSoup

# 여기
# =======
# from pymongo import MongoClient
# client = MongoClient('mongodb://test:test@13.125.33.170', 27017)
# db = client.dbDGJ
# # 여기
# import requests
# from bs4 import BeautifulSoup
#
# from pymongo import MongoClient
# client = MongoClient('localhost', 27017)
# db = client.dbsparta
#
#
# @app.route('/free', methods=['GET'])
# def listing():
#     free = list(db.free.find({}, {'_id': False}))
# return jsonify({'all_free': free})
#
#
# ## API 역할을 하는 부분
# @app.route('/free', methods=['POST'])
# def saving():
#     free_img_receive = request.form['free_img_give']
#     free_name_receive = request.form['free_name_give']
#
#     # 크롤링 한 데이터(지금은 메모장 넣어둠)
#
#     url_receive = request.form['url_give']
#     comment_receive = request.form['comment_give']
#
#     headers = {
#         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
#     data = requests.get(url_receive, headers=headers)
#
#     soup = BeautifulSoup(data.text, 'html.parser')
#
#     title = soup.select_one('meta[property="og:title"]')['content']
#     image = soup.select_one('meta[property="og:image"]')['content']
#     desc = soup.select_one('meta[property="og:description"]')['content']
#
#     # 인서트
#
#     doc = {
#         'title': title,
#         'image': image,
#         'desc': desc,
#         'url': url_receive,
#         'comment': comment_receive
#     }
#
#     db.free.insert_one(doc)
#
#
# return jsonify({'msg': 'POST 연결되었습니다!'})
#
#
# # 여기
>>>>>>> 3a713109aea07980d60f08074de4a65691fc5a4a
# >>>>>>> 980432a3bb54cb81ba4016fa0486de58b81685ba

# Home
@app.route('/')
def home():
    return render_template('index.html')


# TOP50 카테고리
@app.route('/top50')
def top():
    return render_template('top50.html')


# 종료예정 카테고리
@app.route('/closing')
def closing():
    return render_template('closing_soon.html')

@app.route('/list_Closing', methods=['GET'])
def listingClosing():
    closing = list(db.closing_soon.find({}, {'_id': False}))
    return jsonify({'all_closing': closing})

# 무료전시 카테고리
@app.route('/free')
def free():
    return render_template('free.html')


# 온라인전시 카테고리
@app.route('/online')
def online():
    return render_template('online.html')

@app.route('/list_online', methods=['GET'])
def listingOnline():
    online = list(db.online.find({}, {'_id': False}))
    return jsonify({'all_online': online})

# About Us 카테고리
@app.route('/about_us')
def aboutUs():
    return render_template('about_us.html')


if __name__ == '__main__':
    app.run(port=5000, debug=True)
