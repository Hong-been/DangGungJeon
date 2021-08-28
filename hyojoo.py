# # 여기
# import requests
# from bs4 import BeautifulSoup
#
# from pymongo import MongoClient
#
# client = MongoClient('mongodb://test:test@13.125.33.170', 27017)
# db = client.dbDGJ
#
#
# ## API 역할을 하는 부분
# @app.route('/online', methods=['GET'])
# def listing():
#     online = list(db.online.find({}, {'_id': False}))
#     return jsonify({'all_onlines':online})
#
# # 여기
