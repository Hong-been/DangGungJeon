// $(document).ready(function () {
//     showfree();
// });
//
// function postfree() {
//     let free_img = $('#exhibition-img').val()
//     let free_name = $('#exhibition-name').val()
//     $.ajax({
//         type: "POST",
//         url: "/free",
//         data: {free_img_give: img, free_name_give: name},
//         success: function (response) { // 성공하면
//             alert(response["msg"]);
//         }
//     })
// }
//
// function showfree() {
//     $.ajax({
//         type: "GET",
//         url: "/free",
//         data: {},
//         success: function (response) {
//             let free
//             -respons['all_free']
//             for (let i = 0; i < free.length; i++) {
//                 let name = free[i]['name']
//                 let image = free[i]['image']
//
//                 let temp_html = `<li class="exhibition">
//                                     <a><img class="exhibition-img" src="${image}" /></a>
//                                     <span class="exhibition-name">"${name}"</span>
//                                     </li>`
//                 $('#exhibition-list').append(temp_html)
//             }
//         }
//     })
// }