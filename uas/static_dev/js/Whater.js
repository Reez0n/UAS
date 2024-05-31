var menuItems = document.querySelectorAll(".dropdown-content");
var buttons = document.querySelectorAll(".dropdown-content spanoption666");
var chert = document.querySelectorAll(".chevron-down666 dropdown-content");
var chert1 = document.querySelectorAll(".dropdown-content spanoption16666");
var chert2 = document.querySelectorAll(".dropdown-content spanoption26666");
var chert3 = document.querySelectorAll(".dropdown-content spanoption36666");
var chert4 = document.querySelectorAll(".dropdown-content spanoption46666");
var chert5 = document.querySelectorAll(".dropdown-content spanoption56666");

var elementToTrigger = document.querySelector(".open-lang");

var isOpen = false; // Переменная для отслеживания состояния меню

// Скрыть все элементы меню и кнопки
menuItems.forEach(function(item) {
    item.style.display = "none";
});
buttons.forEach(function(button) {
    button.style.display = "none";
});
chert.forEach(function(button) {
    button.style.display = "none";
});
chert1.forEach(function(button) {
    button.style.display = "none";
});
chert2.forEach(function(button) {
    button.style.display = "none";
});
chert3.forEach(function(button) {
    button.style.display = "none";
});
chert4.forEach(function(button) {
    button.style.display = "none";
});
chert5.forEach(function(button) {
    button.style.display = "none";
});

elementToTrigger.addEventListener("click", function() {
    if (!isOpen) {
        // Открыть все элементы меню и кнопки
        menuItems.forEach(function(item) {
            item.style.display = "block";
        });
        buttons.forEach(function(button) {
            button.style.display = "block";
        });
        chert.forEach(function(button) {
            button.style.display = "block";
        });
        chert1.forEach(function(button) {
            button.style.display = "block";
        });
        chert2.forEach(function(button) {
            button.style.display = "block";
        });
        chert3.forEach(function(button) {
            button.style.display = "block";
        });
        chert4.forEach(function(button) {
            button.style.display = "block";
        });
        chert5.forEach(function(button) {
            button.style.display = "block";
        });
        isOpen = true; // Установить флаг - меню открыто
    } else {
        // Закрыть все элементы меню и кнопки
        menuItems.forEach(function(item) {
            item.style.display = "none";
        });
        buttons.forEach(function(button) {
            button.style.display = "none";
        });
        chert.forEach(function(button) {
            button.style.display = "none";
        });
        chert1.forEach(function(button) {
            button.style.display = "none";
        });
        chert2.forEach(function(button) {
            button.style.display = "none";
        });
        chert3.forEach(function(button) {
            button.style.display = "none";
        });
        chert4.forEach(function(button) {
            button.style.display = "none";
        });
        chert5.forEach(function(button) {
            button.style.display = "none";
        });
        isOpen = false; // Установить флаг - меню закрыто
    }
});


