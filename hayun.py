from flask import Flask, render_template, jsonify
from flask.wrappers import Request
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup



# Home
@app.route('/')
def home():
    return render_template('index.html')

# TOP50 카테고리
@app.route('/top50', method ="GET")
def top():
    top50_receive = Request.args.get('Top50_give')
    print('top50_receive')
    return jsonify({'msg':'Get 연결'})

#종료임박 카테고리 
@app.route('/closing')
def closing():
    return render_template('closing_soon.html')

# 무료전시 카테고리
@app.route('/free')
def free():
    return render_template('free.html')

# 온라인전시 카테고리
@app.route('/online')
def online():
    return render_template('online.html')

# About Us 카테고리
@app.route('/about_us')
def aboutUs():
    return render_template('about_us.html')

if __name__ == '__main__':
    app.run('0.0.0.0',port=5500,debug=True)