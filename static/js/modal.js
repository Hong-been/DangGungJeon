const modal = document.querySelector(".modal"),
	modalCloseBtn = document.querySelector(".modal-closebtn"),
	modalImg = modal.querySelector(".modal-img"),
	modalName = modal.querySelector(".modal-desc-name"),
	modalDate = modal.querySelector(".modal-desc-date"),
	modalPlace = modal.querySelector(".modal-desc-place"),
	modalUrl = modal.querySelector(".modal-desc-url");

const IndexImages = document.querySelectorAll(".main_card_img"),
	CateImages = document.querySelectorAll(".exhibition-img");

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
function getModalInfo(targetName) {
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

			modalDate.innerText = info["date"];
			modalPlace.innerText = info["place"];
		},
	});
}

modalCloseBtn.addEventListener("click", () => {
	modal.classList.add("hidden");
});

IndexImages.forEach((current) => {
	current.addEventListener("click", openModalIndex);
});

CateImages.forEach((current) => {
	current.addEventListener("click", openModalCate);
});
