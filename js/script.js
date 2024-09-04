const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})

// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// function atualizarRelogio() {
//     const dateToday = new Date();
//     const hr = dateToday.getHours().toString().padStart(2, '0');
//     const min = dateToday.getMinutes().toString().padStart(2, '0');
//     const s = dateToday.getSeconds().toString().padStart(2, '0');

//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = s;
// }

// setInterval(atualizarRelogio, 1000);
// atualizarRelogio();