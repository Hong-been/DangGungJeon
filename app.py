from flask import Flask, render_template

app = Flask(__name__)

# Home
@app.route('/')
def home():
    return render_template('index.html')


# TOP50 카테고리
@app.route('/top50')
def top():
    return render_template('top50.html')


# 종료임박 카테고리
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
    app.run(port=5000,debug=True)
