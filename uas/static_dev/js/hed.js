const buttons = document.querySelectorAll('.link7777, .link17777, .link27777, .link37777');
let activeButton = null;

// Делаем кнопку link7777 активной изначально
activeButton = document.querySelector('.link37777');
activeButton.classList.add('active');

// Перебираем каждую кнопку и добавляем обработчики событий
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    if (activeButton === null) {
      activeButton = this;
      this.classList.add('active');
    }
  });

  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    activeButton = this;
    this.classList.add('active');
  });
});

