
function showfree() {
    $.ajax({
        type: "GET",
        url: "/free",
        data: {},
        success: function (response) {
            let free = respons['all_free']
            }
        }
    })
}