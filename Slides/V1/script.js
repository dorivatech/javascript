window.onload = function() {

    var slide = 1;

    setInterval(() => {
        if (slide == 1) {
            document.querySelector('img').setAttribute('src', 'Slide02.jpeg');
            slide = 2;
        } else if (slide == 2) {
            document.querySelector('img').setAttribute('src', 'Slide03.jfif');
            slide = 3;
        } else {
            document.querySelector('img').setAttribute('src', 'Slide01.jpg');
            slide = 1;
        }
    }, 3000);

};