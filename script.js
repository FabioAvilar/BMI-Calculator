const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputWeight = event.target.querySelector('.peso');
  const inputHeight = event.target.querySelector('.altura');
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if(!weight) {
    setResult('Invalid Weight!');
    return;
  }

  if(!height) {
    setResult('Invalid Height!');
    return;
  }

  const bmi = getBmi(weight, height);
  const resultWeight = setWeight(bmi);
  const msg = `Your BMI ${bmi} ${resultWeight}`

  function setResult(msg) {
    const result = document.getElementById('resultado');
  
    result.innerHTML = '';
    const p = setP();
    result.appendChild(p);
    p.innerHTML = msg;
  
    function setColors() {
      if(bmi >= 40 || bmi <= 18.5) {
        return p.classList.add('red');
      } else if ( bmi >= 35) {
        return p.classList.add('orange');
      } else if (bmi >= 25) {
        return p.classList.add('yellow');
      } else {
        return p.classList.add('green');
      }
    }
    setColors();
  }

  setResult(msg);
  
})

function setP() {
  const p = document.createElement('p');
  return p;
}

function getBmi(weigth, height) {
  const calculate = weigth / height ** 2;
  return calculate.toFixed(2);
}

function setWeight(bmi) {
  const result = [
    'Under Weight',
    'Normal Weight',
    'Overweight',
    'Grade 1 Obesity',
    'Grade 2 Obesity',
    'Grade 3 Obesity',
  ]

  if (bmi >= 40) return result[5];
  if (bmi >= 35) return result[4];
  if (bmi >= 30) return result[3];
  if (bmi >= 25) return result[2];
  if (bmi >= 18.5) return result[1];
  if (bmi >= 0) return result[0];
}