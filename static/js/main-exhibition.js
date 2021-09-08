$(document).ready(function () {
	randomMain();
});

function randomMain() {
	$("#random").empty();
	$.ajax({
		type: "GET",
		url: "/random",
		data: {},
		success: function (response) {
			let main = response["one"];
			let title = main["title"];
			let image = main["image"];
			let date = main["date"];
			let location = main["location"];
			let temp_html = `<div class="exhibition-desc">
                                            <span class="exhibition-name">${title}</span>
                                            <span class="exhibition-place">${date}</span>
                                            <span class="exhibition-date">${location}</span>
                                        </div>
                                        <img class="exhibition-img" src="${image}"/>`;
			$("#random").append(temp_html);
		},
	});
}
