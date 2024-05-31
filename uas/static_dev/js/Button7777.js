
// Получаем все кнопки с классом .link7777, .link17777, .link27777, .link37777
const buttons = document.querySelectorAll('.link7777, .link17777, .link27777, .link37777');
let activeButton = null;

// Делаем кнопку link7777 активной изначально
activeButton = document.querySelector('.link7777');
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
document.getElementById('JLAV').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('registerButton1').addEventListener('click', function() {
  window.location.href = 'index2.html';
});
document.getElementById('registerButton').addEventListener('click', function() {
  window.location.href = 'index1.html';
});

document.getElementById('registerButton12').addEventListener('click', function() {
  window.location.href = 'index2.html';
});
document.getElementById('NESCAFE').addEventListener('click', function() {
  window.location.href = 'index555.html';
});
/*
const buttons = document.querySelectorAll('.nav button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
*/