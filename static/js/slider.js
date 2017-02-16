var slider = {
    slides: ['static/img/example_img_1.jpg', 'static/img/example_img_5.jpg', 'static/img/example_img_6.jpg'],
    titleArr: ['для житлових кімнат','для кухні', 'для ванної та туалету', 'для коридору'],
    frame: 0, // текущий кадр для отбражения - индекс картинки из массива
    set: function (image,title) { // установка нужного фона слайдеру
        setTimeout(function () {/*document.getElementById('src').style.opacity = "1";*/
         document.getElementById('sliderTitle').style.opacity = "1";
        /* document.getElementById('src').style.backgroundImage = "url(" + image + ")";*/
         document.getElementById('sliderTitle').innerHTML="" + title + "";
        /*document.getElementById('src').style.transition = "opacity 0.5s linear";*/
        document.getElementById('sliderTitle').style.transition = "opacity 0.5s linear"},500)
        
    },
    init: function () { // запуск слайдера с картинкой с нулевым индексом
        this.set(this.slides[this.frame],this.titleArr[this.frame]);
    },
    left: function () { // крутим на один кадр влево
        this.frame--;
        if (this.frame < 0) this.frame = this.slides.length - 1;
        this.set(this.slides[this.frame],this.titleArr[this.frame]);
    },
    right: function () { // крутим на один кадр вправо
        this.frame++;
        if (this.frame == this.slides.length) this.frame = 0;
        /*document.getElementById('src').style.opacity = "0";
        document.getElementById('src').style.transition = "opacity 0.5s linear";*/
        document.getElementById('sliderTitle').style.opacity = "0";
        document.getElementById('sliderTitle').style.transition = "opacity 0.5s linear";
     this.set(this.slides[this.frame],this.titleArr[this.frame]); 
    }
};
window.onload = function () { // запуск слайдера после загрузки документа
    slider.init();
    setInterval(function () { // ставим пятисекундный интервал для перелистывания картинок
        slider.right();
        
    }, 5000);
};