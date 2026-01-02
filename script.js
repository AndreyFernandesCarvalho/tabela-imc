function calcular() {
    let pesoInput = document.querySelector("#peso");
    let alturaInput = document.querySelector("#altura");
    let resultado = document.querySelector("#resultado");

    if (pesoInput.value === "" || alturaInput.value === "") {
        alert("Preencha os dados.");
        return;
    }

    let peso = Number(pesoInput.value);
    let altura = Number(alturaInput.value);

    if (peso < 30 || peso > 300) {
        alert("Peso inválido.");
        return;
    }

    if (altura > 3) {
        if (altura < 100 || altura > 250) {
            alert("Altura inválida.");
            return;
        }
        altura = altura / 100;

    }else {
        if (altura < 1.0 || altura > 2.5) {
            alert("Altura inválida.");
            return;
        }
    }

    let calculoIMC = peso / (altura * altura);

    if (calculoIMC < 18.5) {
        resultado.style.backgroundColor = "#9BC1E6";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Abaixo do peso)`;

    } else if (calculoIMC == 18.5 || calculoIMC <= 24.9) {
        resultado.style.backgroundColor = "#00AF50";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Peso normal)`;

    } else if (calculoIMC == 25.0 || calculoIMC <= 29.9 ) {
        resultado.style.backgroundColor = "#FFC000";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Acima do peso)`;

    } else if (calculoIMC == 30.0 || calculoIMC <= 34.9) {
        resultado.style.backgroundColor = "#F2640E";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade classe I)`;

    } else if (calculoIMC == 35.0 || calculoIMC <= 39.9) {
        resultado.style.backgroundColor = "#DA0000";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade classe II)`;
    } else {
        resultado.style.backgroundColor = "#9E0000";
        resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2)} (Obesidade classe III)`;
    }


}