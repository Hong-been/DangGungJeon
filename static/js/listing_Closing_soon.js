$(document).ready(function () {
    showClosing();
});

function showClosing() {
    $.ajax({
        type: "GET",
        url: "/list_Closing",
        data: {},
        success: function (response) {
            let closing = response['all_closing']
            for (let i = 0; i < closing.length; i++) {
                let title = closing[i]['title']
                let image = closing[i]['image']

                let temp_html = `<li class="exhibition">
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">${title}</span>
                                </li>`

                $('#closing_soon').append(temp_html)
            }
        }
    })
}
