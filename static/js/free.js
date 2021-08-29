
function showfree() {
    $.ajax({
        type: "GET",
        url: "/free",
        data: {},
        success: function (response) {
            let free = respons['all_free']
            for (let i = 0; i < free.length; i++){
                let title = free[i] ['title']
                let image = free[i] ['image']

                let temp_html =`<li class="exhibition">
\t\t\t\t\t<a><img class="exhibition-img" src="/static/sample.png" /></a>
\t\t\t\t\t<span class="exhibition-name">무료전시1</span>
\t\t\t\t</li>`

                $('#free').append(temp_html)
            }
        }
    })
}