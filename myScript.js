$(document).ready(function() {
    $("button").click(function () {
        $("p").hide();
        console.log("hello click");
    });


    $("li").click( function(){
        $(this).addClass("turnBlue");
    });

    $("li").on('dblclick',  function(){
        $(this).removeClass("turnBlue");
    })

    $('input').eq(0).keypress(function (event){
        console.log(event);
    });

});

