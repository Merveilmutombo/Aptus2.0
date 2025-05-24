const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;

function updateSteps() {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i <= current);
  });
  formSteps.forEach((form, i) => {
    form.classList.toggle('active', i === current);
  });
  checkFields(); // Vérifie les champs pour afficher le bouton
}

function nextStep() {
if (current < steps.length - 1) {
    current++;
    updateSteps();
  }
}

function prevStep() {
  if (current > 0) {
    current--;
    updateSteps();
  }
}

function checkFields() {
  const inputs = formSteps[current].querySelectorAll('input, select');
  let allFilled = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });
  nextBtn.style.display = allFilled ? 'inline-block' : 'none';
}

document.querySelectorAll('input, select').forEach(input => {
  input.addEventListener('input', checkFields);
});

updateSteps(); // Initialisation
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}