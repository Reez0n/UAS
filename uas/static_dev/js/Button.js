// Получаем все кнопки с классом .link7777, .link17777, .link27777, .link37777
const buttonsss = document.querySelectorAll('.link7777, .link17777, .link27777, .link37777');
let activeButtonsss = null;

// Делаем кнопку link7777 активной изначально
activeButtonsss = document.querySelector('.link17777');
activeButtonsss.classList.add('active');

// Перебираем каждую кнопку и добавляем обработчики событий
buttonsss.forEach(buttonsss => {
  buttonsss.addEventListener('mouseenter', function() {
    if (activeButtonsss === null) {
      activeButtonsss = this;
      this.classList.add('active');
    }
  });

  buttonsss.addEventListener('click', function() {
    buttonsss.forEach(btn => btn.classList.remove('active'));
    activeButtonsss = this;
    this.classList.add('active');
  });
});



