const passwordInput = document.getElementById('password-input');
const feedbackDiv = document.getElementById('feedback');

const criteriaConfig = [
    { el: document.getElementById('length'),    test: p => p.length >= 8 },
    { el: document.getElementById('lowercase'), test: p => /[a-z]/.test(p) },
    { el: document.getElementById('uppercase'), test: p => /[A-Z]/.test(p) },
    { el: document.getElementById('number'),    test: p => /[0-9]/.test(p) },
    { el: document.getElementById('symbol'),    test: p => /[^a-zA-Z0-9]/.test(p) }
];

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let score = 0;

    criteriaConfig.forEach(criterion => {
        const isMet = criterion.test(password);
        criterion.el.classList.toggle('met', isMet);
        if (isMet) score++;
    });

    if (password.length === 0) {
        feedbackDiv.textContent = 'Your password strength will appear here.';
        feedbackDiv.className = '';
    } else if (score < 3) {
        feedbackDiv.textContent = 'Weak';
        feedbackDiv.className = 'weak';
    } else if (score < 5) {
        feedbackDiv.textContent = 'Medium';
        feedbackDiv.className = 'medium';
    } else {
        feedbackDiv.textContent = 'Strong';
        feedbackDiv.className = 'strong';
    }
});
