# <랭킹>
from flask import Flask, render_template
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.DangGungJeon

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}

from selenium import webdriver

from bs4 import BeautifulSoup


driver = webdriver.Chrome(r'/Users/San/Desktop/git/Dang-Gung-Jeon/chromedriver')
# 인터파크
url = ('http://ticket.interpark.com/TPGoodsList.asp?Ca=Eve&SubCa=Eve_O&Sort=3')
driver.get(url)
# 페이지 따왔을때 http://가없어서 추가..
pages = driver.find_elements_by_css_selector('.fw_bold a')
for page in pages :
    page = page.get_attribute('href')

requests = driver.page_source
soup = BeautifulSoup(requests,'html.parser')
trs = soup.select('body > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div.con > div > table > tbody > tr')
# 데이터 가져오기
for tr in trs :
    image = tr.select_one('td.RKthumb > a > img')['src']                                  # 이미지
    title = tr.select_one('td.RKtxt > span > a').text                                     # 전시제목
    location = tr.select_one('td:nth-child(3) > a').text                                  # 장소
    date = tr.select_one('td:nth-child(4)').text.replace('\n', '').replace('\t', '')      # 날짜
    page = page                                                                           # 상세페이지
    print(image, title, location, date, page)


 # DB에 저장
    doc = {
        'title': title,
        'date' : date,
        'location' : location,
        'page' : page,
        'image' : image
    }
    db.interpark.insert_one(doc)

# <종료임박>

# 인터파크
url = ('http://ticket.interpark.com/TPGoodsList.asp?Ca=Eve&SubCa=Eve_O&Sort=5')
driver.get(url)
# 페이지 따왔을때 http://가없어서 추가..
pages = driver.find_elements_by_css_selector('.fw_bold a')
for page in pages :
    page = page.get_attribute('href')

requests = driver.page_source
soup = BeautifulSoup(requests,'html.parser')
trs = soup.select('body > table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div.con > div > table > tbody > tr')
# 데이터 가져오기
for tr in trs :
    image = tr.select_one('td.RKthumb > a > img')['src']       # 이미지
    title = tr.select_one('td.RKtxt > span > a').text          # 전시제목
    location = tr.select_one('td:nth-child(3) > a').text       # 장소
    date = tr.select_one('td:nth-child(4)').text               # 날짜
    page = page                                                # 상세페이지
    print(image, title, location, date, page)

 # DB에 저장
    doc = {
        'title': title,
        'date' : date,
        'location' : location,
        'page' : page,
        'image' : image
    }
    db.About_to_end.insert_one(doc)