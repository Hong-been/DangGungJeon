from flask import Flask, render_template, jsonify,request

from pymongo import MongoClient

client = MongoClient('mongodb://test:test@3.35.235.141', 27017)
db = client.dbDGJ

app = Flask(__name__)

import random


# Home
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/random', methods=['GET'])
def sampling():
    elements = list(db.closing_soon.find({}, {'_id': False}))
    element = random.choice(elements)
    return jsonify({'one': element})

# @app.route('/list_top10', methods=['GET'])
# def listingtop10():
#     top10 = list(db.top50.find({}, {'_id': False}))
#     return jsonify({'all_top10': top10})
#

# TOP50 카테고리
@app.route('/top50')
def top():
    return render_template('top50.html')
@app.route('/top50/list', methods=['GET'])
def listingTop50():
    top50 = list(db.top50.find({}, {'_id': False}))
    return jsonify({'all_top50': top50})

# 종료예정 카테고리
@app.route('/closing')
def closing():
    return render_template('closing_soon.html')


@app.route('/closing/list', methods=['GET'])
def listingClosing():
    closing = list(db.closing_soon.find({}, {'_id': False}))
    return jsonify({'all_closing': closing})


# 무료전시 카테고리
@app.route('/free')
def free():
    return render_template('free.html')


@app.route('/free/list', methods=['GET'])
def listingfree():
    free = list(db.free.find({}, {'_id': False}))
    return jsonify({'all_free': free})


# 온라인전시 카테고리
@app.route('/online')
def online():
    return render_template('online.html')


@app.route('/online/list', methods=['GET'])
def listingOnline():
    online = list(db.online.find({}, {'_id': False}))
    return jsonify({'all_online': online})


# About Us 카테고리
@app.route('/about_us')
def aboutUs():
    return render_template('about_us.html')

# Get modal info
@app.route('/modal', methods=['GET'])
def modal_info():
    receive = request.args.get('keyword_give')
    modal_info=db.top50.find_one({'title':receive}, {'_id':False})
    
    if modal_info is None:
        modal_info=db.online.find_one({'title':receive}, {'_id':False})

    if modal_info is None:
        modal_info=db.free.find_one({'title':receive}, {'_id':False})
        
    if modal_info is None:
        modal_info=db.closing_soon.find_one({'title':receive}, {'_id':False})

    print(receive, modal_info)
    return jsonify({'modal_info': modal_info})
    
if __name__ == '__main__':
    app.run(port=5000, debug=True)
