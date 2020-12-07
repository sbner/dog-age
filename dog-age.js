const idade = document.querySelector("#idade");
const button = document.querySelector("#calculate");
const porte = document.querySelectorAll(".tipo-porte");
const resultDiv = document.querySelector("#results");

button.onclick = () => {

    // Captura a idade do cachorro
    const age = idade.value;
    if (age == "") {
        alert("Digite quantos anos seu cachorro tem!");
        return
    }
    let porteSelecionado = "";

    let formula = 0;
    
    // Descobre qual porte foi selecionado
    porte.forEach(element => {
        if (element.checked === true) {
            porteSelecionado = element.value;
        }
    });
    // Condicional que checa se a pessoa selecionou o porte
    if (porteSelecionado === "") {
        alert("Por favor selecione o porte do seu cachorro :)");
        return
    }
    // Atribui a formula correta dependendo do porte
    switch (porteSelecionado) {
        case "pequeno":
            formula = 6;
            break;
        case "medio":
            formula = 7;
            break;
        case "grande":
            formula = 8;
            break;
        
    }
    // Faz o calculo da idade relativa
    let dogAge = age * formula;

    resultDiv.innerHTML = dogAge;

}

