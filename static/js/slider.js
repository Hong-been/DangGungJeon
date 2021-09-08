let slideBox,
	slideBoxImg,
	slideBody,
	slideColumn,
	slide,
	currentIndex = 0;
const sliceAllCount = 12,
	slideShowCount = 4,
	prevBtn = document.querySelector(".main_ico_arrow-L"),
	nextBtn = document.querySelector(".main_ico_arrow-R");

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

window.onload = init;
window.onresize = init;

function init() {
	slideBox = document.querySelector(".main_slidebox");
	slideBoxImg = slideBox.querySelector(".main_card_img");
	slideBody = slideBox.querySelector(".main_card_body");
	slide = slideBody.clientWidth;

	slideColumn = document.querySelector(".main_card_columns");

	slideBox.style.width = slide * sliceAllCount + "px";
	slideColumn.style.width = slide * slideShowCount + "px";
	slideBox.style.left = 0;
}

function showPrev(event) {
	event.preventDefault();
	if (currentIndex > 0) {
		currentIndex -= slideShowCount;
		slideBox.style.left = -currentIndex * slide + "px";
	} else if (currentIndex == 0) {
		currentIndex = 8;
		slideBox.style.left = -currentIndex * slide + "px";
	}
}

function showNext(event) {
	event.preventDefault();
	if (currentIndex + slideShowCount < 12) {
		currentIndex += slideShowCount;
		slideBox.style.left = -currentIndex * slide + "px";
	} else if (currentIndex + slideShowCount == 12) {
		currentIndex = 0;
		slideBox.style.left = -currentIndex * slide + "px";
	}
}
