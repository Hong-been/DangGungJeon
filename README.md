# 당궁전: 당신이 궁금한 모든 전시회(Dang-Gung-Jeon)
<br>

## ✨배포 url✨: [당궁전](http://3.35.235.141)


웹 사이트 제작 첫 팀프로젝트 결과물입니다. <br>
15일 챌린지라 미흡하지만 Vanilla JavaScript 활용 능력을 기르는 데에 많은 도움이 되었습니다.

인터파크 예매 페이지와 네이버 "전시회" 검색 결과를 크롤링하여 데이터를 수집합니다. <br>
그리고 데이터베이스와 통신하여 브라우저에 보여줍니다.

상단 메뉴에는 홈 버튼, 하위 카테고리(탑50, 무료, 온라인, 종료임박), about us, 검색바가 구현되어 있습니다.<br>
전시회를 클릭하면 모달창이 팝업되며, DB에서 가져온 전시회 정보들과 카카오 API를 사용한 지도를 확인하실 수 있습니다.

## 왜?✨
전시회의 정보를 모아놓은 사이트가 없어 불편함을 느끼고 웹 사이트를 제작하게 되었습니다.
## 개발 기간 및 구성원
- 코딩 초보자 5인으로 구성된 웹 개발 팀 프로젝트
- 개발구상 및 개발기간 총 15일
## 데이터 수집✨
인터파크 전시/행시 랭킹 사이트, 네이버 "전시회" 검색에서 데이터를 크롤링한 후, 데이터베이스에 저장하여 사용하였습니다.
## 웹 사이트 구성✨
<img width="1263" alt="Main page" src="https://user-images.githubusercontent.com/65804460/134776844-e4153be3-5130-47a3-8830-fd374fc14f03.png">
<img width="1263" alt="Modal window" src="https://user-images.githubusercontent.com/65804460/134776849-49f9e427-88d3-408f-9207-248ab3ef5bf9.png">
<img width="1263" alt="TOP50 page" src="https://user-images.githubusercontent.com/65804460/134776870-b3604eae-2396-41aa-8256-e763c66d9512.png">
<img width="1263" alt="About Us page" src="https://user-images.githubusercontent.com/65804460/134776899-2d91be0d-27f1-46ce-8773-13162713205b.png">
<img width="1263" alt="Searching" src="https://user-images.githubusercontent.com/65804460/134776918-de49ec04-53b1-4fee-acca-6b77b21189e4.png">

1. 상단 메뉴바
- 홈 로고
- Exhibition(하위 카테고리 4개: TOP 50, 종료임박, 무료전시, 온라인 전시)
- About Us(개발자 소개 등)
- 검색 바<br>

2. 메인 페이지
- 상단에 데이터베이스에 저장된 전시회 중 랜덤으로 보여줍니다.
- 하단에 인기순위 10위 전시회들을 슬라이더로 볼 수 있습니다.<br>

3. 하위 카테고리
- 4개의 카테고리 TOP 50, 종료임박, 무료전시, 온라인 전시로 이루어져있습니다.<br>

4. 팝업 모달창
- 전시회를 클릭하면 모달창이 나타납니다.
- 데이터베이스에 저장된 전시회 이름을 기준으로 검색하여 정보를 통신합니다.
- 전시회 이름, 기간, 장소, 예매 링크 or 공식 홈페이지 링크를 가져와 보여줍니다.
- 장소를 기준으로 카카오 지도API에 검색하여 지도와 주소를 가져와 보여줍니다.<br>

5. 검색결과 페이지
- 전시회 이름과 장소를 검색할 수 있습니다.<br>

## 구현 영상✨
> https://youtu.be/IuDZKzc7WN0

## 노션 개인 개발일지✨
> https://sulfuric-lunge-ed9.notion.site/15-577bc72da1dc40d7a690cfa19a57c17f
<br>
