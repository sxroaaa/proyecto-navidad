let navidad = "off";
let navidad_stop = document.getElementById("navidad_Stop")

function Dance(){
    if(tiempofaltante <= 0){
        navidad = "on";

        navidad_stop.classList.add("Dance");
        navidad_stop.innerHTML = "¡Feliz Navidad!";
        navidad_stop.classList.add("feliz-navidad");
    }
}


function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante = (new Date (fechaLimite) - ahora + 100) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);
    

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};
    function cuentaRegresiva(tiempoFaltante, reloj, mensaje){
        let e = document.getElementById(reloj);

        const tiempoActual= setInterval( () => {
            const t = obtenerTiempoFaltante(tiempoFaltante);
            e.innerHTML = `
            <div class="container dias">
                <span class="diasFaltantes"> ${t.diasFaltantes}</span>
                <span class="texto">D</span>

            </div>
            <div class="container horas">
                <span class="horasFaltantes">${t.horasFaltantes}</span>
                <span class="texto">H</span>
            </div>
            <div class="container minutos">
                <span class="minutosFaltantes">${t.minutosFaltantes}</span>
                <span class="texto">M</span>
            </div>
            <div class="container segundos">
                <span class="segundosFaltantes">${t.segundosFaltantes}</span>
                <span class="texto">S</span>
            </div>
            `

            if(t.tiempoFaltante <1){
                clearInterval(tiempoActual);
                e.innerHTML = mensaje;
                Dance()
            }
        }, 1000)
    };

    cuentaRegresiva('2023-12-24T03:12:00', 'cuentaRegresiva', '¡Feliz Navidad!');

