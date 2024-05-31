document.addEventListener("DOMContentLoaded", function() {
    var mainButton = document.querySelector(".open-lang");
    var main1Button = document.querySelector(".spanoption666.dropdown-content");
    var dropdownButtons = document.querySelectorAll(".spanoption16666.dropdown-content, .spanoption26666.dropdown-content, .spanoption36666.dropdown-content, .spanoption46666.dropdown-content, .spanoption56666.dropdown-content");

    dropdownButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var flagIcon = button.querySelector("img").src;
            var langName = button.innerText.trim();

            mainButton.querySelector(".spanflag-icon1").src = flagIcon;
            mainButton.querySelector(".div8").innerText = langName;

            var mainDropdownButton = document.querySelector(".spanoption666.dropdown-content");
            mainDropdownButton.querySelector(".spanflag-icon666").src = flagIcon;
            mainDropdownButton.querySelector(".div666").innerText = langName;
        });
    });
});
