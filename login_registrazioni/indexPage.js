
$('#go').click(function () {
    $("block").animate({

        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});





(function () {

    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            this.action();
            this.stopStart();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;

            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function () {
            var self = this;
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 2500);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;

            }, false);
            self.el.addEventListener("mouseout", function () {
                self.action();

            }, false);
        }


    };

    document.addEventListener("DOMContentLoaded", function () {

        var slider = new Slideshow("#main-slider");

    });


})();



function clickOnCookie() {
    $("#cookie-law-info-bar").hide();
}


function check() {
    let email = document.getElementById("exampleInputEmail1").value;
    if (email === "") {
        $('#control').html('<div class="container"><div class="row"><div class="modal fade" id="ignismyModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"><div class="thank-you-pop"><img src="../img/error.png" alt=""><h1>ATTENZIONE!</h1><p>Inserire una mail valida</p></div></div></div></div></div></div>');
        return false;
    }
    else {

        $('#control').html('<div class="container"><div class="row"><div class="modal fade" id="ignismyModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"><div class="thank-you-pop"><img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png"alt=""><h1>GRAZIE!</h1><p>La tua registrazione è avvenuta con successo!</p><h3 class="cupon-pop">Utente Id: <span>12345</span></h3></div></div></div></div></div></div></div>');
        return true;
    }
}


