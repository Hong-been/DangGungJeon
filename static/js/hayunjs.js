function showExhibition() {
    $.ajax({
        type: "GET",
        url: "/top50?Top50_give=Top50",
        data: {},
        dataType: "dataType",
        success: function (response) {
            alert(response["msg"]
            )
        }
    });
}