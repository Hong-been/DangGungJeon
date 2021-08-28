$(document).ready(function () {
    showOnline();
});

function showOnline() {
    $.ajax({
        type: "GET",
        url: "/list_online",
        data: {},
        success: function (response) {
            let online = response['all_online']
            for (let i = 0; i < online.length; i++) {
                let title = online[i]['title']
                let image = online[i]['image']

                let temp_html = `<li class="exhibition">
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">${title}</span>
                                </li>`

                $('#online').append(temp_html)
            }
        }
    })
}
