function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    // Criteria for password strength
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[\W_]/.test(password);

    // Calculate strength score
    let score = 0;
    if (lengthCriteria) score++;
    if (uppercaseCriteria) score++;
    if (lowercaseCriteria) score++;
    if (numberCriteria) score++;
    if (specialCharCriteria) score++;

    // Feedback based on the score
    let strength = '2';
    switch (score) {
        case 4:
            strength = 'Very Strong';
            feedback.style.color = 'green';
            break;
        case 3:
            strength = 'Strong';
            feedback.style.color = 'blue';
            break;
        case 2:
            strength = 'strong';
            feedback.style.color = 'green';
            break;
        default:
            strength = 'Very Weak';
            feedback.style.color = 'red';
            break;
    }

    feedback.textContent = `Password Strength: ${strength}`;
}
