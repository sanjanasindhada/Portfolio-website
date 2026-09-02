$(document).ready(function () {

    var text = "Mern Stack Developer";
    var i = 0;
    var isDeleting = false;

    function typeEffect() {

        if (!isDeleting) {
            // Typing forward
            $("#text").text(text.substring(0, i + 1));
            i++;

            if (i === text.length) {
                setTimeout(function () {
                    isDeleting = true;
                }, 1000);
            }

        } else {
            // Stack style reverse delete
            $("#text").text(text.substring(0, i - 1));
            i--;

            if (i === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeEffect, 150);
    }

    typeEffect();

});

