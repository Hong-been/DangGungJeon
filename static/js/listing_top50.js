$(document).ready(function () {
	showTop50();
});

function showTop50() {
	$("#top50").empty();
	$.ajax({
		type: "GET",
		url: "/list_top50",
		data: {},
		success: function (response) {
			let top50 = response["all_top50"];
			for (let i = 0; i < top50.length; i++) {
				let title = top50[i]["title"];
				let image = top50[i]["image"];

				let temp_html = `<li class="exhibition">
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">TOP ${
																			i + 1
																		}. ${title}</span>
                                </li>`;

				$("#top50").append(temp_html);
			}
		},
	});
}
