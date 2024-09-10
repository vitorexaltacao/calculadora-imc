function calcularIMC() {
    // Obtém o valor do campo de entrada de peso e converte para número
    const peso = parseFloat(document.getElementById("peso").value);
    // Obtém o valor do campo de entrada de altura e converte para número
    const altura = parseFloat(document.getElementById("altura").value);

    // Verifica se o peso ou a altura são inválidos ou menores ou iguais a zero
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";  // Exibe mensagem de erro
        return;  // Sai da função se os valores não forem válidos
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
    // Declara a variável para armazenar a classificação do IMC
    let classificacao = "";

    // Classifica o IMC e atribui a classificação correspondente
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    // Exibe o resultado do IMC e a classificação
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + " (" + classificacao + ").";
}
