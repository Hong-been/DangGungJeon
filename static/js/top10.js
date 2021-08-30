const imgs = document.querySelectorAll(".main_card_img");
const names = document.querySelectorAll(".main_card_name");

$(document).ready(function () {
	showTop10();
});

function showTop10() {
	$.ajax({
		type: "GET",
		url: "/list_top10",
		data: {},
		success: function (response) {
			let info = response["all_top10"];

			for (i = 0; i < 10; i++) {
				imgs[i]["src"] = info[i]["image"];
				names[i].innerText = info[i]["title"];
			}
		},
	});
}
