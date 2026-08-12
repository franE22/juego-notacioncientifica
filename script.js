function normalizar(texto) {
    return texto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function calificar() {

    let puntos = 0;

    // ==========================
    // PARTE I - CIERTO Y FALSO
    // ==========================

    const respuestasCF = {
        cf1: "C",
        cf2: "F",
        cf3: "C",
        cf4: "C",
        cf5: "C"
    };

    for (let pregunta in respuestasCF) {

        let respuesta = document.getElementById(pregunta).value;

        if (respuesta === respuestasCF[pregunta]) {
            puntos++;
        }
    }


    // ==========================
    // PARTE II - LLENAR ESPACIOS
    // ==========================

    const respuestasFill = {
        fill1: ["trayectoria"],
        fill2: ["distancia"],
        fill3: ["desplazamiento"],
        fill4: ["escalar"],
        fill5: ["vectorial", "vector"]
    };

    for (let pregunta in respuestasFill) {

        let respuesta = normalizar(
            document.getElementById(pregunta).value
        );

        if (respuestasFill[pregunta].includes(respuesta)) {
            puntos++;
        }
    }


    // ==========================
    // PARTE III - PAREO
    // ==========================

    const respuestasMatch = {
        match1: "B",
        match2: "C",
        match3: "E",
        match4: "D",
        match5: "A"
    };

    for (let pregunta in respuestasMatch) {

        let respuesta = document.getElementById(pregunta).value;

        if (respuesta === respuestasMatch[pregunta]) {
            puntos++;
        }
    }


    // ==========================
    // RESULTADO
    // ==========================

    let porcentaje = (puntos / 15) * 100;

    let resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    if (porcentaje >= 70) {
        resultado.className = "correcto";
    } else {
        resultado.className = "reprobado";
    }

    resultado.innerHTML = `
        Resultado: ${puntos} / 15 puntos<br>
        Porcentaje: ${porcentaje.toFixed(1)}%
    `;
}
