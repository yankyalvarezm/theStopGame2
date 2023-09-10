document.getElementById("title-btn2").addEventListener("click", function () {
    window.location.href = "./howtoplay.html";
});


// ** Stop Sequence

let currentIndex = 0;
const stopLang = ['STOP', 'PARE', 'ALTO', 'ARRÊT', '止まれ', 'СТОП', 'STOP'];

const intervalId = setInterval(() => {
    document.getElementById('stop').innerText = stopLang[currentIndex];
    currentIndex = (currentIndex + 1);

    if (currentIndex === stopLang.length) {
        clearInterval(intervalId);
    }
}, 1000);


document.getElementById('title-btn1').addEventListener('click', function () {
    window.location.href = './play.html';
})