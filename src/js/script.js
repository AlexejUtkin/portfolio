
// Бургер меню
const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
})

// Автозаполнение прогресса
const counters = document.querySelectorAll('.skills__progress-interest'),
    lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Плавный скролл по ссылкам
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        const id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});
