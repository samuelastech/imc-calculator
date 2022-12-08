function imc() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const weight = Number(e.target.querySelector('.weight').value);
        const height = Number(e.target.querySelector('.height').value);

        const imc = getIMC(weight, height);
        const levelIMC = getClassification(imc);

        setResult(`IMC: ${imc} (${levelIMC})`, true);
    });

}

function getIMC(weight, height) {
    return (weight / height ** 2).toFixed(2);
}

function getClassification(imc) {
    const level = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade GRAU I', 'Obesidade GRAU II', 'Obesidade GRAU III'];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
}

function setResult(msg, isValid) {
    const result = document.querySelector('.result');
    result.innerHTML = '';
    
    const p = document.createElement('p');
    p.innerHTML = msg;

    if (isValid) {
        p.classList.add('good-result');
    }
    else {
        p.classList.add('bad-result');
    }
    
    result.appendChild(p);
}

imc();
