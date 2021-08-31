// jQuery
//$('.category-main').empty()

// Vanilla
// let main = document.querySelector("main");
// while (main.firstChild) {
// 	main.removeChild(main.firstChild);
// }
const inputBox = document.querySelector(".search-box .form-control");
const inputBtn = document.querySelector(".search-box .search-btn");
inputBtn.addEventListener("click", search);
function search() {
	let keyword = inputBox.value;
	if (keyword == "") return false;
	else {
		showSearched(keyword);
	}
}
function showSearched(keyword) {
	console.log(keyword);

	$.ajax({
		type: "GET",
		url: `/search_list?keyword=${keyword}`,
		data: {},
		success: function (response) {
			console.log(response);
			let result = response["search_list"];
			console.log(result);

			for (let i = 0; i < result.length; i++) {
				let title = result[i]["title"];
				let image = result[i]["image"];

				let temp_html = `<li class="exhibition">
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">${title}</span>
									</li>`;

				$(".exhibition-list").append(temp_html);
				setTimeout();
			}
		},
	});
}
