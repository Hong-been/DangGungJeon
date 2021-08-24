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

	modal.classList.remove("hidden");
}
function openModalIndex(event) {
	event.preventDefault();
	const target = event.target;
	const targetName =
		target.parentNode.parentNode.querySelector(".main_card_name").innerText;

	modalImg["src"] = target["src"];
	modalName.innerText = targetName;

	modal.classList.remove("hidden");
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
