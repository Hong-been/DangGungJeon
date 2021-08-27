let slideBox = document.querySelector(".main_slidebox"),
	slideBoxImg = slideBox.querySelector(".main_card_img"),
	slideBody = slideBox.querySelector(".main_card_body"),
	slideColumn = document.querySelector(".main_card_columns"),
	prevBtn = document.querySelector(".main_ico_arrow-L"),
	nextBtn = document.querySelector(".main_ico_arrow-R");

let slide = slideBody.clientWidth, // Get Content + Padding only,
	sliceAllCount = 12,
	slideShowCount = 4,
	currentIndex = 0;

slideBox.style.width = slide * sliceAllCount + "px";
slideColumn.style.width = slide * slideShowCount + "px";
slideBox.style.left = 0;
console.log(slide);

function reportWindowSize() {
	(slideBox = document.querySelector(".main_slidebox")),
		(slideBoxImg = slideBox.querySelector(".main_card_img")),
		(slideBody = slideBox.querySelector(".main_card_body")),
		(slideColumn = document.querySelector(".main_card_columns")),
		(prevBtn = document.querySelector(".main_ico_arrow-L")),
		(nextBtn = document.querySelector(".main_ico_arrow-R"));

	(slide = slideBody.clientWidth), // Get Content + Padding only,
		(sliceAllCount = 12),
		(slideShowCount = 4),
		(currentIndex = 0);

	slideBox.style.width = slide * sliceAllCount + "px";
	slideColumn.style.width = slide * slideShowCount + "px";
	slideBox.style.left = 0;
	console.log(slide);
}
window.onresize = reportWindowSize;

function showPrev(event) {
	event.preventDefault();
	if (currentIndex > 0) {
		currentIndex -= slideShowCount;
		console.log("이전4개", currentIndex);
		slideBox.style.left = -currentIndex * slide + "px";
	} else if (currentIndex == 0) {
		currentIndex = 8;
		console.log("마지막으로", currentIndex);
		slideBox.style.left = -currentIndex * slide + "px";
	}
}
function showNext(event) {
	event.preventDefault();
	if (currentIndex + slideShowCount < 12) {
		currentIndex += slideShowCount;
		console.log("다음4개", currentIndex);
		slideBox.style.left = -currentIndex * slide + "px";
	} else if (currentIndex + slideShowCount == 12) {
		currentIndex = 0;
		console.log("처음으로", currentIndex);
		slideBox.style.left = -currentIndex * slide + "px";
	}
}

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
