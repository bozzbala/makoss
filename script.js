document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".heart-button").addEventListener("click", function() {
        document.body.classList.remove("no-scroll");
        document.querySelector(".intro").classList.add("hidden");
        document.querySelector(".title").classList.add("animate");
        document.querySelector(".main").classList.remove("hidden");

        let elements = document.querySelectorAll(".container .message");
        elements.forEach(function(element) {
            element.classList.add("animate");
        });
    });

    document.querySelector(".music-button").addEventListener("click", function() {
        document.querySelector(".main").classList.add("hidden");
        document.querySelector(".music").classList.remove("hidden");
    });
});