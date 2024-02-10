function convertir() {
    var cantidad = parseFloat(document.getElementById("amount").value);
    var monedaOrigen = document.getElementById("from").value;
    var monedaDestino = document.getElementById("to").value;

    if (isNaN(cantidad)) {
        alert("Ingrese un valor numérico válido.");
        return;
    }

    var resultado = realizarConversion(cantidad, monedaOrigen, monedaDestino);
    document.getElementById("result").innerText = "El resultado de la conversión es: " + resultado.toFixed(2) + " " + monedaDestino;
}

function realizarConversion(cantidad, monedaOrigen, monedaDestino) {
    // Lógica para realizar la conversión de divisas
    // Aquí puedes utilizar una API externa para obtener las tasas de cambio
    // Por simplicidad, utilizaremos tasas de cambio fijas

    var tasaCambio = obtenerTasaCambio(monedaOrigen, monedaDestino);

    return cantidad * tasaCambio;
}

function obtenerTasaCambio(monedaOrigen, monedaDestino) {
    // Aquí definimos tasas de cambio ficticias para propósitos de demostración
    var tasas = {
        "COP": {
            "USD": 0.00028,
            "EUR": 0.00024,
            "GBP": 0.00021,
            "JPY": 0.032,
            "KRW": 0.32
        },
        "USD": {
            "COP": 3571.43,
            "EUR": 0.88,
            "GBP": 0.77,
            "JPY": 109.75,
            "KRW": 1164.18
        },
        "EUR": {
            "COP": 4200.00,
            "USD": 1.14,
            "GBP": 0.88,
            "JPY": 125.36,
            "KRW": 1332.09
        },
        "GBP": {
            "COP": 4800.00,
            "USD": 1.30,
            "EUR": 1.14,
            "JPY": 142.86,
            "KRW": 1517.67
        },
        "JPY": {
            "COP": 31.25,
            "USD": 0.0091,
            "EUR": 0.00798,
            "GBP": 0.007,
            "KRW": 10.63
        },
        "KRW": {
            "COP": 312.50,
            "USD": 0.00086,
            "EUR": 0.00075,
            "GBP": 0.00066,
            "JPY": 0.094
        }
    };

    return tasas[monedaOrigen][monedaDestino];
}
function confirmarContinuar() {
    var opcion = confirm("¿Desea continuar usando el programa?");
    if (opcion == true) {
        reiniciarPrograma();
    } else {
        mostrarMensaje("Programa Terminado");
    }
}

function reiniciarPrograma() {
    // Limpiar los campos y resultados
    document.getElementById("amount").value = "";
    document.getElementById("result").innerText = "";
    // Mostrar nuevamente el formulario de conversión
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}
function convertir() {
    var cantidad = parseFloat(document.getElementById("amount").value);
    var monedaOrigen = document.getElementById("from").value;
    var monedaDestino = document.getElementById("to").value;

    if (isNaN(cantidad)) {
        alert("Ingrese un valor numérico válido.");
        return;
    }

    var resultado = realizarConversion(cantidad, monedaOrigen, monedaDestino);
    document.getElementById("result").innerText = "El resultado de la conversión es: " + resultado.toFixed(2) + " " + monedaDestino;

    confirmarContinuar(); // Preguntar al usuario si desea continuar
}
