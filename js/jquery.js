$("#p1").hide();
$("#p2").hide();
$("#p3").hide();
$("tr:eq(1)").on("click", function () {
    $("#p1").toggle();
})
$("tr:eq(2)").on("click", function () {
    $("#p2").toggle();
})
$("tr:eq(3)").on("click", function () {
    $("#p3").toggle();
})
$("#dp2").hide();
$("#dp3").hide();
$("#prezident1").on("click", function () {
    $("#dp2").hide();
    $("#dp3").hide();
    $("#dp1").show();
})
$("#prezident2").on("click", function () {
    $("#dp1").hide();
    $("#dp3").hide();
    $("#dp2").show();
})
$("#prezident3").on("click", function () {
    $("#dp2").hide();
    $("#dp1").hide();
    $("#dp3").show();
})
setInterval(function () {
    let i = Math.ceil(Math.random() * 3);
    $("#fot1").attr("src", "img/"+i+".jpg")
    i++;
    $("#fot2").attr("src", "img/"+i+".jpg");
    i++;
    $("#fot3").attr("src", "img/"+i+".jpg");
    if (i = 5){
    i=1;
    }
}, 5000);
