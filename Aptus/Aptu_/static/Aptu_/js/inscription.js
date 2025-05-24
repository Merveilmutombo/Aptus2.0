
        const body = document.querySelector('body');
        const darkModeButton = document.getElementById('darkmode');
        const formSteps = document.querySelectorAll('.form-step');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const steps = document.querySelectorAll('.step');

        let currentStep = 0;

        showStep(currentStep);

        function showStep(step) {
            formSteps[step].classList.add('active');
            steps[step].classList.add('active');

            if (step === 0) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'inline-block';
            }

            if (step === formSteps.length - 1) {
                nextBtn.textContent = 'S\'inscrire';
            } else {
                nextBtn.textContent = 'Suivant';
            }
        }

        function nextPrev(n) {
            formSteps[currentStep].classList.remove('active');
            steps[currentStep].classList.remove('active');
            currentStep += n;

            if (currentStep >= formSteps.length) {
                document.querySelector('form').submit();
                return;
            }

            showStep(currentStep);
        }

        darkModeButton.addEventListener('click', () => {
            body.classList.toggle('active');
            if (body.classList.contains('active')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });

        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('active');
        }
 