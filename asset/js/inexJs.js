document.getElementById('toggleButton').addEventListener('click', function() {
    var list = document.getElementById('list');
    if (list.style.visibility === 'hidden') {
        list.style.visibility = 'visible';
    } else {
        list.style.visibility = 'hidden';
    }
});

var navbarItem = document.querySelector('.navbar:nth-child(5)');

// دریافت لیست کشویی
var dropdown = navbarItem.querySelector('.dropdown');

// اضافه کردن رویداد برای نمایش لیست کشویی هنگام قرارگیری موس روی آیتم
navbarItem.addEventListener('mouseover', function() {
    dropdown.style.display = 'block';
});

// اضافه کردن رویداد برای مخفی کردن لیست کشویی هنگام برداشتن موس از روی آیتم
navbarItem.addEventListener('mouseout', function() {
    dropdown.style.display = 'none';
});




