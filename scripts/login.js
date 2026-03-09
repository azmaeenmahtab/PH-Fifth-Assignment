document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (username === 'admin' && pass === 'admin123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials! Please try again.');
    }
});