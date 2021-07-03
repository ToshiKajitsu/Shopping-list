
$(".change").on("click", function() {
    $(".hideDiv").fadeIn(500).delay(1000).fadeOut(500);

});

$(".watch").on("click", function() {
    $(".list").fadeToggle(500);

});

// $(".change").on("click", function() {
//     $(".list").append($("<div>")).text($(".input").val());
//     // $(".comment").append();

// });
let classComm = 0;
document.querySelector('.change').addEventListener('click', () => {
    classComm++
    let input = document.querySelector('.input');
    let commentNew = "<div class='comment'>" + "<p>" + "Задание №" + classComm + ": " + input.value + "</p>" + "</div>";

    document.querySelector('.list').insertAdjacentHTML('afterbegin', commentNew);
    input.value = "";
})

