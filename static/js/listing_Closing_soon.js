$(document).ready(function () {
    showClosing();
});

function showClosing() {
    $.ajax({
        type: "GET",
        url: "/closing/list",
        data: {},
        success: function (response) {
            let closing = response['all_closing']
            for (let i = 0; i < closing.length; i++) {
                let title = closing[i]['title']
                let image = closing[i]['image']
                let dday = closing[i]['dday']
                let temp_html = `<li class="exhibition circle" >
                                    <a><img class="exhibition-img" src="${image}"/></a>
                                    <span class="exhibition-name">${title}</span>
                                    <p class="dday">${dday}</p>
                                </li>`

                $('#closing_soon').append(temp_html)
            }
        }
    })
}
