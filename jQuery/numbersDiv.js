




$(document).ready(function () {
    document.getElementById("numDiv").textContent = $('div').length;
    $('<div>Hello</div>').css({ color: 'red' }).appendTo('body');
    //$('a').click(function (event) { alert("You should not use any link on this page!"); event.preventDefault(); });
    //$('html').dblclick(function (e) { alert("You should not use any link on this page!"); console.log('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n'); });
    $("#go").click(function () {
        $("#block").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500);
    });

    $("a").click(function () {
        $("#cens").fadeIn(3000, function () {
            $("#ascens").fadeIn(100);
        });
        return false;
    });

});

function more() {
    let cur = parseInt($('#msg').css('font-size'));
    $('#msg').css('font-size', cur * 2);
}

function reduce() {
    let cur = parseInt($('#msg').css('font-size'));
    $('#msg').css('font-size', cur / 2);
}

function changeText() {
    //Get
    var bla = $('#txt_name').val();

    //Set
    $('#msg').text(bla);

}


function changeColor() {
    $('body').addClass('red');
}


