function imc() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function formReceive(event) {
        event.preventDefault();

        const weight = Number(form.querySelector('.weight').value);
        const height = Number(form.querySelector('.height').value);

        const imc = weight / (height**2) || 0;
        classification = '';

        if (imc < 18.5) {
            classification = 'Magreza';
        } 
        else if (imc >= 18.5 && imc <= 24.9) {
            classification = 'Normal';
        }
        else if (imc >= 25 && imc <= 29.9) {
            classification = 'Sobrepeso';
        }
        else if (imc >= 30 && imc <= 34.9) {
            classification = 'Obesidade GRAU I';
        }
        else if (imc >= 35 && imc <= 39.9) {
            classification = 'Obesidade GRAU II';
        }
        else {
            classification = 'Obesidade GRAU III';
        }

        result.innerHTML = `<p>
        Peso: ${weight} 
        Altura: ${height.toFixed(2)}
        IMC: ${imc.toFixed(2)} (${classification})
        </p>`;

    }

    form.addEventListener('submit', formReceive);

}

imc();