$(document).ready(
    console.log("Let's get ready to party withjQuery!"),
    // $('body').css('background-color', bgColor())
);
$('article img').addClass('image-center');
$('article').children().last().remove();
$('#title').css('font-size', Math.random() * 100);
$('aside ol').append('<li>This list is getting long</li>');
$('aside.col-sm-4').empty().append('<p>Sorry that list was kind of obnoxious. Will you forgive me?</p>');
// function bgColor(){
//     let $red = $('#red').val();
//     let $blue = $('#blue').val();
//     let $green = $('#green').val();
//     return 'rgb(' + $red + ',' + $green + ',' + $blue + ')';
// }
// $('.form-control').on('keyup blur change', () => {
//     console.log(bgColor());
//     $('body').css('background-color', bgColor());
// });
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});
$('img').on('click', () => {
    $('img').remove();
})