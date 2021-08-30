$(document).ready(function () {
    showfree();
});

function showfree() {
    $("#free").empty();
    $.ajax({
        type: "GET",
        url: "/free/list",
        data: {},
        success: function (response) {
            let free = response['all_free']
            for (let i = 0; i < free.length; i++) {
                let title = free[i]['title']
                let image = free[i]['image']

                let temp_html = `<li class="exhibition">
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">${title}</span>
                                </li>`

                $('#free').append(temp_html)
            }
        }
    })
}