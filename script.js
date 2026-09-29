function showPage(id) {

    var page = document.getElementById(id);

    if (page) {

        page.classList.remove("hidden");

        setTimeout(function() {
            page.scrollIntoView({
                behavior: "smooth"
            });
        }, 100);

    }
}


function openGift() {

    showPage("giftSection");

}


function openFlowers() {

    showPage("flowersSection");

}


function openLetter() {

    showPage("letterSection");

}


function sayYes() {

    showPage("celebration");

    for (var i = 0; i < 30; i++) {

        var heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.animation =
            "fall 4s linear";

        document.body.appendChild(heart);

        setTimeout(function() {

            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }

        }, 4000);
    }
}


/* Falling roses */

var petals = document.getElementById("petals");

if (petals) {

    for (var i = 0; i < 15; i++) {

        var petal = document.createElement("div");

        petal.className = "petal";
        petal.innerHTML = "🌹";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        petals.appendChild(petal);
    }
}