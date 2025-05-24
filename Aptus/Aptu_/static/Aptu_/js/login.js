const body = document.querySelector('body');
        const darkModeButton = document.getElementById('darkmode');


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