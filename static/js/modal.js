const modal = document.querySelector(".modal"),
	modalCloseBtn = document.querySelector(".modal-closebtn"),
	modalImg = modal.querySelector(".modal-img"),
	modalName = modal.querySelector(".modal-desc-name"),
	modalDate = modal.querySelector(".modal-desc-date"),
	modalPlace = modal.querySelector(".modal-desc-place"),
	modalUrl = modal.querySelector(".modal-desc-url"),
	modalAdress = modal.querySelector(".modal-desc-adress");
modalMap = modal.querySelector(".modal-desc-map");

const indexImages = document.querySelectorAll(".main_card_img"),
	cateImages = document.querySelectorAll(".category-main .exhibition-img"),
	repEXhbn = document.querySelector(".main-exhibition");

function makeModalMap(location) {
	console.log("지도를 가져올 키워드: ", location);
	let roadAdress;

	var services = kakao.maps.services;
	if (!services) {
		console.log("kakao.maps.services 를 찾을 수 없음 :", kakao.maps);
		return;
	} else {
		//주소로 검색할 때(ex.해남군 송지면)
		// var geocoder = new services.Geocoder();

		//장소로 검색할 때(ex. 판교 치킨)
		var places = new kakao.maps.services.Places();

		var callback = function (result, status) {
			let lat = result[0]["y"];
			let lng = result[0]["x"];
			// 이미지 지도에 표시할 마커입니다
			// 이미지 지도에 표시할 마커를 아래와 같이 배열로 넣어주면 여러개의 마커를 표시할 수 있습니다
			// var markers = [
			// 	{
			// 		position: new kakao.maps.LatLng(lat, lng),
			// 	},
			// 	{
			// 		position: new kakao.maps.LatLng(lat, lng),
			// 		text: location, // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
			// 	},
			// ];

			if (status === kakao.maps.services.Status.OK) {
				var options = {
					center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
					level: 3, //지도의 레벨(확대, 축소 정도), 클수록 넓게보인다.
				};
				var map = new kakao.maps.Map(modalMap, options);
				roadAdress = result[0]["road_address_name"];
				modalAdress.innerText = `📍 ${roadAdress}`;

				// 마커가 표시될 위치입니다
				var markerPosition = new kakao.maps.LatLng(lat, lng);

				// 마커를 생성합니다
				var marker = new kakao.maps.Marker({
					position: markerPosition,
				});

				// 마커가 지도 위에 표시되도록 설정합니다
				marker.setMap(map);
			} else {
				console.log("callback status:", status);
			}
		};
		places.keywordSearch(location, callback);
	}
}
function openModalCate(event) {
	event.preventDefault();
	const target = event.target;
	const targetName =
		target.parentNode.parentNode.querySelector(".exhibition-name").innerText;

	modalImg["src"] = target["src"];
	modalName.innerText = targetName;
	getModalInfo(targetName);

	modal.classList.remove("hidden");
}
function openModalIndex(event) {
	event.preventDefault();
	const target = event.target;
	const targetName =
		target.parentNode.parentNode.querySelector(".main_card_name").innerText;

	modalImg["src"] = target["src"];
	modalName.innerText = targetName;

	getModalInfo(targetName);

	modal.classList.remove("hidden");
}
function openModalRep(event) {
	event.preventDefault();

	const target = event.currentTarget;
	const targetName = target.querySelector(".exhibition-name").innerText;

	modalImg["src"] = target.querySelector(".exhibition-img")["src"];
	modalName.innerText = targetName;

	getModalInfo(targetName);

	modal.classList.remove("hidden");
}
function getModalInfo(targetName) {
	makeModalMap("마이아트뮤지엄"); //db연결 후에 삭제 예정!

	//title / date / location / map / image
	let url = `/modal?keyword_give=${targetName}`;
	//서버에게 "keoword_give"로 전시회명을 준다.
	//서버가 디비에서 해당전시회에 대한 json데이터를 넘겨준다.
	//넘기는 데이터의 이름은 "modal_info"로 임시작성함.
	$.ajax({
		type: "GET",
		url: url,
		data: {},
		//DB key값이 아직 안정해져서 date, place로 임시작성함.
		success: function (response) {
			let info = response["modal_info"];
			console.log(info);
			const date = info["date"];
			const location = info["location"];

			modalDate.innerText = date;
			modalPlace.innerText = location;
			makeModalMap(location);
		},
	});
}

indexImages.forEach((current) => {
	current.addEventListener("click", openModalIndex);
});
cateImages.forEach((current) => {
	current.addEventListener("click", openModalCate);
});
if (repEXhbn) {
	repEXhbn.addEventListener("click", openModalRep);
}
modalCloseBtn.addEventListener("click", () => {
	modal.classList.add("hidden");
});
