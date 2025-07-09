document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la página de login ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío del formulario

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Credenciales fijas
            const validEmail = 'anyelo@gmail.com';
            const validPassword = '12345';

            if (email === validEmail && password === validPassword) {
                // Redirecciona a la página de selección de grado
                window.location.href = 'selecciondecurso.html';
            } else {
                alert('Email o contraseña incorrectos.');
            }
        });
    }
});


    // --- Lógica para la página de selección de grado ---
    const gradeButtons = document.querySelectorAll('.grade-button');
    if (gradeButtons.length > 0) {
        gradeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const grade = button.getAttribute('data-grade');
                const gradeText = button.textContent;
                alert(`Has seleccionado: ${gradeText} (Grado ${grade})`);

                // Opcional: redirigir a otra página
                // window.location.href = `pagina_grado_${grade}.html`;
            });
        });
    }
